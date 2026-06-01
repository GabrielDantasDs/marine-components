export type SwitchSize = "sm" | "md" | "lg"
export type SwitchColor = "primary" | "success" | "danger"

export type SwitchProps = {
  label?: string
  size?: SwitchSize
  color?: SwitchColor
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
}
