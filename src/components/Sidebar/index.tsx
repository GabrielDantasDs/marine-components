import React from "react"
import type { SidebarProps, SidebarItemProps, SidebarGroupProps } from "./types"
import {
  Container,
  Header,
  Footer,
  Content,
  GroupContainer,
  GroupTitle,
  ItemStyled,
  ItemIcon,
  ItemLabel,
  Divider,
} from "./styled"

function Sidebar({
  variant = "default",
  collapsed = false,
  width = "260px",
  collapsedWidth = "68px",
  header,
  footer,
  children,
}: SidebarProps) {
  const resolvedWidth = collapsed
    ? (typeof collapsedWidth === "number" ? `${collapsedWidth}px` : collapsedWidth)
    : (typeof width === "number" ? `${width}px` : width)

  return (
    <Container $variant={variant} $width={resolvedWidth}>
      {header && <Header>{header}</Header>}
      <Content>{children}</Content>
      {footer && <Footer>{footer}</Footer>}
    </Container>
  )
}

function SidebarItem({ icon, active = false, href, disabled = false, onClick, children }: SidebarItemProps) {
  return (
    <ItemStyled
      $active={active}
      $disabled={disabled}
      href={disabled ? undefined : href}
      onClick={disabled ? undefined : onClick}
      role={href ? undefined : "button"}
      tabIndex={disabled ? -1 : 0}
    >
      {icon && <ItemIcon $active={active}>{icon}</ItemIcon>}
      <ItemLabel>{children}</ItemLabel>
    </ItemStyled>
  )
}

function SidebarGroup({ title, children }: SidebarGroupProps) {
  return (
    <GroupContainer>
      {title && <GroupTitle>{title}</GroupTitle>}
      {children}
    </GroupContainer>
  )
}

function SidebarDivider() {
  return <Divider />
}

export default Object.assign(Sidebar, {
  Item: SidebarItem,
  Group: SidebarGroup,
  Divider: SidebarDivider,
})
