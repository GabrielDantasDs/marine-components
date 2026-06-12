import styled, { css, keyframes } from "styled-components"
import type { TooltipPlacement, TooltipColor, TooltipSize } from "./types"

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
`

const colorStyles: Record<TooltipColor, { bg: string; text: string; border: string }> = {
  dark: { bg: "#1f2937", text: "#ffffff", border: "transparent" },
  light: { bg: "#ffffff", text: "#1a1a1a", border: "#e0e0e0" },
}

const sizeStyles: Record<TooltipSize, { padding: string; font: string }> = {
  sm: { padding: "4px 8px", font: "0.72rem" },
  md: { padding: "6px 12px", font: "0.8rem" },
}

const ARROW_SIZE = 6
const GAP = 8

const placementMap: Record<TooltipPlacement, ReturnType<typeof css>> = {
  top: css`
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: ${GAP}px;
  `,
  bottom: css`
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: ${GAP}px;
  `,
  left: css`
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-right: ${GAP}px;
  `,
  right: css`
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: ${GAP}px;
  `,
}

const arrowPlacement: Record<TooltipPlacement, ReturnType<typeof css>> = {
  top: css`
    bottom: -${ARROW_SIZE}px;
    left: 50%;
    transform: translateX(-50%);
    border-left: ${ARROW_SIZE}px solid transparent;
    border-right: ${ARROW_SIZE}px solid transparent;
    border-top: ${ARROW_SIZE}px solid var(--tooltip-bg);
  `,
  bottom: css`
    top: -${ARROW_SIZE}px;
    left: 50%;
    transform: translateX(-50%);
    border-left: ${ARROW_SIZE}px solid transparent;
    border-right: ${ARROW_SIZE}px solid transparent;
    border-bottom: ${ARROW_SIZE}px solid var(--tooltip-bg);
  `,
  left: css`
    right: -${ARROW_SIZE}px;
    top: 50%;
    transform: translateY(-50%);
    border-top: ${ARROW_SIZE}px solid transparent;
    border-bottom: ${ARROW_SIZE}px solid transparent;
    border-left: ${ARROW_SIZE}px solid var(--tooltip-bg);
  `,
  right: css`
    left: -${ARROW_SIZE}px;
    top: 50%;
    transform: translateY(-50%);
    border-top: ${ARROW_SIZE}px solid transparent;
    border-bottom: ${ARROW_SIZE}px solid transparent;
    border-right: ${ARROW_SIZE}px solid var(--tooltip-bg);
  `,
}

export const Anchor = styled.span`
  display: inline-flex;
  position: relative;
`

export const Bubble = styled.div<{
  $placement: TooltipPlacement
  $color: TooltipColor
  $size: TooltipSize
  $maxWidth: number
}>`
  --tooltip-bg: ${({ $color }) => colorStyles[$color].bg};

  position: absolute;
  z-index: 1500;
  font-family: "Lexend", sans-serif;
  font-size: ${({ $size }) => sizeStyles[$size].font};
  font-weight: 400;
  line-height: 1.4;
  padding: ${({ $size }) => sizeStyles[$size].padding};
  max-width: ${({ $maxWidth }) => $maxWidth}px;
  white-space: pre-wrap;
  word-wrap: break-word;
  border-radius: 6px;
  pointer-events: none;

  background-color: ${({ $color }) => colorStyles[$color].bg};
  color: ${({ $color }) => colorStyles[$color].text};
  border: 1px solid ${({ $color }) => colorStyles[$color].border};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);

  animation: ${fadeIn} 0.15s ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  ${({ $placement }) => placementMap[$placement]}
`

export const Arrow = styled.span<{ $placement: TooltipPlacement }>`
  position: absolute;
  width: 0;
  height: 0;
  ${({ $placement }) => arrowPlacement[$placement]}
`
