import styled, { css } from "styled-components"
import type { AlertType, AlertVariant } from "./types"

const palette: Record<AlertType, { main: string; light: string; dark: string }> = {
  info: { main: "#4a90d9", light: "#e8f0fb", dark: "#1e5a9e" },
  success: { main: "#4caf6a", light: "#e6f5ea", dark: "#2e7d42" },
  warning: { main: "#f0a030", light: "#fef4e0", dark: "#b87200" },
  error: { main: "#e05252", light: "#fde8e8", dark: "#b32828" },
}

function getVariantStyles(type: AlertType, variant: AlertVariant) {
  const p = palette[type]
  switch (variant) {
    case "filled":
      return css`
        background-color: ${p.main};
        color: #ffffff;
        border: none;
      `
    case "outlined":
      return css`
        background-color: transparent;
        color: ${p.dark};
        border: 1px solid ${p.main};
      `
    case "light":
      return css`
        background-color: ${p.light};
        color: ${p.dark};
        border: 1px solid transparent;
      `
  }
}

/* ---- Alert ---- */

export const AlertRoot = styled.div<{
  $type: AlertType
  $variant: AlertVariant
}>`
  font-family: "Lexend", sans-serif;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 0.88rem;
  line-height: 1.5;
  ${({ $type, $variant }) => getVariantStyles($type, $variant)}
`

export const AlertIcon = styled.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  font-size: 1.2rem;
  margin-top: 1px;
`

export const AlertBody = styled.div`
  flex: 1;
  min-width: 0;
`

export const AlertTitle = styled.div`
  font-weight: 600;
  margin-bottom: 2px;
`

export const AlertMessage = styled.div`
  font-weight: 400;
`

export const AlertActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  margin-left: auto;
`

export const ActionButton = styled.button<{ $type: AlertType; $variant: AlertVariant }>`
  font-family: "Lexend", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  border: none;
  background: none;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  text-decoration: underline;
  text-underline-offset: 2px;

  color: ${({ $variant, $type }) =>
    $variant === "filled" ? "#ffffff" : palette[$type].dark};

  &:hover {
    opacity: 0.8;
  }
`

export const CloseButton = styled.button<{ $variant: AlertVariant; $type: AlertType }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 4px;
  padding: 0;
  flex-shrink: 0;

  color: ${({ $variant, $type }) =>
    $variant === "filled" ? "rgba(255,255,255,0.85)" : palette[$type].dark};

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`

/* ---- Banner ---- */

export const BannerRoot = styled.div<{
  $type: AlertType
  $sticky: boolean
}>`
  font-family: "Lexend", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 10px 20px;
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.4;
  background-color: ${({ $type }) => palette[$type].main};
  color: #ffffff;
  width: 100%;
  box-sizing: border-box;

  ${({ $sticky }) =>
    $sticky &&
    css`
      position: sticky;
      top: 0;
      z-index: 1100;
    `}
`

export const BannerContent = styled.span`
  flex: 1;
  text-align: center;
`

export const BannerAction = styled.button`
  font-family: "Lexend", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`

export const BannerClose = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 4px;
  padding: 0;
  color: rgba(255, 255, 255, 0.85);
  flex-shrink: 0;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`
