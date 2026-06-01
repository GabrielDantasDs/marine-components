import type React from "react"

export type CardListDirection = "vertical" | "horizontal"
export type CardListRadius = "regular" | "rounded"
export type CardListShadow = "none" | "sm" | "md" | "lg"
export type CardListGap = "sm" | "md" | "lg"

export type CardListProps = {
  direction?: CardListDirection
  radius?: CardListRadius
  shadow?: CardListShadow
  gap?: CardListGap
  maxHeight?: string | number
  header?: React.ReactNode
  footer?: React.ReactNode
  children: React.ReactNode
}
