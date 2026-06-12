import styled, { css, keyframes } from "styled-components"
import type { ModalSize, ModalRadius } from "./types"

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`

const sizeMap: Record<ModalSize, ReturnType<typeof css>> = {
  sm: css`width: 400px;`,
  md: css`width: 540px;`,
  lg: css`width: 720px;`,
  fullscreen: css`
    width: calc(100vw - 32px);
    height: calc(100vh - 32px);
    max-width: none;
    max-height: none;
  `,
}

const radiusMap: Record<ModalRadius, string> = {
  regular: "12px",
  rounded: "32px",
}

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 16px;
  animation: ${fadeIn} 0.15s ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export const Container = styled.div<{
  $size: ModalSize
  $radius: ModalRadius
}>`
  font-family: "Lexend", sans-serif;
  background-color: #ffffff;
  border-radius: ${({ $radius }) => radiusMap[$radius]};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: calc(100vh - 32px);
  animation: ${slideUp} 0.2s ease-out;
  ${({ $size }) => sizeMap[$size]}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 20px 24px 0;
  flex-shrink: 0;
`

export const HeaderIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  flex-shrink: 0;
  margin-top: 2px;
`

export const HeaderText = styled.div`
  flex: 1;
  min-width: 0;
`

export const Title = styled.h2`
  font-size: 1.15rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.3;
`

export const Subtitle = styled.p`
  font-size: 0.85rem;
  font-weight: 300;
  color: #6b6b6b;
  margin: 4px 0 0;
  line-height: 1.4;
`

export const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: #8a8a8a;
  cursor: pointer;
  flex-shrink: 0;
  transition: background-color 0.15s ease-out, color 0.15s ease-out;
  font-size: 1.1rem;

  &:hover {
    background-color: #f5f5f5;
    color: #4a4a4a;
  }

  &:focus-visible {
    outline: 2px solid #4a90d9;
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const Body = styled.div`
  padding: 20px 24px;
  overflow-y: auto;
  flex: 1;
  font-size: 0.9rem;
  color: #333333;
  line-height: 1.6;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  padding: 0 24px 20px;
  flex-shrink: 0;
`

export const CustomHeader = styled.div`
  padding: 20px 24px 0;
  flex-shrink: 0;
`
