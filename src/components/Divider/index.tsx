import React from "react"
import type { DividerProps } from "./types"
import {
  HorizontalRoot,
  HorizontalWithText,
  Line,
  TextLabel,
  VerticalRoot,
} from "./styled"

function Divider({
  orientation = "horizontal",
  variant = "solid",
  children,
  textAlign = "center",
  color = "#e0e0e0",
  thickness = 1,
  spacing = 16,
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <VerticalRoot
        role="separator"
        aria-orientation="vertical"
        $variant={variant}
        $color={color}
        $thickness={thickness}
        $spacing={spacing}
      />
    )
  }

  if (children) {
    return (
      <HorizontalWithText
        role="separator"
        $spacing={spacing}
        $textAlign={textAlign}
      >
        <Line $variant={variant} $color={color} $thickness={thickness} />
        <TextLabel>{children}</TextLabel>
        <Line $variant={variant} $color={color} $thickness={thickness} />
      </HorizontalWithText>
    )
  }

  return (
    <HorizontalRoot role="separator" $spacing={spacing}>
      <Line $variant={variant} $color={color} $thickness={thickness} />
    </HorizontalRoot>
  )
}

export default Divider
