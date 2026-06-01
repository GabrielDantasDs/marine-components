import styled, { css, keyframes } from "styled-components"
import type { DrawerPlacement, DrawerSize } from "./types"

const sizeMap: Record<DrawerSize, string> = {
  sm: "280px",
  md: "400px",
  lg: "560px",
  full: "100%",
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

function slideIn(placement: DrawerPlacement) {
  const from: Record<DrawerPlacement, string> = {
    left: "translateX(-100%)",
    right: "translateX(100%)",
    top: "translateY(-100%)",
    bottom: "translateY(100%)",
  }
  return keyframes`
    from { transform: ${from[placement]}; }
    to   { transform: translate(0); }
  `
}

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1200;
  animation: ${fadeIn} 0.2s ease-out;
`

function panelPosition(placement: DrawerPlacement) {
  switch (placement) {
    case "left":
      return css`top: 0; left: 0; bottom: 0;`
    case "right":
      return css`top: 0; right: 0; bottom: 0;`
    case "top":
      return css`top: 0; left: 0; right: 0;`
    case "bottom":
      return css`bottom: 0; left: 0; right: 0;`
  }
}

function panelDimension(placement: DrawerPlacement, size: DrawerSize) {
  const val = sizeMap[size]
  if (placement === "left" || placement === "right") {
    return css`
      width: ${val};
      max-width: 100%;
      height: 100%;
    `
  }
  return css`
    height: ${val};
    max-height: 100%;
    width: 100%;
  `
}

export const Panel = styled.div<{
  $placement: DrawerPlacement
  $size: DrawerSize
}>`
  position: fixed;
  z-index: 1201;
  background-color: #ffffff;
  box-shadow: -2px 0 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  font-family: "Lexend", sans-serif;
  animation: ${({ $placement }) => slideIn($placement)} 0.25s ease-out;

  ${({ $placement }) => panelPosition($placement)}
  ${({ $placement, $size }) => panelDimension($placement, $size)}
`

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid #eee;
  flex-shrink: 0;
`

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const Title = styled.h2`
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0;
  color: #1a1a1a;
`

export const Subtitle = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0;
  color: #6b7280;
`

export const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 6px;
  color: #6b7280;
  flex-shrink: 0;
  margin-top: -2px;

  &:hover {
    background-color: #f0f0f0;
    color: #1a1a1a;
  }
`

export const Body = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`

export const Footer = styled.div`
  padding: 14px 20px;
  border-top: 1px solid #eee;
  flex-shrink: 0;
`
