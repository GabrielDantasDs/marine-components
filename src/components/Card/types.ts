import type React from "react"

export type CardRadius = "regular" | "rounded"
export type CardShadow = "none" | "sm" | "md" | "lg"
export type CardPadding = "none" | "sm" | "md" | "lg"

export type CardProps = {
  title?: string
  subtitle?: string
  radius?: CardRadius
  shadow?: CardShadow
  padding?: CardPadding
  outlined?: boolean
  children: React.ReactNode
  footer?: React.ReactNode
}
