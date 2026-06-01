export type SkeletonVariant = "text" | "circular" | "rectangular" | "rounded"
export type SkeletonAnimation = "pulse" | "wave" | "none"

export type SkeletonProps = {
  variant?: SkeletonVariant
  animation?: SkeletonAnimation
  /** Width in px or string (e.g. "100%") */
  width?: number | string
  /** Height in px or string */
  height?: number | string
  /** Border radius override (px) */
  borderRadius?: number
  /** Number of text lines to render */
  lines?: number
  /** Gap between lines (px) */
  lineGap?: number
  /** Makes the last line shorter (for text variant) */
  lastLineWidth?: string
}
