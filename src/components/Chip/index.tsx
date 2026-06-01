import React from "react"
import type { ChipProps } from "./types"
import { ChipRoot, StartIconWrapper, Label, DeleteButton } from "./styled"

const CloseIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

function Chip({
  label,
  size = "md",
  color = "primary",
  variant = "filled",
  startIcon,
  deletable = false,
  onDelete,
  clickable = false,
  onClick,
  disabled = false,
}: ChipProps) {
  function handleClick() {
    if (disabled || !clickable) return
    onClick?.()
  }

  function handleDelete(e: React.MouseEvent) {
    e.stopPropagation()
    if (disabled) return
    onDelete?.()
  }

  return (
    <ChipRoot
      $size={size}
      $color={color}
      $variant={variant}
      $clickable={clickable}
      $disabled={disabled}
      onClick={clickable ? handleClick : undefined}
      role={clickable ? "button" : undefined}
      tabIndex={clickable && !disabled ? 0 : undefined}
    >
      {startIcon && <StartIconWrapper $size={size}>{startIcon}</StartIconWrapper>}
      <Label>{label}</Label>
      {deletable && (
        <DeleteButton
          $variant={variant}
          onClick={handleDelete}
          aria-label={`Remove ${label}`}
          tabIndex={-1}
        >
          <CloseIcon />
        </DeleteButton>
      )}
    </ChipRoot>
  )
}

export default Chip
