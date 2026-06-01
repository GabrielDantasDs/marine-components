import React from "react"
import type { TypographyProps, TypographyVariant } from "./types"
import { StyledTypography } from "./styled"

const defaultElementMap: Record<TypographyVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body1: "p",
  body2: "p",
  caption: "span",
  overline: "span",
  label: "label",
}

function Typography({
  variant = "body1",
  weight,
  align = "left",
  color = "primary",
  truncate = false,
  as,
  children,
}: TypographyProps) {
  const element = as ?? defaultElementMap[variant]

  return (
    <StyledTypography
      as={element}
      $variant={variant}
      $weight={weight}
      $align={align}
      $color={color}
      $truncate={truncate}
    >
      {children}
    </StyledTypography>
  )
}

export default Typography
