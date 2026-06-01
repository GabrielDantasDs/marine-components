import React, { useState, createContext, useContext, useCallback } from "react"
import type { AccordionProps, AccordionItemProps, AccordionVariant } from "./types"
import {
  Container,
  ItemContainer,
  Header,
  HeaderIcon,
  HeaderTitle,
  Arrow,
  Content,
  ContentInner,
} from "./styled"

type AccordionContextType = {
  variant: AccordionVariant
  openItems: Set<string>
  toggle: (id: string) => void
}

const AccordionContext = createContext<AccordionContextType>({
  variant: "default",
  openItems: new Set(),
  toggle: () => {},
})

let itemCounter = 0

function Accordion({ variant = "default", multiple = false, children }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggle = useCallback((id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        if (!multiple) next.clear()
        next.add(id)
      }
      return next
    })
  }, [multiple])

  return (
    <AccordionContext.Provider value={{ variant, openItems, toggle }}>
      <Container $variant={variant}>{children}</Container>
    </AccordionContext.Provider>
  )
}

function AccordionItem({ title, icon, defaultOpen = false, disabled = false, children }: AccordionItemProps) {
  const [id] = useState(() => `accordion-item-${++itemCounter}`)
  const { variant, openItems, toggle } = useContext(AccordionContext)

  const [initialized, setInitialized] = useState(false)
  if (!initialized) {
    if (defaultOpen) openItems.add(id)
    setInitialized(true)
  }

  const isOpen = openItems.has(id)

  return (
    <ItemContainer $variant={variant} $disabled={disabled}>
      <Header
        type="button"
        $open={isOpen}
        onClick={() => toggle(id)}
        aria-expanded={isOpen}
        disabled={disabled}
      >
        {icon && <HeaderIcon>{icon}</HeaderIcon>}
        <HeaderTitle>{title}</HeaderTitle>
        <Arrow $open={isOpen}>▼</Arrow>
      </Header>
      <Content $open={isOpen}>
        <ContentInner>{children}</ContentInner>
      </Content>
    </ItemContainer>
  )
}

export default Object.assign(Accordion, { Item: AccordionItem })
