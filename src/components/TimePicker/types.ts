export type TimePickerRadius = "regular" | "rounded"
export type TimePickerShrink = "none" | "shrink" | "shrinkAndHide"
export type TimePickerFormat = "12h" | "24h"
export type TimePickerMode = "picker" | "input"

export type TimeValue = {
  hours: number
  minutes: number
}

export type TimePickerProps = {
  label?: string
  placeholder?: string
  helperText?: string
  error?: string
  radius?: TimePickerRadius
  shrink?: TimePickerShrink
  format?: TimePickerFormat
  mode?: TimePickerMode
  minuteStep?: number
  disabled?: boolean
  fullWidth?: boolean
  value?: TimeValue | null
  defaultValue?: TimeValue | null
  onChange?: (time: TimeValue | null) => void
}
