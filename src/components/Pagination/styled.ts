import styled, { css } from "styled-components"
import type { PaginationSize, PaginationVariant, PaginationColor } from "./types"

const colorMap: Record<PaginationColor, string> = {
  primary: "#4a90d9",
  secondary: "#6b7280",
  success: "#4caf6a",
  danger: "#e05252",
}

const sizeMap: Record<PaginationSize, { px: number; font: string }> = {
  sm: { px: 28, font: "0.75rem" },
  md: { px: 34, font: "0.85rem" },
  lg: { px: 40, font: "0.95rem" },
}

export const Nav = styled.nav`
  font-family: "Lexend", sans-serif;
  display: inline-flex;
  align-items: center;
  gap: 4px;
`

function activeStyles(variant: PaginationVariant, color: PaginationColor) {
  const c = colorMap[color]
  switch (variant) {
    case "filled":
      return css`
        background-color: ${c};
        color: #ffffff;
        border-color: ${c};
      `
    case "outlined":
      return css`
        background-color: transparent;
        color: ${c};
        border-color: ${c};
      `
    case "text":
      return css`
        background-color: rgba(74, 144, 217, 0.08);
        color: ${c};
        border-color: transparent;
        font-weight: 600;
      `
  }
}

export const PageButton = styled.button<{
  $size: PaginationSize
  $variant: PaginationVariant
  $color: PaginationColor
  $active: boolean
  $isEllipsis: boolean
}>`
  font-family: "Lexend", sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ $size }) => sizeMap[$size].px}px;
  height: ${({ $size }) => sizeMap[$size].px}px;
  font-size: ${({ $size }) => sizeMap[$size].font};
  padding: 0 4px;
  border-radius: 6px;
  border: 1px solid ${({ $variant }) => ($variant === "outlined" ? "#d0d0d0" : "transparent")};
  background: none;
  color: #3a3a3a;
  cursor: pointer;
  user-select: none;
  transition: all 0.15s ease;

  ${({ $active, $variant, $color }) => $active && activeStyles($variant, $color)}

  ${({ $isEllipsis }) =>
    $isEllipsis &&
    css`
      cursor: default;
      pointer-events: none;
      border-color: transparent;
      letter-spacing: 1px;
    `}

  &:hover:not(:disabled) {
    ${({ $active, $variant }) =>
      !$active &&
      ($variant === "outlined"
        ? css`background-color: #f5f5f5;`
        : css`background-color: #f0f0f0;`)}
  }

  &:focus-visible {
    outline: 2px solid #4a90d9;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const ArrowButton = styled.button<{
  $size: PaginationSize
}>`
  font-family: "Lexend", sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ $size }) => sizeMap[$size].px}px;
  height: ${({ $size }) => sizeMap[$size].px}px;
  border: none;
  background: none;
  color: #555;
  cursor: pointer;
  border-radius: 6px;
  padding: 0;
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    background-color: #f0f0f0;
    color: #1a1a1a;
  }

  &:focus-visible {
    outline: 2px solid #4a90d9;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`
