export type AlertType = "info" | "success" | "warning" | "error"
export type AlertVariant = "filled" | "outlined" | "light"

export type AlertProps = {
  type?: AlertType
  variant?: AlertVariant
  title?: string
  children: React.ReactNode
  /** Custom icon (ReactNode); pass `false` to hide icon */
  icon?: React.ReactNode | false
  closable?: boolean
  onClose?: () => void
  /** Action button */
  action?: {
    label: string
    onClick: () => void
  }
}

export type BannerProps = {
  type?: AlertType
  children: React.ReactNode
  closable?: boolean
  onClose?: () => void
  action?: {
    label: string
    onClick: () => void
  }
  /** Sticky to top of viewport */
  sticky?: boolean
}
