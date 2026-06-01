import styled, { css } from "styled-components"
import type { ChipSize, ChipColor, ChipVariant } from "./types"

const palette: Record<ChipColor, { main: string; light: string; dark: string }> = {
  primary: { main: "#4a90d9", light: "#e8f0fb", dark: "#1e5a9e" },
  secondary: { main: "#6b7280", light: "#f0f1f3", dark: "#3b3f47" },
  success: { main: "#4caf6a", light: "#e6f5ea", dark: "#2e7d42" },
  danger: { main: "#e05252", light: "#fde8e8", dark: "#b32828" },
  warning: { main: "#f0a030", light: "#fef4e0", dark: "#b87200" },
}

const sizeMap: Record<ChipSize, { height: number; font: string; padding: string; iconSize: number }> = {
  sm: { height: 24, font: "0.7rem", padding: "0 8px", iconSize: 14 },
  md: { height: 30, font: "0.8rem", padding: "0 12px", iconSize: 16 },
  lg: { height: 36, font: "0.88rem", padding: "0 14px", iconSize: 18 },
}

function getVariantStyles(color: ChipColor, variant: ChipVariant) {
  const p = palette[color]
  switch (variant) {
    case "filled":
      return css`
        background-color: ${p.main};
        color: #ffffff;
        border: 1px solid transparent;
      `
    case "outlined":
      return css`
        background-color: transparent;
        color: ${p.dark};
        border: 1px solid ${p.main};
      `
    case "light":
      return css`
        background-color: ${p.light};
        color: ${p.dark};
        border: 1px solid transparent;
      `
  }
}

export const ChipRoot = styled.span<{
  $size: ChipSize
  $color: ChipColor
  $variant: ChipVariant
  $clickable: boolean
  $disabled: boolean
}>`
  font-family: "Lexend", sans-serif;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: ${({ $size }) => sizeMap[$size].height}px;
  padding: ${({ $size }) => sizeMap[$size].padding};
  font-size: ${({ $size }) => sizeMap[$size].font};
  font-weight: 500;
  border-radius: 100px;
  box-sizing: border-box;
  user-select: none;
  transition: all 0.15s ease;
  max-width: 100%;

  ${({ $color, $variant }) => getVariantStyles($color, $variant)}

  ${({ $clickable }) =>
    $clickable &&
    css`
      cursor: pointer;
      &:hover {
        filter: brightness(0.92);
      }
      &:active {
        transform: scale(0.96);
      }
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    `}
`

export const StartIconWrapper = styled.span<{ $size: ChipSize }>`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;

  & > svg {
    width: ${({ $size }) => sizeMap[$size].iconSize}px;
    height: ${({ $size }) => sizeMap[$size].iconSize}px;
  }

  & > img {
    width: ${({ $size }) => sizeMap[$size].iconSize + 2}px;
    height: ${({ $size }) => sizeMap[$size].iconSize + 2}px;
    border-radius: 50%;
    object-fit: cover;
  }
`

export const Label = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const DeleteButton = styled.button<{
  $variant: ChipVariant
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: none;
  background: none;
  padding: 0;
  margin-left: 2px;
  border-radius: 50%;
  cursor: pointer;
  flex-shrink: 0;
  color: ${({ $variant }) => ($variant === "filled" ? "rgba(255,255,255,0.75)" : "currentColor")};
  opacity: 0.7;
  transition: opacity 0.15s ease, background-color 0.15s ease;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.1);
  }
`
