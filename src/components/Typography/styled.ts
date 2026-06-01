import styled, { css } from "styled-components"
import type { TypographyVariant, TypographyWeight, TypographyAlign, TypographyColor } from "./types"

const weightMap: Record<TypographyWeight, number> = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
}

const colorMap: Record<TypographyColor, string> = {
  primary: "#1a1a1a",
  secondary: "#4a4a4a",
  muted: "#8a8a8a",
  inherit: "inherit",
}

type VariantStyle = {
  fontSize: string
  lineHeight: string
  defaultWeight: TypographyWeight
  letterSpacing?: string
  textTransform?: string
}

const variantStyles: Record<TypographyVariant, VariantStyle> = {
  h1: { fontSize: "2.25rem", lineHeight: "1.2", defaultWeight: "bold" },
  h2: { fontSize: "1.75rem", lineHeight: "1.25", defaultWeight: "semibold" },
  h3: { fontSize: "1.375rem", lineHeight: "1.3", defaultWeight: "semibold" },
  h4: { fontSize: "1.125rem", lineHeight: "1.35", defaultWeight: "medium" },
  body1: { fontSize: "1rem", lineHeight: "1.6", defaultWeight: "regular" },
  body2: { fontSize: "0.875rem", lineHeight: "1.55", defaultWeight: "regular" },
  caption: { fontSize: "0.75rem", lineHeight: "1.5", defaultWeight: "regular" },
  overline: { fontSize: "0.7rem", lineHeight: "1.5", defaultWeight: "medium", letterSpacing: "0.08em", textTransform: "uppercase" },
  label: { fontSize: "0.8rem", lineHeight: "1.4", defaultWeight: "medium" },
}

export const StyledTypography = styled.span<{
  $variant: TypographyVariant
  $weight: TypographyWeight | undefined
  $align: TypographyAlign
  $color: TypographyColor
  $truncate: boolean
}>`
  font-family: "Lexend", sans-serif;
  margin: 0;
  text-align: ${({ $align }) => $align};
  color: ${({ $color }) => colorMap[$color]};

  ${({ $variant, $weight }) => {
    const style = variantStyles[$variant]
    const resolvedWeight = $weight ?? style.defaultWeight
    return css`
      font-size: ${style.fontSize};
      line-height: ${style.lineHeight};
      font-weight: ${weightMap[resolvedWeight]};
      ${style.letterSpacing && css`letter-spacing: ${style.letterSpacing};`}
      ${style.textTransform && css`text-transform: ${style.textTransform};`}
    `
  }}

  ${({ $truncate }) => $truncate && css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`
