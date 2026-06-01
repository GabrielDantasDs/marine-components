export type DividerOrientation = "horizontal" | "vertical"
export type DividerVariant = "solid" | "dashed" | "dotted"
export type DividerTextAlign = "left" | "center" | "right"

export type DividerProps = {
  orientation?: DividerOrientation
  variant?: DividerVariant
  /** Text or element displayed on the divider */
  children?: React.ReactNode
  /** Position of children text */
  textAlign?: DividerTextAlign
  /** Color override */
  color?: string
  /** Thickness in px */
  thickness?: number
  /** Spacing (margin) in px */
  spacing?: number
}
