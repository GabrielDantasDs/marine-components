import type React from "react"

export type ToastType = "success" | "error" | "warning" | "info"
export type ToastPosition =
  | "top-right"
  | "top-left"
  | "top-center"
  | "bottom-right"
  | "bottom-left"
  | "bottom-center"

export type Toast = {
  id: string
  type: ToastType
  title: string
  message?: string
  icon?: React.ReactNode
  duration?: number
  closable?: boolean
  action?: {
    label: string
    onClick: () => void
  }
}

export type ToastProviderProps = {
  position?: ToastPosition
  maxToasts?: number
  children: React.ReactNode
}

export type ToastOptions = Omit<Toast, "id">
