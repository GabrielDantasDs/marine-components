import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import type { DrawerProps } from "./types"
import {
  Overlay,
  Panel,
  Header,
  HeaderText,
  Title,
  Subtitle,
  CloseButton,
  Body,
  Footer,
} from "./styled"

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

function Drawer({
  open,
  onClose,
  placement = "right",
  size = "md",
  title,
  subtitle,
  children,
  footer,
  closeOnOverlay = true,
  closeOnEsc = true,
  showCloseButton = true,
}: DrawerProps) {
  useEffect(() => {
    if (!open || !closeOnEsc) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [open, closeOnEsc, onClose])

  // Lock body scroll
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = prev }
  }, [open])

  if (!open) return null

  const hasHeader = title || subtitle || showCloseButton

  const content = (
    <>
      <Overlay onClick={closeOnOverlay ? onClose : undefined} />
      <Panel
        $placement={placement}
        $size={size}
        role="dialog"
        aria-modal="true"
        aria-label={title ?? "Drawer"}
      >
        {hasHeader && (
          <Header>
            <HeaderText>
              {title && <Title>{title}</Title>}
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
            </HeaderText>
            {showCloseButton && (
              <CloseButton onClick={onClose} aria-label="Close drawer">
                <CloseIcon />
              </CloseButton>
            )}
          </Header>
        )}
        <Body>{children}</Body>
        {footer && <Footer>{footer}</Footer>}
      </Panel>
    </>
  )

  return ReactDOM.createPortal(content, document.body)
}

export default Drawer
