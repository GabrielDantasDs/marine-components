import type React from "react"

export type RadioSize = "sm" | "md" | "lg"
export type RadioColor = "primary" | "success" | "danger"

export type RadioGroupProps = {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  children: React.ReactNode
}

export type RadioProps = {
  value: string
  label?: string
  size?: RadioSize
  color?: RadioColor
  disabled?: boolean
}
