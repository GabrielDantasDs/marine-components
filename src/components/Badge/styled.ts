import styled, { css, keyframes } from "styled-components"
import type { BadgeColor, BadgePosition, BadgeSize } from "./types"

const colorMap: Record<BadgeColor, string> = {
  primary: "#4a90d9",
  secondary: "#6b7280",
  success: "#4caf6a",
  danger: "#e05252",
  warning: "#f0a030",
}

const sizeMap: Record<BadgeSize, { height: number; minWidth: number; font: string; padding: string; dot: number }> = {
  sm: { height: 16, minWidth: 16, font: "0.65rem", padding: "0 4px", dot: 6 },
  md: { height: 20, minWidth: 20, font: "0.72rem", padding: "0 6px", dot: 8 },
  lg: { height: 24, minWidth: 24, font: "0.8rem", padding: "0 7px", dot: 10 },
}

const positionStyles: Record<BadgePosition, ReturnType<typeof css>> = {
  "top-right": css`top: 0; right: 0; transform: translate(50%, -50%);`,
  "top-left": css`top: 0; left: 0; transform: translate(-50%, -50%);`,
  "bottom-right": css`bottom: 0; right: 0; transform: translate(50%, 50%);`,
  "bottom-left": css`bottom: 0; left: 0; transform: translate(-50%, 50%);`,
}

const pop = keyframes`
  0% { transform: scale(0); }
  60% { transform: scale(1.15); }
  100% { transform: scale(1); }
`

export const Wrapper = styled.span`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  flex-shrink: 0;
`

export const BadgeElement = styled.span<{
  $color: BadgeColor
  $size: BadgeSize
  $position: BadgePosition
  $dot: boolean
  $invisible: boolean
  $standalone: boolean
}>`
  font-family: "Lexend", sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  border-radius: 100px;
  color: #ffffff;
  background-color: ${({ $color }) => colorMap[$color]};
  animation: ${pop} 0.25s ease-out;

  ${({ $invisible }) =>
    $invisible &&
    css`
      transform: scale(0) !important;
      opacity: 0;
      transition: transform 0.2s ease, opacity 0.2s ease;
    `}

  ${({ $dot, $size }) =>
    $dot
      ? css`
          width: ${sizeMap[$size].dot}px;
          height: ${sizeMap[$size].dot}px;
          padding: 0;
          min-width: unset;
        `
      : css`
          height: ${sizeMap[$size].height}px;
          min-width: ${sizeMap[$size].minWidth}px;
          font-size: ${sizeMap[$size].font};
          padding: ${sizeMap[$size].padding};
        `}

  ${({ $standalone, $position }) =>
    !$standalone &&
    css`
      position: absolute;
      ${positionStyles[$position]}
    `}
`
