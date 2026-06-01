import React from "react"
import type { BadgeProps } from "./types"
import { Wrapper, BadgeElement } from "./styled"

function Badge({
  children,
  content,
  max = 99,
  variant = "standard",
  color = "danger",
  size = "md",
  position = "top-right",
  invisible = false,
  showZero = false,
  standalone = false,
}: BadgeProps) {
  const isDot = variant === "dot"

  // Resolve display content
  let displayContent: React.ReactNode = content
  if (!isDot && typeof content === "number") {
    if (content === 0 && !showZero) {
      invisible = true
    }
    displayContent = content > max ? `${max}+` : content
  }

  const badge = (
    <BadgeElement
      $color={color}
      $size={size}
      $position={position}
      $dot={isDot}
      $invisible={invisible}
      $standalone={standalone || !children}
    >
      {!isDot && displayContent}
    </BadgeElement>
  )

  if (!children) return badge

  return (
    <Wrapper>
      {children}
      {badge}
    </Wrapper>
  )
}

export default Badge
