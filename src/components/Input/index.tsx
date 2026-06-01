import React, { useState, useRef, useEffect, useCallback } from "react"
import type { InputProps, AutocompleteOption } from "./types"
import { applyFormat, getPhonePrefix, getPlaceholder } from "./formatters"
import {
  Wrapper,
  Label,
  FloatingLabel,
  InputContainer,
  FloatingInputContainer,
  StyledInput,
  StyledTextarea,
  IconSlot,
  Prefix,
  ToggleButton,
  HelperText,
  AutocompleteDropdown,
  AutocompleteItem,
  AutocompleteWrapper,
} from "./styled"

const EyeOpen = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const EyeClosed = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
)

function Input({
  label,
  placeholder,
  helperText,
  error,
  format = "text",
  country = "US",
  radius = "regular",
  shrink = "none",
  disabled = false,
  fullWidth = false,
  textarea = false,
  rows = 4,
  startIcon,
  endIcon,
  value,
  defaultValue,
  autocomplete = false,
  fetchOptions,
  onOptionSelect,
  onChange,
  onBlur,
}: InputProps) {
  const [focused, setFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [internalValue, setInternalValue] = useState(defaultValue ?? "")
  const [options, setOptions] = useState<AutocompleteOption[]>([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const controlled = value !== undefined
  const displayValue = controlled ? value : internalValue
  const hasValue = displayValue.length > 0

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const raw = e.target.value
    const formatted = format !== "text" && format !== "password" && format !== "email"
      ? applyFormat(raw, format, country)
      : raw

    const syntheticEvent = {
      ...e,
      target: { ...e.target, value: formatted },
    } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

    if (!controlled) setInternalValue(formatted)
    onChange?.(syntheticEvent)

    if (autocomplete && fetchOptions) {
      if (debounceRef.current) clearTimeout(debounceRef.current)
      debounceRef.current = setTimeout(async () => {
        const results = await fetchOptions(formatted)
        setOptions(results)
        setShowDropdown(results.length > 0)
        setActiveIndex(-1)
      }, 300)
    }
  }, [format, country, controlled, onChange, autocomplete, fetchOptions])

  const handleOptionSelect = useCallback((option: AutocompleteOption) => {
    if (!controlled) setInternalValue(option.label)
    onOptionSelect?.(option)
    setShowDropdown(false)
    setActiveIndex(-1)
  }, [controlled, onOptionSelect])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!showDropdown || options.length === 0) return

    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((prev) => (prev + 1) % options.length)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((prev) => (prev - 1 + options.length) % options.length)
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault()
      const option = options[activeIndex]
      if (option) handleOptionSelect(option)
    } else if (e.key === "Escape") {
      setShowDropdown(false)
    }
  }, [showDropdown, options, activeIndex, handleOptionSelect])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const resolvedPlaceholder = shrink !== "none" && !focused && !hasValue
    ? ""
    : placeholder ?? getPlaceholder(format, country)

  const isPassword = format === "password"
  const inputType = isPassword && !showPassword ? "password" : format === "email" ? "email" : "text"
  const showPhonePrefix = format === "phone"
  const isFloating = shrink !== "none"

  const isShrunk = focused || hasValue
  const isHidden = shrink === "shrinkAndHide" && hasValue && !focused

  const InputBox = isFloating ? FloatingInputContainer : InputContainer

  const inputContent = textarea ? (
    <StyledTextarea
      value={displayValue}
      placeholder={resolvedPlaceholder}
      disabled={disabled}
      rows={rows}
      onChange={handleChange}
      onFocus={() => setFocused(true)}
      onBlur={(e) => { setFocused(false); onBlur?.(e) }}
    />
  ) : (
    <StyledInput
      type={inputType}
      value={displayValue}
      placeholder={resolvedPlaceholder}
      disabled={disabled}
      onChange={handleChange}
      onFocus={() => { setFocused(true); if (autocomplete && options.length > 0) setShowDropdown(true) }}
      onBlur={(e) => { setFocused(false); onBlur?.(e) }}
      onKeyDown={handleKeyDown}
    />
  )

  return (
    <Wrapper $fullWidth={fullWidth} ref={wrapperRef}>
      {label && !isFloating && <Label>{label}</Label>}
      <AutocompleteWrapper>
        <InputBox
          $radius={radius}
          $focused={focused}
          $hasError={!!error}
          $disabled={disabled}
        >
          {label && isFloating && (
            <FloatingLabel $shrunk={isShrunk} $hidden={isHidden}>
              {label}
            </FloatingLabel>
          )}
          {startIcon && <IconSlot>{startIcon}</IconSlot>}
          {showPhonePrefix && <Prefix>{getPhonePrefix(country)}</Prefix>}
          {inputContent}
          {isPassword && (
            <ToggleButton
              type="button"
              tabIndex={-1}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeClosed /> : <EyeOpen />}
            </ToggleButton>
          )}
          {endIcon && <IconSlot>{endIcon}</IconSlot>}
        </InputBox>
        {showDropdown && options.length > 0 && (
          <AutocompleteDropdown>
            {options.map((option, i) => (
              <AutocompleteItem
                key={option.value}
                $active={i === activeIndex}
                onMouseDown={() => handleOptionSelect(option)}
              >
                {option.label}
              </AutocompleteItem>
            ))}
          </AutocompleteDropdown>
        )}
      </AutocompleteWrapper>
      {(error || helperText) && (
        <HelperText $isError={!!error}>{error ?? helperText}</HelperText>
      )}
    </Wrapper>
  )
}

export default Input
