import styled, { css, keyframes } from "styled-components"
import type { SidebarVariant } from "./types"

const variantStyles: Record<SidebarVariant, ReturnType<typeof css>> = {
  default: css`
    background-color: #fafbfc;
    border-right: 1px solid #f0f0f0;
  `,
  elevated: css`
    background-color: #ffffff;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.04);
  `,
  outlined: css`
    background-color: #ffffff;
    border-right: 1.5px solid #e0e0e0;
  `,
}

export const Container = styled.aside<{
  $variant: SidebarVariant
  $width: string
}>`
  font-family: "Lexend", sans-serif;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${({ $width }) => $width};
  transition: width 0.2s ease;
  overflow: hidden;
  ${({ $variant }) => variantStyles[$variant]}
`

export const Header = styled.div`
  padding: 20px 16px;
  border-bottom: 1px solid #f0f0f0;
  flex-shrink: 0;
`

export const Footer = styled.div`
  padding: 16px;
  border-top: 1px solid #f0f0f0;
  margin-top: auto;
  flex-shrink: 0;
`

export const Content = styled.nav`
  flex: 1;
  overflow-y: auto;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  & + & {
    margin-top: 8px;
  }
`

export const GroupTitle = styled.span`
  font-size: 0.68rem;
  font-weight: 600;
  color: #8a8a8a;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 8px 12px 4px;
  white-space: nowrap;
  overflow: hidden;
`

const activeGlow = keyframes`
  0% { transform: scale(0.95); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`

export const ItemStyled = styled.a<{ $active: boolean; $disabled: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.15s ease;
  position: relative;
  overflow: hidden;
  white-space: nowrap;

  font-size: 0.88rem;
  font-weight: ${({ $active }) => $active ? 500 : 400};
  color: ${({ $active, $disabled }) =>
    $disabled ? "#c0c0c0" : $active ? "#4a90d9" : "#4a4a4a"};
  background-color: ${({ $active }) => $active ? "#eef4fb" : "transparent"};

  ${({ $active }) => $active && css`
    box-shadow: 0 1px 3px rgba(74, 144, 217, 0.12);
    animation: ${activeGlow} 0.2s ease-out;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 20%;
      bottom: 20%;
      width: 3px;
      border-radius: 0 3px 3px 0;
      background-color: #4a90d9;
    }
  `}

  ${({ $disabled }) => $disabled && css`
    cursor: not-allowed;
    pointer-events: none;
  `}

  &:hover {
    ${({ $active, $disabled }) => !$active && !$disabled && css`
      background-color: #f5f7fa;
      color: #2a2a2a;
      transform: translateX(2px);
    `}
  }

  &:active:not([disabled]) {
    ${({ $active }) => !$active && css`
      transform: translateX(2px) scale(0.98);
      background-color: #edf0f5;
    `}
  }
`

export const ItemIcon = styled.span<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15em;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  color: ${({ $active }) => $active ? "#4a90d9" : "#6b6b6b"};
  transition: color 0.15s ease;
`

export const ItemLabel = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #f0f0f0;
  margin: 8px 12px;
`
