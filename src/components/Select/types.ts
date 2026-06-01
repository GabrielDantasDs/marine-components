import type React from "react"

export type SelectRadius = "regular" | "rounded"
export type SelectShrink = "none" | "shrink" | "shrinkAndHide"

export type SelectOption = {
  label: string
  value: string
}

export type SelectProps = {
  label?: string
  placeholder?: string
  helperText?: string
  error?: string
  radius?: SelectRadius
  shrink?: SelectShrink
  disabled?: boolean
  fullWidth?: boolean
  multiple?: boolean
  searchable?: boolean
  options: SelectOption[]
  value?: string | string[]
  defaultValue?: string | string[]
  startIcon?: React.ReactNode
  onChange?: (value: string | string[]) => void
  onAddOption?: (label: string) => void
  onEditOption?: (option: SelectOption, newLabel: string) => void
  onDeleteOption?: (option: SelectOption) => void
}
