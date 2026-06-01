import React from "react"
import type { ButtonProps } from "./types"
import { StyledButton, ButtonContent, IconWrapper } from "./styled"

function Button({
  variant = "filled",
  size = "md",
  color = "primary",
  radius = "regular",
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  children,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $color={color}
      $radius={radius}
      $fullWidth={fullWidth}
      disabled={disabled}
      {...rest}
    >
      <ButtonContent>
        {startIcon && <IconWrapper>{startIcon}</IconWrapper>}
        {children}
        {endIcon && <IconWrapper>{endIcon}</IconWrapper>}
      </ButtonContent>
    </StyledButton>
  )
}

export default Button
