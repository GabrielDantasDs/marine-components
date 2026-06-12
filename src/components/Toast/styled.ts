import styled, { css, keyframes } from "styled-components"
import type { ToastType, ToastPosition } from "./types"

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(-12px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`

const slideOut = keyframes`
  from { opacity: 1; transform: translateY(0) scale(1); }
  to { opacity: 0; transform: translateY(-8px) scale(0.96); }
`

const positionStyles: Record<ToastPosition, ReturnType<typeof css>> = {
  "top-right": css`top: 20px; right: 20px; align-items: flex-end;`,
  "top-left": css`top: 20px; left: 20px; align-items: flex-start;`,
  "top-center": css`top: 20px; left: 50%; transform: translateX(-50%); align-items: center;`,
  "bottom-right": css`bottom: 20px; right: 20px; align-items: flex-end;`,
  "bottom-left": css`bottom: 20px; left: 20px; align-items: flex-start;`,
  "bottom-center": css`bottom: 20px; left: 50%; transform: translateX(-50%); align-items: center;`,
}

const typeColors: Record<ToastType, { bg: string; border: string; icon: string }> = {
  success: { bg: "#f0faf3", border: "#c8e6cf", icon: "#4caf6a" },
  error: { bg: "#fdf2f2", border: "#f0c8c8", icon: "#e05252" },
  warning: { bg: "#fef8ed", border: "#f0ddb0", icon: "#e5a034" },
  info: { bg: "#eef4fb", border: "#c4d9f0", icon: "#4a90d9" },
}

export const ToastContainer = styled.div<{ $position: ToastPosition }>`
  position: fixed;
  z-index: 3000;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: none;
  ${({ $position }) => positionStyles[$position]}
`

export const ToastItem = styled.div<{
  $type: ToastType
  $exiting: boolean
}>`
  font-family: "Lexend", sans-serif;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-width: 300px;
  max-width: 420px;
  padding: 14px 16px;
  background-color: ${({ $type }) => typeColors[$type].bg};
  border: 1px solid ${({ $type }) => typeColors[$type].border};
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  pointer-events: all;
  animation: ${({ $exiting }) => $exiting ? slideOut : slideIn} 0.2s ease-out forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: ${({ $exiting }) => $exiting ? 0 : 1};
  }
`

export const ToastIcon = styled.span<{ $type: ToastType }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15em;
  color: ${({ $type }) => typeColors[$type].icon};
  flex-shrink: 0;
  margin-top: 1px;
`

export const ToastContent = styled.div`
  flex: 1;
  min-width: 0;
`

export const ToastTitle = styled.span`
  font-size: 0.88rem;
  font-weight: 600;
  color: #1a1a1a;
  display: block;
`

export const ToastMessage = styled.span`
  font-size: 0.8rem;
  font-weight: 300;
  color: #4a4a4a;
  display: block;
  margin-top: 2px;
  line-height: 1.4;
`

export const ToastClose = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: #8a8a8a;
  font-size: 0.85rem;
  width: 24px;
  height: 24px;
  padding: 0;
  border-radius: 4px;
  flex-shrink: 0;
  transition: color 0.15s ease-out, background-color 0.15s ease-out;

  &:hover {
    color: #4a4a4a;
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:focus-visible {
    outline: 2px solid #4a90d9;
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const ToastAction = styled.button`
  font-family: "Lexend", sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  color: #4a90d9;
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px 0;
  margin-top: 4px;

  &:hover { text-decoration: underline; }
`

export const ProgressBar = styled.div<{ $type: ToastType; $duration: number }>`
  position: absolute;
  bottom: 0;
  left: 8px;
  right: 8px;
  height: 3px;
  border-radius: 0 0 10px 10px;
  background-color: ${({ $type }) => typeColors[$type].icon};
  opacity: 0.4;
  animation: shrink ${({ $duration }) => $duration}ms linear forwards;

  @keyframes shrink {
    from { transform: scaleX(1); transform-origin: left; }
    to { transform: scaleX(0); transform-origin: left; }
  }
`

export const ToastItemWrapper = styled.div`
  position: relative;
`
