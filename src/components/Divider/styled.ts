import styled, { css } from "styled-components"
import type { DividerVariant, DividerTextAlign } from "./types"

/* ---- Horizontal ---- */

export const HorizontalRoot = styled.div<{
  $spacing: number
}>`
  display: flex;
  align-items: center;
  width: 100%;
  margin: ${({ $spacing }) => $spacing}px 0;
`

export const Line = styled.span<{
  $variant: DividerVariant
  $color: string
  $thickness: number
}>`
  flex: 1;
  border: none;
  border-top-style: ${({ $variant }) => $variant};
  border-top-width: ${({ $thickness }) => $thickness}px;
  border-top-color: ${({ $color }) => $color};
`

const textAlignStyles: Record<DividerTextAlign, ReturnType<typeof css>> = {
  left: css`
    & > ${Line}:first-child { flex: 0 0 24px; }
  `,
  center: css``,
  right: css`
    & > ${Line}:last-child { flex: 0 0 24px; }
  `,
}

export const HorizontalWithText = styled(HorizontalRoot)<{
  $textAlign: DividerTextAlign
}>`
  ${({ $textAlign }) => textAlignStyles[$textAlign]}
`

export const TextLabel = styled.span`
  font-family: "Lexend", sans-serif;
  font-size: 0.8rem;
  color: #6b7280;
  padding: 0 12px;
  white-space: nowrap;
  flex-shrink: 0;
`

/* ---- Vertical ---- */

export const VerticalRoot = styled.span<{
  $variant: DividerVariant
  $color: string
  $thickness: number
  $spacing: number
}>`
  display: inline-block;
  align-self: stretch;
  min-height: 1em;
  border: none;
  border-left-style: ${({ $variant }) => $variant};
  border-left-width: ${({ $thickness }) => $thickness}px;
  border-left-color: ${({ $color }) => $color};
  margin: 0 ${({ $spacing }) => $spacing}px;
`
