import styled, { css } from "styled-components"
import type { NavbarPosition, NavbarVariant } from "./types"

const positionStyles: Record<NavbarPosition, ReturnType<typeof css>> = {
  fixed: css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  `,
  sticky: css`
    position: sticky;
    top: 0;
    z-index: 1000;
  `,
  static: css`
    position: relative;
  `,
}

const variantStyles: Record<NavbarVariant, ReturnType<typeof css>> = {
  default: css`
    background-color: #ffffff;
    border-bottom: 1px solid #f0f0f0;
  `,
  elevated: css`
    background-color: #ffffff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
  `,
  outlined: css`
    background-color: #ffffff;
    border-bottom: 1.5px solid #e0e0e0;
  `,
  transparent: css`
    background-color: transparent;
  `,
}

export const NavbarContainer = styled.nav<{
  $position: NavbarPosition
  $variant: NavbarVariant
  $height: string
}>`
  font-family: "Lexend", sans-serif;
  display: flex;
  align-items: center;
  height: ${({ $height }) => $height};
  ${({ $position }) => positionStyles[$position]}
  ${({ $variant }) => variantStyles[$variant]}
`

export const NavbarInner = styled.div<{ $fullWidth: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${({ $fullWidth }) => $fullWidth ? "100%" : "1200px"};
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
`

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`

export const Title = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  white-space: nowrap;
`

export const CenterArea = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin: 0 32px;
`

export const EndArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  margin-left: auto;
`

export const NavItemStyled = styled.a<{ $active: boolean }>`
  font-family: "Lexend", sans-serif;
  font-size: 0.88rem;
  font-weight: ${({ $active }) => $active ? 500 : 400};
  color: ${({ $active }) => $active ? "#4a90d9" : "#4a4a4a"};
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.12s ease;
  white-space: nowrap;
  position: relative;

  &:hover {
    color: #4a90d9;
    background-color: #f5f8fc;
  }

  ${({ $active }) => $active && css`
    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 12px;
      right: 12px;
      height: 2px;
      background-color: #4a90d9;
      border-radius: 1px;
    }
  `}
`

const gapMap = { sm: "4px", md: "8px", lg: "16px" }

export const NavGroupStyled = styled.div<{ $gap: "sm" | "md" | "lg" }>`
  display: flex;
  align-items: center;
  gap: ${({ $gap }) => gapMap[$gap]};
`
