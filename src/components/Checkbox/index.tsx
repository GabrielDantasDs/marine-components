import React, { useState, useRef, useEffect } from "react"
import type { CheckboxProps } from "./types"
import { Wrapper, Box, Label } from "./styled"

const CheckIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="2.5 7 5.5 10.5 11.5 3.5" />
  </svg>
)

const IndeterminateIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round">
    <line x1="3" y1="7" x2="11" y2="7" />
  </svg>
)

function Checkbox({
  label,
  size = "md",
  color = "primary",
  checked,
  defaultChecked = false,
  disabled = false,
  indeterminate = false,
  onChange,
}: CheckboxProps) {
  const controlled = checked !== undefined
  const [internalChecked, setInternalChecked] = useState(defaultChecked)
  const inputRef = useRef<HTMLInputElement>(null)
  const isChecked = controlled ? checked : internalChecked

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  function handleChange() {
    if (disabled) return
    const next = !isChecked
    if (!controlled) setInternalChecked(next)
    onChange?.(next)
  }

  return (
    <Wrapper $disabled={disabled} onClick={(e) => e.stopPropagation()}>
      <Box $checked={isChecked || indeterminate} $size={size} $color={color} onClick={handleChange}>
        {indeterminate ? <IndeterminateIcon /> : isChecked ? <CheckIcon /> : null}
      </Box>
      {label && <Label $size={size}>{label}</Label>}
    </Wrapper>
  )
}

export default Checkbox
