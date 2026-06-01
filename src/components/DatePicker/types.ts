export type DatePickerRadius = "regular" | "rounded"
export type DatePickerShrink = "none" | "shrink" | "shrinkAndHide"

export type DatePickerMode = "picker" | "input"

export type DatePickerProps = {
  label?: string
  placeholder?: string
  helperText?: string
  error?: string
  radius?: DatePickerRadius
  shrink?: DatePickerShrink
  mode?: DatePickerMode
  disabled?: boolean
  fullWidth?: boolean
  value?: Date | null
  defaultValue?: Date | null
  minDate?: Date
  maxDate?: Date
  onChange?: (date: Date | null) => void
}
