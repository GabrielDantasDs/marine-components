import React from "react"
import type { CardListProps } from "./types"
import { Container, Header, Footer, List } from "./styled"

function CardList({
  direction = "vertical",
  radius = "regular",
  shadow = "sm",
  gap = "md",
  maxHeight,
  header,
  footer,
  children,
}: CardListProps) {
  const resolvedMaxHeight = maxHeight
    ? typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight
    : undefined

  return (
    <Container
      data-testid="cardlist-container"
      $radius={radius}
      $shadow={shadow}
    >
      {header && <Header>{header}</Header>}
      <List $direction={direction} $gap={gap} $maxHeight={resolvedMaxHeight}>
        {children}
      </List>
      {footer && <Footer>{footer}</Footer>}
    </Container>
  )
}

export default CardList
