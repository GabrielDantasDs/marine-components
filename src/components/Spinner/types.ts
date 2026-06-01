export type SpinnerSize = "sm" | "md" | "lg"
export type SpinnerColor = "primary" | "secondary" | "success" | "danger" | "inherit"
export type SpinnerVariant = "circular" | "dots" | "bar"

export type SpinnerProps = {
  size?: SpinnerSize
  color?: SpinnerColor
  variant?: SpinnerVariant
  label?: string
  /** 0–100 for determinate mode; omit for indeterminate */
  value?: number
  /** Renders a full overlay (use inside a positioned container, or covers the viewport) */
  overlay?: boolean
  /** Thickness of the circular spinner stroke */
  thickness?: number
}
