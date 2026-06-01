export type CheckboxSize = "sm" | "md" | "lg"
export type CheckboxColor = "primary" | "success" | "danger"

export type CheckboxProps = {
  label?: string
  size?: CheckboxSize
  color?: CheckboxColor
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  onChange?: (checked: boolean) => void
}
