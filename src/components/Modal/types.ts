import type React from "react"

export type ModalSize = "sm" | "md" | "lg" | "fullscreen"
export type ModalRadius = "regular" | "rounded"

export type ModalProps = {
  open: boolean
  onClose: () => void
  size?: ModalSize
  radius?: ModalRadius
  title?: string
  subtitle?: string
  icon?: React.ReactNode
  closeOnOverlay?: boolean
  closeOnEsc?: boolean
  showCloseButton?: boolean
  header?: React.ReactNode
  footer?: React.ReactNode
  children: React.ReactNode
}
