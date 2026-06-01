import styled, { css, keyframes } from "styled-components"
import type { CheckboxSize, CheckboxColor } from "./types"

const pop = keyframes`
  0% { transform: scale(0.8); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
`

const colorMap: Record<CheckboxColor, string> = {
  primary: "#4a90d9",
  success: "#4caf6a",
  danger: "#e05252",
}

const sizeMap: Record<CheckboxSize, { box: number; font: string; icon: number }> = {
  sm: { box: 16, font: "0.8rem", icon: 10 },
  md: { box: 20, font: "0.88rem", icon: 13 },
  lg: { box: 24, font: "0.95rem", icon: 16 },
}

export const Wrapper = styled.label<{ $disabled: boolean }>`
  font-family: "Lexend", sans-serif;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;

  ${({ $disabled }) => $disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`

export const Box = styled.span<{
  $checked: boolean
  $size: CheckboxSize
  $color: CheckboxColor
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => sizeMap[$size].box}px;
  height: ${({ $size }) => sizeMap[$size].box}px;
  border-radius: 5px;
  border: 2px solid ${({ $checked, $color }) => $checked ? colorMap[$color] : "#c0c0c0"};
  background-color: ${({ $checked, $color }) => $checked ? colorMap[$color] : "transparent"};
  transition: all 0.15s ease;
  flex-shrink: 0;

  ${({ $checked }) => $checked && css`
    animation: ${pop} 0.2s ease;
  `}

  svg {
    width: ${({ $size }) => sizeMap[$size].icon}px;
    height: ${({ $size }) => sizeMap[$size].icon}px;
  }
`

export const Label = styled.span<{ $size: CheckboxSize }>`
  font-size: ${({ $size }) => sizeMap[$size].font};
  color: #1a1a1a;
`
