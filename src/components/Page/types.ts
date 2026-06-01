import type React from "react"

export type PageVariant = "default" | "elevated" | "outlined"
export type PagePadding = "none" | "sm" | "md" | "lg"

export type PageProps = {
  title?: string
  subtitle?: string
  variant?: PageVariant
  padding?: PagePadding
  maxWidth?: string | number
  fullHeight?: boolean
  centered?: boolean
  children: React.ReactNode
}
