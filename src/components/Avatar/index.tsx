import React, { useState } from "react"
import type { AvatarProps, AvatarGroupProps } from "./types"
import {
  Wrapper,
  AvatarRoot,
  AvatarImage,
  IconWrapper,
  StatusDot,
  GroupWrapper,
  OverflowAvatar,
  sizeMap,
} from "./styled"

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0]!.charAt(0).toUpperCase()
  return (parts[0]!.charAt(0) + parts[parts.length - 1]!.charAt(0)).toUpperCase()
}

const DefaultIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2.5c-3.3 0-10 1.7-10 5V22h20v-2.5c0-3.3-6.7-5-10-5z"
      fill="currentColor"
    />
  </svg>
)

function Avatar({
  src,
  alt = "",
  name,
  size = "md",
  variant = "circular",
  color = "primary",
  status,
  icon,
}: AvatarProps) {
  const [imgError, setImgError] = useState(false)
  const showImage = !!src && !imgError

  let content: React.ReactNode
  if (showImage) {
    content = <AvatarImage src={src} alt={alt} onError={() => setImgError(true)} />
  } else if (name) {
    content = getInitials(name)
  } else if (icon) {
    content = <IconWrapper $size={size}>{icon}</IconWrapper>
  } else {
    content = (
      <IconWrapper $size={size}>
        <DefaultIcon size={sizeMap[size].icon} />
      </IconWrapper>
    )
  }

  return (
    <Wrapper $size={size}>
      <AvatarRoot
        $size={size}
        $variant={variant}
        $color={color}
        $hasImage={showImage}
        role="img"
        aria-label={alt || name || "avatar"}
      >
        {content}
      </AvatarRoot>
      {status && <StatusDot $status={status} $size={size} $variant={variant} />}
    </Wrapper>
  )
}

function AvatarGroup({
  children,
  max = 5,
  size = "md",
  spacing,
}: AvatarGroupProps) {
  const items = React.Children.toArray(children)
  const effectiveSpacing = spacing ?? sizeMap[size].px * 0.3

  const visible = items.slice(0, max)
  const overflow = items.length - max

  // Reverse so first child renders on top (flex row-reverse)
  const reversed = [...visible].reverse()

  return (
    <GroupWrapper $spacing={effectiveSpacing}>
      {overflow > 0 && (
        <OverflowAvatar $size={size} $variant="circular">
          +{overflow}
        </OverflowAvatar>
      )}
      {reversed.map((child, i) => (
        <span key={i} style={{ borderRadius: "50%", border: "2px solid #fff", boxSizing: "content-box" }}>
          {React.isValidElement<AvatarProps>(child)
            ? React.cloneElement(child, { size })
            : child}
        </span>
      ))}
    </GroupWrapper>
  )
}

Avatar.Group = AvatarGroup
export default Avatar
