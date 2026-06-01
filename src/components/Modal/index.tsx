import React, { useEffect, useCallback } from "react"
import { createPortal } from "react-dom"
import type { ModalProps } from "./types"
import {
  Overlay,
  Container,
  Header,
  HeaderIcon,
  HeaderText,
  Title,
  Subtitle,
  CloseButton,
  Body,
  Footer,
  CustomHeader,
} from "./styled"

function Modal({
  open,
  onClose,
  size = "md",
  radius = "regular",
  title,
  subtitle,
  icon,
  closeOnOverlay = true,
  closeOnEsc = true,
  showCloseButton = true,
  header,
  footer,
  children,
}: ModalProps) {
  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (closeOnEsc && e.key === "Escape") onClose()
  }, [closeOnEsc, onClose])

  useEffect(() => {
    if (!open) return
    document.addEventListener("keydown", handleEsc)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = ""
    }
  }, [open, handleEsc])

  if (!open) return null

  const hasDefaultHeader = title || subtitle || icon
  const showHeader = hasDefaultHeader || header

  const modal = (
    <Overlay
      onClick={closeOnOverlay ? onClose : undefined}
      role="dialog"
      aria-modal="true"
    >
      <Container
        $size={size}
        $radius={radius}
        onClick={(e) => e.stopPropagation()}
      >
        {header ? (
          <CustomHeader>
            {header}
          </CustomHeader>
        ) : showHeader ? (
          <Header>
            {icon && <HeaderIcon>{icon}</HeaderIcon>}
            <HeaderText>
              {title && <Title>{title}</Title>}
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
            </HeaderText>
            {showCloseButton && (
              <CloseButton type="button" onClick={onClose} aria-label="Close">
                ✕
              </CloseButton>
            )}
          </Header>
        ) : showCloseButton ? (
          <Header>
            <HeaderText />
            <CloseButton type="button" onClick={onClose} aria-label="Close">
              ✕
            </CloseButton>
          </Header>
        ) : null}
        <Body>{children}</Body>
        {footer && <Footer>{footer}</Footer>}
      </Container>
    </Overlay>
  )

  if (typeof document === "undefined") return null
  return createPortal(modal, document.body)
}

export default Modal
