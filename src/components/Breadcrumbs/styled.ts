import styled from "styled-components"
import type { BreadcrumbsSize } from "./types"

const sizeMap: Record<BreadcrumbsSize, { font: string; gap: string; iconSize: number }> = {
  sm: { font: "0.75rem", gap: "4px", iconSize: 14 },
  md: { font: "0.85rem", gap: "6px", iconSize: 16 },
  lg: { font: "0.95rem", gap: "8px", iconSize: 18 },
}

export const Nav = styled.nav<{ $size: BreadcrumbsSize }>`
  font-family: "Lexend", sans-serif;
  font-size: ${({ $size }) => sizeMap[$size].font};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ $size }) => sizeMap[$size].gap};
`

export const Separator = styled.span`
  display: inline-flex;
  align-items: center;
  color: #9ca3af;
  user-select: none;
  flex-shrink: 0;
`

export const Item = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`

export const Link = styled.a`
  color: #4a90d9;
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  padding: 2px 4px;
  margin: -2px -4px;

  &:hover {
    text-decoration: underline;
    background-color: rgba(74, 144, 217, 0.06);
  }
`

export const Current = styled.span`
  color: #6b7280;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 4px;
  margin: -2px -4px;
`

export const Ellipsis = styled.button`
  font-family: "Lexend", sans-serif;
  font-size: inherit;
  color: #4a90d9;
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px 6px;
  margin: -2px -4px;
  border-radius: 4px;
  letter-spacing: 1px;

  &:hover {
    background-color: rgba(74, 144, 217, 0.06);
  }
`

export const IconWrapper = styled.span<{ $size: BreadcrumbsSize }>`
  display: inline-flex;
  align-items: center;

  & > svg {
    width: ${({ $size }) => sizeMap[$size].iconSize}px;
    height: ${({ $size }) => sizeMap[$size].iconSize}px;
  }
`
