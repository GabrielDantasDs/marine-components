import styled, { css, keyframes } from "styled-components"
import type { SpinnerSize, SpinnerColor } from "./types"

const colorMap: Record<SpinnerColor, string> = {
  primary: "#4a90d9",
  secondary: "#6b7280",
  success: "#4caf6a",
  danger: "#e05252",
  inherit: "currentColor",
}

const sizeMap: Record<SpinnerSize, { circle: number; font: string; dotSize: number; barH: number }> = {
  sm: { circle: 20, font: "0.75rem", dotSize: 6, barH: 3 },
  md: { circle: 32, font: "0.85rem", dotSize: 8, barH: 4 },
  lg: { circle: 48, font: "0.95rem", dotSize: 10, barH: 6 },
}

export function getColor(color: SpinnerColor) {
  return colorMap[color]
}

export function getSize(size: SpinnerSize) {
  return sizeMap[size]
}

/* ---- Circular spinner ---- */

const rotate = keyframes`
  100% { transform: rotate(360deg); }
`

const dashIndeterminate = keyframes`
  0%   { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
  50%  { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
  100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
`

export const SvgWrapper = styled.svg<{ $size: SpinnerSize }>`
  width: ${({ $size }) => sizeMap[$size].circle}px;
  height: ${({ $size }) => sizeMap[$size].circle}px;
  animation: ${rotate} 1.4s linear infinite;
`

export const TrackCircle = styled.circle`
  fill: none;
  stroke: #e5e7eb;
`

export const SpinnerCircle = styled.circle<{ $color: SpinnerColor; $determinate: boolean }>`
  fill: none;
  stroke: ${({ $color }) => colorMap[$color]};
  stroke-linecap: round;
  ${({ $determinate }) =>
    !$determinate &&
    css`
      animation: ${dashIndeterminate} 1.4s ease-in-out infinite;
    `}
  transition: stroke-dashoffset 0.3s ease;
`

/* ---- Dots ---- */

const bounce = keyframes`
  0%, 80%, 100% { transform: scale(0); opacity: 0.4; }
  40% { transform: scale(1); opacity: 1; }
`

export const DotsWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`

export const Dot = styled.span<{ $color: SpinnerColor; $size: SpinnerSize; $index: number }>`
  width: ${({ $size }) => sizeMap[$size].dotSize}px;
  height: ${({ $size }) => sizeMap[$size].dotSize}px;
  border-radius: 50%;
  background-color: ${({ $color }) => colorMap[$color]};
  animation: ${bounce} 1.2s ease-in-out infinite;
  animation-delay: ${({ $index }) => $index * 0.16}s;
`

/* ---- Bar ---- */

const indeterminateBar = keyframes`
  0%   { left: -40%; width: 40%; }
  50%  { left: 20%; width: 60%; }
  100% { left: 100%; width: 40%; }
`

export const BarTrack = styled.div<{ $size: SpinnerSize }>`
  width: 100%;
  min-width: 120px;
  height: ${({ $size }) => sizeMap[$size].barH}px;
  background-color: #e5e7eb;
  border-radius: ${({ $size }) => sizeMap[$size].barH}px;
  overflow: hidden;
  position: relative;
`

export const BarFill = styled.div<{
  $color: SpinnerColor
  $determinate: boolean
  $value: number
}>`
  position: absolute;
  top: 0;
  height: 100%;
  border-radius: inherit;
  background-color: ${({ $color }) => colorMap[$color]};

  ${({ $determinate, $value }) =>
    $determinate
      ? css`
          left: 0;
          width: ${Math.min(100, Math.max(0, $value))}%;
          transition: width 0.3s ease;
        `
      : css`
          animation: ${indeterminateBar} 1.6s ease-in-out infinite;
        `}
`

/* ---- Layout ---- */

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-family: "Lexend", sans-serif;
`

export const SpinnerLabel = styled.span<{ $size: SpinnerSize }>`
  font-size: ${({ $size }) => sizeMap[$size].font};
  color: #6b7280;
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 10;
`
