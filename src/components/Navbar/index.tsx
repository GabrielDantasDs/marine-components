import React from "react"
import type { NavbarProps, NavItemProps, NavGroupProps } from "./types"
import {
  NavbarContainer,
  NavbarInner,
  LogoArea,
  Title,
  CenterArea,
  EndArea,
  NavItemStyled,
  NavGroupStyled,
} from "./styled"

function Navbar({
  position = "static",
  variant = "default",
  logo,
  title,
  children,
  endContent,
  fullWidth = false,
  height = "60px",
}: NavbarProps) {
  const resolvedHeight = typeof height === "number" ? `${height}px` : height

  return (
    <NavbarContainer
      $position={position}
      $variant={variant}
      $height={resolvedHeight}
    >
      <NavbarInner $fullWidth={fullWidth}>
        {(logo || title) && (
          <LogoArea>
            {logo}
            {title && <Title>{title}</Title>}
          </LogoArea>
        )}
        <CenterArea>{children}</CenterArea>
        {endContent && <EndArea>{endContent}</EndArea>}
      </NavbarInner>
    </NavbarContainer>
  )
}

function NavItem({ active = false, href, onClick, children }: NavItemProps) {
  return (
    <NavItemStyled
      $active={active}
      href={href}
      onClick={onClick}
      role={href ? undefined : "button"}
      tabIndex={0}
    >
      {children}
    </NavItemStyled>
  )
}

function NavGroup({ children, gap = "md" }: NavGroupProps) {
  return <NavGroupStyled $gap={gap}>{children}</NavGroupStyled>
}

export default Object.assign(Navbar, { Item: NavItem, Group: NavGroup })
