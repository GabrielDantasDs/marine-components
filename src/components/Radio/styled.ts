import styled, { css, keyframes } from "styled-components"
import type { RadioSize, RadioColor } from "./types"

const pop = keyframes`
  0% { transform: scale(0); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
`

const colorMap: Record<RadioColor, string> = {
  primary: "#4a90d9",
  success: "#4caf6a",
  danger: "#e05252",
}

const sizeMap: Record<RadioSize, { outer: number; inner: number; font: string }> = {
  sm: { outer: 16, inner: 6, font: "0.8rem" },
  md: { outer: 20, inner: 8, font: "0.88rem" },
  lg: { outer: 24, inner: 10, font: "0.95rem" },
}

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

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

export const Circle = styled.span<{
  $checked: boolean
  $size: RadioSize
  $color: RadioColor
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => sizeMap[$size].outer}px;
  height: ${({ $size }) => sizeMap[$size].outer}px;
  border-radius: 50%;
  border: 2px solid ${({ $checked, $color }) => $checked ? colorMap[$color] : "#c0c0c0"};
  transition: border-color 0.15s ease;
  flex-shrink: 0;

  &::after {
    content: "";
    width: ${({ $size }) => sizeMap[$size].inner}px;
    height: ${({ $size }) => sizeMap[$size].inner}px;
    border-radius: 50%;
    background-color: ${({ $color }) => colorMap[$color]};
    transform: scale(${({ $checked }) => $checked ? 1 : 0});
    transition: transform 0.15s ease;
    ${({ $checked }) => $checked && css`animation: ${pop} 0.2s ease;`}
  }
`

export const Label = styled.span<{ $size: RadioSize }>`
  font-size: ${({ $size }) => sizeMap[$size].font};
  color: #1a1a1a;
`
