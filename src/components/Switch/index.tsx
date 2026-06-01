import React, { useState } from "react"
import type { SwitchProps } from "./types"
import { Wrapper, HiddenInput, Track, Thumb, Label } from "./styled"

function Switch({
  label,
  size = "md",
  color = "primary",
  checked,
  defaultChecked = false,
  disabled = false,
  onChange,
}: SwitchProps) {
  const controlled = checked !== undefined
  const [internalChecked, setInternalChecked] = useState(defaultChecked)
  const isChecked = controlled ? checked : internalChecked

  function handleChange() {
    if (disabled) return
    const next = !isChecked
    if (!controlled) setInternalChecked(next)
    onChange?.(next)
  }

  return (
    <Wrapper $disabled={disabled}>
      <Track $checked={isChecked} $size={size} $color={color} onClick={handleChange}>
        <Thumb $checked={isChecked} $size={size} />
      </Track>
      {label && <Label $size={size}>{label}</Label>}
    </Wrapper>
  )
}

export default Switch
