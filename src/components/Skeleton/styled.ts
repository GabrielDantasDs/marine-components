import styled, { css, keyframes } from "styled-components"
import type { SkeletonVariant, SkeletonAnimation } from "./types"

const pulse = keyframes`
  0%   { opacity: 1; }
  50%  { opacity: 0.4; }
  100% { opacity: 1; }
`

const wave = keyframes`
  0%   { transform: translateX(-100%); }
  60%  { transform: translateX(100%); }
  100% { transform: translateX(100%); }
`

function getBorderRadius(variant: SkeletonVariant, custom?: number) {
  if (custom !== undefined) return `${custom}px`
  switch (variant) {
    case "circular": return "50%"
    case "rounded": return "8px"
    case "text": return "4px"
    case "rectangular": return "0"
  }
}

export const SkeletonBlock = styled.span<{
  $variant: SkeletonVariant
  $animation: SkeletonAnimation
  $width: string
  $height: string
  $borderRadius?: number
}>`
  display: block;
  background-color: #e5e7eb;
  border-radius: ${({ $variant, $borderRadius }) => getBorderRadius($variant, $borderRadius)};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  position: relative;
  overflow: hidden;

  ${({ $animation }) =>
    $animation === "pulse" &&
    css`
      animation: ${pulse} 1.5s ease-in-out infinite;
    `}

  ${({ $animation }) =>
    $animation === "wave" &&
    css`
      &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.5),
          transparent
        );
        animation: ${wave} 1.6s ease-in-out infinite;
      }
    `}
`

export const LinesWrapper = styled.div<{ $gap: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap}px;
`
