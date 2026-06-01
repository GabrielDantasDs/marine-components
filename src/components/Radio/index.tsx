import React, { useState, createContext, useContext } from "react"
import type { RadioGroupProps, RadioProps } from "./types"
import { GroupContainer, Wrapper, HiddenInput, Circle, Label } from "./styled"

type RadioContextType = {
  value: string
  select: (value: string) => void
}

const RadioContext = createContext<RadioContextType>({
  value: "",
  select: () => {},
})

function RadioGroup({ value, defaultValue, onChange, children }: RadioGroupProps) {
  const controlled = value !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue ?? "")
  const activeValue = controlled ? value : internalValue

  function select(val: string) {
    if (!controlled) setInternalValue(val)
    onChange?.(val)
  }

  return (
    <RadioContext.Provider value={{ value: activeValue, select }}>
      <GroupContainer role="radiogroup">{children}</GroupContainer>
    </RadioContext.Provider>
  )
}

function Radio({ value, label, size = "md", color = "primary", disabled = false }: RadioProps) {
  const { value: activeValue, select } = useContext(RadioContext)
  const isChecked = activeValue === value

  function handleChange() {
    if (!disabled) select(value)
  }

  return (
    <Wrapper $disabled={disabled}>
      <HiddenInput
        type="radio"
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
      />
      <Circle $checked={isChecked} $size={size} $color={color} onClick={handleChange} />
      {label && <Label $size={size}>{label}</Label>}
    </Wrapper>
  )
}

export default Object.assign(RadioGroup, { Item: Radio })
