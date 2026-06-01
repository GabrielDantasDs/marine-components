import React from "react"
import type { CardProps } from "./types"
import { Container, Header, Title, Subtitle, Content, Footer } from "./styled"

function Card({
  title,
  subtitle,
  radius = "regular",
  shadow = "sm",
  padding = "md",
  outlined = false,
  children,
  footer,
}: CardProps) {
  return (
    <Container
      data-testid="card-container"
      $radius={radius}
      $shadow={shadow}
      $padding={padding}
      $outlined={outlined}
    >
      {(title || subtitle) && (
        <Header>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Header>
      )}
      <Content>{children}</Content>
      {footer && <Footer>{footer}</Footer>}
    </Container>
  )
}

export default Card
