import React from "react"
import type { SkeletonProps } from "./types"
import { SkeletonBlock, LinesWrapper } from "./styled"

function resolveSize(value: number | string | undefined, fallback: string): string {
  if (value === undefined) return fallback
  return typeof value === "number" ? `${value}px` : value
}

function Skeleton({
  variant = "text",
  animation = "pulse",
  width,
  height,
  borderRadius,
  lines,
  lineGap = 8,
  lastLineWidth = "60%",
}: SkeletonProps) {
  // Multi-line text skeleton
  if (variant === "text" && lines != null && lines > 1) {
    const w = resolveSize(width, "100%")
    const h = resolveSize(height, "14px")

    return (
      <LinesWrapper $gap={lineGap} role="status" aria-label="Loading">
        {Array.from({ length: lines }, (_, i) => (
          <SkeletonBlock
            key={i}
            $variant="text"
            $animation={animation}
            $width={i === lines - 1 ? lastLineWidth : w}
            $height={h}
            $borderRadius={borderRadius}
          />
        ))}
      </LinesWrapper>
    )
  }

  // Default sizes per variant
  let defaultW: string
  let defaultH: string
  switch (variant) {
    case "circular":
      defaultW = "40px"
      defaultH = "40px"
      break
    case "rectangular":
    case "rounded":
      defaultW = "100%"
      defaultH = "120px"
      break
    case "text":
    default:
      defaultW = "100%"
      defaultH = "14px"
      break
  }

  return (
    <SkeletonBlock
      role="status"
      aria-label="Loading"
      $variant={variant}
      $animation={animation}
      $width={resolveSize(width, defaultW)}
      $height={resolveSize(height, defaultH)}
      $borderRadius={borderRadius}
    />
  )
}

export default Skeleton
