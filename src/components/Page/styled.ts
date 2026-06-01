import styled, { css } from "styled-components"
import type { PageVariant, PagePadding } from "./types"

const paddingMap: Record<PagePadding, string> = {
  none: "0",
  sm: "16px",
  md: "32px",
  lg: "48px",
}

const variantStyles: Record<PageVariant, ReturnType<typeof css>> = {
  default: css`
    background-color: #fafafa;
  `,
  elevated: css`
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06);
    border-radius: 12px;
  `,
  outlined: css`
    background-color: #ffffff;
    border: 1px solid #e8e8e8;
    border-radius: 12px;
  `,
}

export const Container = styled.div<{
  $variant: PageVariant
  $padding: PagePadding
  $maxWidth: string
  $fullHeight: boolean
  $centered: boolean
}>`
  font-family: "Lexend", sans-serif;
  display: flex;
  flex-direction: column;
  ${({ $centered }) => $centered && css`align-items: center; text-align: center;`}
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth};
  margin: 0 auto;
  padding: ${({ $padding }) => paddingMap[$padding]};
  ${({ $fullHeight }) => $fullHeight && css`min-height: 100vh;`}
  ${({ $variant }) => variantStyles[$variant]}
`

export const Header = styled.header`
  margin-bottom: 24px;
`

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.3;
`

export const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: #6b6b6b;
  margin: 8px 0 0;
  line-height: 1.5;
`

export const Content = styled.main`
  flex: 1;
`
