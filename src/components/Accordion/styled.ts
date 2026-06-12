import styled, { css } from "styled-components"
import type { AccordionVariant } from "./types"

export const Container = styled.div<{ $variant: AccordionVariant }>`
  font-family: "Lexend", sans-serif;
  display: flex;
  flex-direction: column;

  ${({ $variant }) => $variant === "outlined" && css`
    border: 1px solid #e8e8e8;
    border-radius: 10px;
    overflow: hidden;
  `}

  ${({ $variant }) => $variant === "separated" && css`
    gap: 8px;
  `}
`

export const ItemContainer = styled.div<{
  $variant: AccordionVariant
  $disabled: boolean
}>`
  ${({ $variant }) => $variant === "separated" && css`
    border: 1px solid #e8e8e8;
    border-radius: 10px;
    overflow: hidden;
  `}

  ${({ $variant }) => $variant === "default" && css`
    border-bottom: 1px solid #f0f0f0;
    &:last-child { border-bottom: none; }
  `}

  ${({ $variant }) => $variant === "outlined" && css`
    border-bottom: 1px solid #f0f0f0;
    &:last-child { border-bottom: none; }
  `}

  ${({ $disabled }) => $disabled && css`
    opacity: 0.5;
    pointer-events: none;
  `}
`

export const Header = styled.button<{ $open: boolean }>`
  font-family: "Lexend", sans-serif;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 14px 16px;
  border: none;
  background-color: ${({ $open }) => $open ? "#f9fafb" : "transparent"};
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease-out;

  &:hover {
    background-color: #f5f7fa;
  }

  &:focus-visible {
    outline: 2px solid #4a90d9;
    outline-offset: -2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const HeaderIcon = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 1.1em;
  color: #6b6b6b;
  flex-shrink: 0;
`

export const HeaderTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: #1a1a1a;
  flex: 1;
`

export const Arrow = styled.span<{ $open: boolean }>`
  display: inline-flex;
  align-items: center;
  color: #8a8a8a;
  font-size: 0.75rem;
  transition: transform 0.2s ease-out;
  transform: rotate(${({ $open }) => $open ? "180deg" : "0deg"});

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const Content = styled.div<{ $open: boolean }>`
  overflow: hidden;
  transition: max-height 0.25s ease-out, opacity 0.2s ease-out;
  max-height: ${({ $open }) => $open ? "1000px" : "0"};
  opacity: ${({ $open }) => $open ? 1 : 0};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const ContentInner = styled.div`
  padding: 0 16px 16px;
  font-size: 0.88rem;
  color: #4a4a4a;
  line-height: 1.6;
`
