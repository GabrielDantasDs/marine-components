import styled, { css } from "styled-components"
import type { ButtonVariant, ButtonSize, ButtonColor, ButtonRadius } from "./types"

const colors: Record<ButtonColor, { base: string; hover: string; text: string }> = {
  primary: { base: "#4a90d9", hover: "#3b7bc8", text: "#ffffff" },
  secondary: { base: "#6b7280", hover: "#5b6370", text: "#ffffff" },
  warning: { base: "#e5a034", hover: "#d4902a", text: "#ffffff" },
  danger: { base: "#e05252", hover: "#cc4242", text: "#ffffff" },
  success: { base: "#4caf6a", hover: "#3d9e5a", text: "#ffffff" },
  action: { base: "#7c5cbf", hover: "#6a4dab", text: "#ffffff" },
  secondaryAction: { base: "#5ba8b5", hover: "#4a97a4", text: "#ffffff" },
}

const sizes: Record<ButtonSize, ReturnType<typeof css>> = {
  sm: css`
    padding: 6px 14px;
    font-size: 0.8rem;
  `,
  md: css`
    padding: 10px 20px;
    font-size: 0.9rem;
  `,
  lg: css`
    padding: 14px 28px;
    font-size: 1rem;
  `,
}

const radiusMap: Record<ButtonRadius, string> = {
  regular: "8px",
  rounded: "20px",
}

function getVariantStyles($variant: ButtonVariant, $color: ButtonColor) {
  const c = colors[$color]

  switch ($variant) {
    case "filled":
      return css`
        background-color: ${c.base};
        color: ${c.text};
        border: none;
        &:hover:not(:disabled) { background-color: ${c.hover}; }
      `
    case "outlined":
      return css`
        background-color: transparent;
        color: ${c.base};
        border: 1.5px solid ${c.base};
        &:hover:not(:disabled) {
          background-color: ${c.base};
          color: ${c.text};
        }
      `
    case "text":
      return css`
        background-color: transparent;
        color: ${c.base};
        border: none;
        &:hover:not(:disabled) { background-color: rgba(0, 0, 0, 0.04); }
      `
  }
}

export const StyledButton = styled.button<{
  $variant: ButtonVariant
  $size: ButtonSize
  $color: ButtonColor
  $radius: ButtonRadius
  $fullWidth: boolean
}>`
  font-family: "Lexend", sans-serif;
  font-weight: 500;
  border-radius: ${({ $radius }) => radiusMap[$radius]};
  cursor: pointer;
  transition: all 0.15s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  ${({ $fullWidth }) => $fullWidth && css`width: 100%;`}
  ${({ $size }) => sizes[$size]}
  ${({ $variant, $color }) => getVariantStyles($variant, $color)}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }
`

export const ButtonContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 1.1em;
`
