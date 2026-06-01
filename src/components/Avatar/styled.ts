import styled, { css } from "styled-components"
import type { AvatarSize, AvatarVariant, AvatarColor, AvatarStatus } from "./types"

const colorMap: Record<AvatarColor, string> = {
  primary: "#4a90d9",
  secondary: "#6b7280",
  success: "#4caf6a",
  danger: "#e05252",
  warning: "#f0a030",
}

const statusColorMap: Record<AvatarStatus, string> = {
  online: "#4caf6a",
  offline: "#b0b0b0",
  busy: "#e05252",
  away: "#f0a030",
}

const sizeMap: Record<AvatarSize, { px: number; font: string; statusDot: number; icon: number }> = {
  xs: { px: 24, font: "0.6rem", statusDot: 6, icon: 12 },
  sm: { px: 32, font: "0.72rem", statusDot: 8, icon: 14 },
  md: { px: 40, font: "0.88rem", statusDot: 10, icon: 18 },
  lg: { px: 52, font: "1.1rem", statusDot: 12, icon: 22 },
  xl: { px: 64, font: "1.3rem", statusDot: 14, icon: 26 },
}

const borderRadiusMap: Record<AvatarVariant, string> = {
  circular: "50%",
  rounded: "20%",
  square: "4px",
}

export { sizeMap, colorMap }

export const Wrapper = styled.span<{ $size: AvatarSize }>`
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  width: ${({ $size }) => sizeMap[$size].px}px;
  height: ${({ $size }) => sizeMap[$size].px}px;
`

export const AvatarRoot = styled.span<{
  $size: AvatarSize
  $variant: AvatarVariant
  $color: AvatarColor
  $hasImage: boolean
}>`
  font-family: "Lexend", sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: ${({ $variant }) => borderRadiusMap[$variant]};
  overflow: hidden;
  user-select: none;
  font-weight: 600;
  font-size: ${({ $size }) => sizeMap[$size].font};
  color: #ffffff;

  ${({ $hasImage, $color }) =>
    $hasImage
      ? css`background-color: transparent;`
      : css`background-color: ${colorMap[$color]};`}
`

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

export const IconWrapper = styled.span<{ $size: AvatarSize }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => sizeMap[$size].icon}px;
  height: ${({ $size }) => sizeMap[$size].icon}px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`

export const StatusDot = styled.span<{
  $status: AvatarStatus
  $size: AvatarSize
  $variant: AvatarVariant
}>`
  position: absolute;
  width: ${({ $size }) => sizeMap[$size].statusDot}px;
  height: ${({ $size }) => sizeMap[$size].statusDot}px;
  border-radius: 50%;
  background-color: ${({ $status }) => statusColorMap[$status]};
  border: 2px solid #ffffff;
  box-sizing: content-box;

  ${({ $variant, $size }) => {
    const dot = sizeMap[$size].statusDot
    const offset = $variant === "circular" ? -dot * 0.15 : -dot * 0.25
    return css`
      bottom: ${offset}px;
      right: ${offset}px;
    `
  }}
`

/* ---- Avatar Group ---- */

export const GroupWrapper = styled.div<{ $spacing: number }>`
  display: inline-flex;
  align-items: center;
  flex-direction: row-reverse;

  & > *:not(:first-child) {
    margin-right: ${({ $spacing }) => -$spacing}px;
  }
`

export const OverflowAvatar = styled.span<{
  $size: AvatarSize
  $variant: AvatarVariant
}>`
  font-family: "Lexend", sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => sizeMap[$size].px}px;
  height: ${({ $size }) => sizeMap[$size].px}px;
  border-radius: ${({ $variant }) => borderRadiusMap[$variant]};
  background-color: #e5e7eb;
  color: #555;
  font-weight: 600;
  font-size: ${({ $size }) => sizeMap[$size].font};
  border: 2px solid #ffffff;
  box-sizing: content-box;
`
