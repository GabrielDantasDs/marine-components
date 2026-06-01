import styled, { css } from "styled-components"
import type { SwitchSize, SwitchColor } from "./types"

const colorMap: Record<SwitchColor, string> = {
  primary: "#4a90d9",
  success: "#4caf6a",
  danger: "#e05252",
}

const sizeMap: Record<SwitchSize, { track: { w: number; h: number }; thumb: number; font: string }> = {
  sm: { track: { w: 32, h: 18 }, thumb: 14, font: "0.8rem" },
  md: { track: { w: 42, h: 24 }, thumb: 20, font: "0.88rem" },
  lg: { track: { w: 52, h: 30 }, thumb: 26, font: "0.95rem" },
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

export const Track = styled.span<{
  $checked: boolean
  $size: SwitchSize
  $color: SwitchColor
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: ${({ $size }) => sizeMap[$size].track.w}px;
  height: ${({ $size }) => sizeMap[$size].track.h}px;
  border-radius: ${({ $size }) => sizeMap[$size].track.h}px;
  background-color: ${({ $checked, $color }) => $checked ? colorMap[$color] : "#d0d0d0"};
  transition: background-color 0.2s ease;
  flex-shrink: 0;
`

export const Thumb = styled.span<{
  $checked: boolean
  $size: SwitchSize
}>`
  position: absolute;
  width: ${({ $size }) => sizeMap[$size].thumb}px;
  height: ${({ $size }) => sizeMap[$size].thumb}px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;
  left: 2px;
  transform: translateX(${({ $checked, $size }) =>
    $checked ? `${sizeMap[$size].track.w - sizeMap[$size].thumb - 4}px` : "0"});
`

export const Label = styled.span<{ $size: SwitchSize }>`
  font-size: ${({ $size }) => sizeMap[$size].font};
  color: #1a1a1a;
`
