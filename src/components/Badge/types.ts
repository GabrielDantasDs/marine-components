export type BadgeColor = "primary" | "secondary" | "success" | "danger" | "warning"
export type BadgeVariant = "standard" | "dot"
export type BadgePosition = "top-right" | "top-left" | "bottom-right" | "bottom-left"
export type BadgeSize = "sm" | "md" | "lg"

export type BadgeProps = {
  /** The content the badge is attached to */
  children?: React.ReactNode
  /** Number or short text displayed in the badge */
  content?: React.ReactNode
  /** Max number before showing "99+" style */
  max?: number
  variant?: BadgeVariant
  color?: BadgeColor
  size?: BadgeSize
  position?: BadgePosition
  /** Hide the badge */
  invisible?: boolean
  /** Show badge even when content is 0 */
  showZero?: boolean
  /** Standalone badge (no children wrapper) */
  standalone?: boolean
}
