import type React from "react"

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body1"
  | "body2"
  | "caption"
  | "overline"
  | "label"

export type TypographyWeight = "light" | "regular" | "medium" | "semibold" | "bold"
export type TypographyAlign = "left" | "center" | "right"
export type TypographyColor = "primary" | "secondary" | "muted" | "inherit"

export type TypographyProps = {
  variant?: TypographyVariant
  weight?: TypographyWeight
  align?: TypographyAlign
  color?: TypographyColor
  truncate?: boolean
  as?: React.ElementType
  children: React.ReactNode
}
