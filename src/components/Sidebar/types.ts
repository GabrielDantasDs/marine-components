import type React from "react"

export type SidebarVariant = "default" | "elevated" | "outlined"

export type SidebarProps = {
  variant?: SidebarVariant
  collapsed?: boolean
  width?: string | number
  collapsedWidth?: string | number
  header?: React.ReactNode
  footer?: React.ReactNode
  children: React.ReactNode
}

export type SidebarItemProps = {
  icon?: React.ReactNode
  active?: boolean
  href?: string
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
  children: React.ReactNode
}

export type SidebarGroupProps = {
  title?: string
  children: React.ReactNode
}

export type SidebarDividerProps = Record<string, never>
