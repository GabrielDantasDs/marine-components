import styled, { css } from "styled-components"
import type { CardListDirection, CardListRadius, CardListShadow, CardListGap } from "./types"

const radiusMap: Record<CardListRadius, string> = {
  regular: "8px",
  rounded: "16px",
}

const shadowMap: Record<CardListShadow, string> = {
  none: "none",
  sm: "0 1px 2px rgba(0, 0, 0, 0.04)",
  md: "0 2px 6px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)",
  lg: "0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)",
}

const gapMap: Record<CardListGap, string> = {
  sm: "8px",
  md: "16px",
  lg: "24px",
}

export const Container = styled.div<{
  $radius: CardListRadius
  $shadow: CardListShadow
}>`
  font-family: "Lexend", sans-serif;
  background-color: #ffffff;
  border-radius: ${({ $radius }) => radiusMap[$radius]};
  box-shadow: ${({ $shadow }) => shadowMap[$shadow]};
  padding: 20px;
`

export const Header = styled.div`
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f0f0f0;
`

export const Footer = styled.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
`

export const List = styled.div<{
  $direction: CardListDirection
  $gap: CardListGap
  $maxHeight: string | undefined
}>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction === "vertical" ? "column" : "row"};
  gap: ${({ $gap }) => gapMap[$gap]};
  ${({ $direction }) => $direction === "horizontal" && css`
    overflow-x: auto;
    & > * {
      flex-shrink: 0;
    }
  `}
  ${({ $maxHeight }) => $maxHeight && css`
    max-height: ${$maxHeight};
    overflow-y: auto;
  `}
`
