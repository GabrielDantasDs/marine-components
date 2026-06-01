export type ChipSize = "sm" | "md" | "lg"
export type ChipColor = "primary" | "secondary" | "success" | "danger" | "warning"
export type ChipVariant = "filled" | "outlined" | "light"

export type ChipProps = {
  label: string
  size?: ChipSize
  color?: ChipColor
  variant?: ChipVariant
  /** Icon or avatar before the label */
  startIcon?: React.ReactNode
  /** Show delete/close button */
  deletable?: boolean
  onDelete?: () => void
  /** Make the chip clickable */
  clickable?: boolean
  onClick?: () => void
  disabled?: boolean
}
