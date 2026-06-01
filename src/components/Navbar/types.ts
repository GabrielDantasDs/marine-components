import type React from "react"

export type NavbarPosition = "fixed" | "sticky" | "static"
export type NavbarVariant = "default" | "elevated" | "outlined" | "transparent"

export type NavbarProps = {
  position?: NavbarPosition
  variant?: NavbarVariant
  logo?: React.ReactNode
  title?: string
  children?: React.ReactNode
  endContent?: React.ReactNode
  fullWidth?: boolean
  height?: string | number
}

export type NavItemProps = {
  active?: boolean
  href?: string
  onClick?: React.MouseEventHandler<HTMLElement>
  children: React.ReactNode
}

export type NavGroupProps = {
  children: React.ReactNode
  gap?: "sm" | "md" | "lg"
}
