import styled, { css } from "styled-components"
import type { TabsVariant, TabsSize } from "./types"

const sizeStyles: Record<TabsSize, ReturnType<typeof css>> = {
  sm: css`
    font-size: 0.78rem;
    padding: 6px 14px;
  `,
  md: css`
    font-size: 0.88rem;
    padding: 10px 18px;
  `,
  lg: css`
    font-size: 0.95rem;
    padding: 12px 24px;
  `,
}

export const Container = styled.div`
  font-family: "Lexend", sans-serif;
  display: flex;
  flex-direction: column;
`

export const TabList = styled.div<{
  $variant: TabsVariant
  $fullWidth: boolean
}>`
  display: flex;
  ${({ $fullWidth }) => $fullWidth && css`
    & > * { flex: 1; }
  `}

  ${({ $variant }) => $variant === "underline" && css`
    border-bottom: 1.5px solid #f0f0f0;
    gap: 4px;
  `}

  ${({ $variant }) => $variant === "filled" && css`
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 4px;
    gap: 4px;
  `}

  ${({ $variant }) => $variant === "outlined" && css`
    border-bottom: 1.5px solid #e0e0e0;
    gap: 4px;
  `}
`

export const TabButton = styled.button<{
  $active: boolean
  $variant: TabsVariant
  $size: TabsSize
  $disabled: boolean
}>`
  font-family: "Lexend", sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s ease;
  position: relative;
  ${({ $size }) => sizeStyles[$size]}

  ${({ $variant, $active }) => $variant === "underline" && css`
    background: transparent;
    color: ${$active ? "#4a90d9" : "#6b6b6b"};
    font-weight: ${$active ? 500 : 400};
    border-radius: 6px 6px 0 0;

    &::after {
      content: "";
      position: absolute;
      bottom: -1.5px;
      left: 0;
      right: 0;
      height: 2.5px;
      border-radius: 2px 2px 0 0;
      background-color: ${$active ? "#4a90d9" : "transparent"};
      transition: background-color 0.15s ease;
    }

    &:hover {
      color: #4a90d9;
      background-color: #f8fafc;
    }
  `}

  ${({ $variant, $active }) => $variant === "filled" && css`
    background-color: ${$active ? "#ffffff" : "transparent"};
    color: ${$active ? "#1a1a1a" : "#6b6b6b"};
    font-weight: ${$active ? 500 : 400};
    border-radius: 8px;
    box-shadow: ${$active ? "0 1px 3px rgba(0, 0, 0, 0.06)" : "none"};

    &:hover {
      color: ${$active ? "#1a1a1a" : "#4a4a4a"};
      background-color: ${$active ? "#ffffff" : "rgba(0, 0, 0, 0.04)"};
    }
  `}

  ${({ $variant, $active }) => $variant === "outlined" && css`
    background: transparent;
    color: ${$active ? "#4a90d9" : "#6b6b6b"};
    font-weight: ${$active ? 500 : 400};
    border-radius: 8px 8px 0 0;
    border: 1.5px solid ${$active ? "#e0e0e0" : "transparent"};
    border-bottom: 1.5px solid ${$active ? "#ffffff" : "transparent"};
    margin-bottom: -1.5px;

    &:hover {
      color: #4a90d9;
    }
  `}

  ${({ $disabled }) => $disabled && css`
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  `}
`

export const TabIcon = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 1.1em;
`

export const Panel = styled.div`
  padding: 16px 0;
  font-size: 0.9rem;
  color: #333333;
  line-height: 1.6;
`
