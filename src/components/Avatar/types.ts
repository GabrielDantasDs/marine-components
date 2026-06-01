export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl"
export type AvatarVariant = "circular" | "rounded" | "square"
export type AvatarColor = "primary" | "secondary" | "success" | "danger" | "warning"
export type AvatarStatus = "online" | "offline" | "busy" | "away"

export type AvatarProps = {
  /** Image source */
  src?: string
  alt?: string
  /** Initials fallback (max 2 chars) */
  name?: string
  size?: AvatarSize
  variant?: AvatarVariant
  color?: AvatarColor
  /** Status indicator dot */
  status?: AvatarStatus
  /** Custom fallback icon (ReactNode) */
  icon?: React.ReactNode
}

export type AvatarGroupProps = {
  children: React.ReactNode
  /** Max avatars to show before "+N" */
  max?: number
  size?: AvatarSize
  /** Overlap spacing in px */
  spacing?: number
}
