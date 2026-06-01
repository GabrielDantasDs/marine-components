export type DrawerPlacement = "left" | "right" | "top" | "bottom"
export type DrawerSize = "sm" | "md" | "lg" | "full"

export type DrawerProps = {
  open: boolean
  onClose: () => void
  placement?: DrawerPlacement
  size?: DrawerSize
  title?: string
  subtitle?: string
  children: React.ReactNode
  /** Custom footer content */
  footer?: React.ReactNode
  /** Close on overlay click */
  closeOnOverlay?: boolean
  /** Close on Escape key */
  closeOnEsc?: boolean
  /** Show the close button */
  showCloseButton?: boolean
}
