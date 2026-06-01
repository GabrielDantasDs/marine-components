import styled, { css } from "styled-components"
import type { CardRadius, CardShadow, CardPadding } from "./types"

const radiusMap: Record<CardRadius, string> = {
  regular: "8px",
  rounded: "16px",
}

const shadowMap: Record<CardShadow, string> = {
  none: "none",
  sm: "0 1px 2px rgba(0, 0, 0, 0.04)",
  md: "0 2px 6px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)",
  lg: "0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)",
}

const paddingMap: Record<CardPadding, string> = {
  none: "0",
  sm: "12px",
  md: "20px",
  lg: "32px",
}

export const Container = styled.div<{
  $radius: CardRadius
  $shadow: CardShadow
  $padding: CardPadding
  $outlined: boolean
}>`
  font-family: "Lexend", sans-serif;
  background-color: #ffffff;
  border-radius: ${({ $radius }) => radiusMap[$radius]};
  box-shadow: ${({ $shadow }) => shadowMap[$shadow]};
  padding: ${({ $padding }) => paddingMap[$padding]};
  ${({ $outlined }) => $outlined && css`border: 1px solid #e8e8e8;`}
`

export const Header = styled.div`
  margin-bottom: 16px;
`

export const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.4;
`

export const Subtitle = styled.p`
  font-size: 0.85rem;
  font-weight: 300;
  color: #6b6b6b;
  margin: 6px 0 0;
  line-height: 1.4;
`

export const Content = styled.div`
  color: #333333;
  font-size: 0.9rem;
  line-height: 1.5;
`

export const Footer = styled.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
`
