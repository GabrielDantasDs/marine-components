import type React from "react"

export type TabsVariant = "underline" | "filled" | "outlined"
export type TabsSize = "sm" | "md" | "lg"

export type TabsProps = {
  variant?: TabsVariant
  size?: TabsSize
  fullWidth?: boolean
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  children: React.ReactNode
}

export type TabProps = {
  value: string
  label: string
  icon?: React.ReactNode
  disabled?: boolean
}

export type TabPanelProps = {
  value: string
  children: React.ReactNode
}
