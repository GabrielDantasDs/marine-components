import React from 'react'
import type { PageProps } from './types'
import { Container, Header, Title, Subtitle, Content } from './styled'

function Page({
  title,
  subtitle,
  variant = "default",
  padding = "md",
  maxWidth = "960px",
  fullHeight = false,
  centered = false,
  children,
}: PageProps) {
  const resolvedMaxWidth = typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth

  return (
    <Container
      data-testid="page-container"
      $variant={variant}
      $padding={padding}
      $maxWidth={resolvedMaxWidth}
      $fullHeight={fullHeight}
      $centered={centered}
    >
      {(title || subtitle) && (
        <Header>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Header>
      )}
      <Content>{children}</Content>
    </Container>
  )
}

export default Page
