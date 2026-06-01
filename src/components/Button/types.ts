import type React from "react"

export type ButtonVariant = "filled" | "outlined" | "text"
export type ButtonSize = "sm" | "md" | "lg"
export type ButtonRadius = "regular" | "rounded"
export type ButtonColor =
  | "primary"
  | "secondary"
  | "warning"
  | "danger"
  | "success"
  | "action"
  | "secondaryAction"

export type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  color?: ButtonColor
  radius?: ButtonRadius
  disabled?: boolean
  fullWidth?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">
