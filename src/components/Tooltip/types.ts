export type TooltipPlacement = "top" | "bottom" | "left" | "right"
export type TooltipColor = "dark" | "light"
export type TooltipSize = "sm" | "md"

export type TooltipProps = {
  /** Text or content to display in the tooltip */
  content: React.ReactNode
  children: React.ReactElement
  placement?: TooltipPlacement
  color?: TooltipColor
  size?: TooltipSize
  /** Delay before showing (ms) */
  enterDelay?: number
  /** Delay before hiding (ms) */
  leaveDelay?: number
  /** Disable the tooltip */
  disabled?: boolean
  /** Show arrow pointer */
  arrow?: boolean
  /** Max width in px */
  maxWidth?: number
}
