import React, { useState } from "react"
import type { AlertProps, BannerProps } from "./types"
import type { AlertType } from "./types"
import {
  AlertRoot,
  AlertIcon,
  AlertBody,
  AlertTitle,
  AlertMessage,
  AlertActions,
  ActionButton,
  CloseButton,
  BannerRoot,
  BannerContent,
  BannerAction,
  BannerClose,
} from "./styled"

const defaultIcons: Record<AlertType, React.ReactNode> = {
  info: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 9v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="6.5" r="0.75" fill="currentColor" />
    </svg>
  ),
  success: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 10.5l2 2 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  warning: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L1 18h18L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 8v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="14.5" r="0.75" fill="currentColor" />
    </svg>
  ),
  error: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
}

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

function Alert({
  type = "info",
  variant = "light",
  title,
  children,
  icon,
  closable = false,
  onClose,
  action,
}: AlertProps) {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  function handleClose() {
    setVisible(false)
    onClose?.()
  }

  const showIcon = icon !== false
  const iconContent = icon || defaultIcons[type]

  return (
    <AlertRoot $type={type} $variant={variant} role="alert">
      {showIcon && <AlertIcon>{iconContent}</AlertIcon>}
      <AlertBody>
        {title && <AlertTitle>{title}</AlertTitle>}
        <AlertMessage>{children}</AlertMessage>
      </AlertBody>
      <AlertActions>
        {action && (
          <ActionButton $type={type} $variant={variant} onClick={action.onClick}>
            {action.label}
          </ActionButton>
        )}
        {closable && (
          <CloseButton $type={type} $variant={variant} onClick={handleClose} aria-label="Close">
            <CloseIcon />
          </CloseButton>
        )}
      </AlertActions>
    </AlertRoot>
  )
}

function Banner({
  type = "info",
  children,
  closable = false,
  onClose,
  action,
  sticky = false,
}: BannerProps) {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  function handleClose() {
    setVisible(false)
    onClose?.()
  }

  return (
    <BannerRoot $type={type} $sticky={sticky} role="alert">
      <BannerContent>{children}</BannerContent>
      {action && (
        <BannerAction onClick={action.onClick}>{action.label}</BannerAction>
      )}
      {closable && (
        <BannerClose onClick={handleClose} aria-label="Close">
          <CloseIcon />
        </BannerClose>
      )}
    </BannerRoot>
  )
}

Alert.Banner = Banner
export default Alert
