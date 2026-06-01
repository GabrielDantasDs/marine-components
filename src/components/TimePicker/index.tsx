import React, { useState, useRef, useEffect } from "react"
import type { TimePickerProps, TimeValue } from "./types"
import {
  Wrapper,
  Label,
  FloatingLabel,
  InputContainer,
  DisplayValue,
  PlaceholderText,
  ClockIcon,
  StyledInput,
  HelperText,
  Dropdown,
  Column,
  ColumnLabel,
  ScrollList,
  TimeOption,
  PeriodToggle,
  PeriodButton,
} from "./styled"

function formatTime(time: TimeValue, format: "12h" | "24h"): string {
  if (format === "24h") {
    return `${String(time.hours).padStart(2, "0")}:${String(time.minutes).padStart(2, "0")}`
  }
  const period = time.hours >= 12 ? "PM" : "AM"
  const h = time.hours % 12 || 12
  return `${h}:${String(time.minutes).padStart(2, "0")} ${period}`
}

function formatInputValue(raw: string, format: "12h" | "24h"): string {
  if (format === "24h") {
    const digits = raw.replace(/\D/g, "").slice(0, 4)
    if (digits.length <= 2) return digits
    return `${digits.slice(0, 2)}:${digits.slice(2)}`
  }
  const cleaned = raw.replace(/[^0-9APMapm: ]/g, "")
  const digits = cleaned.replace(/\D/g, "").slice(0, 4)
  let result = ""
  if (digits.length <= 2) {
    result = digits
  } else {
    result = `${digits.slice(0, digits.length - 2)}:${digits.slice(-2)}`
  }
  const upper = cleaned.toUpperCase()
  if (upper.includes("A")) result += " AM"
  else if (upper.includes("P")) result += " PM"
  return result
}

function parseInputTime(text: string, format: "12h" | "24h"): TimeValue | null {
  if (format === "24h") {
    const match = text.match(/^(\d{1,2}):(\d{2})$/)
    if (!match) return null
    const h = parseInt(match[1]!, 10)
    const m = parseInt(match[2]!, 10)
    if (h < 0 || h > 23 || m < 0 || m > 59) return null
    return { hours: h, minutes: m }
  }
  const match = text.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i)
  if (!match) return null
  let h = parseInt(match[1]!, 10)
  const m = parseInt(match[2]!, 10)
  const period = match[3]!.toUpperCase()
  if (h < 1 || h > 12 || m < 0 || m > 59) return null
  if (period === "AM" && h === 12) h = 0
  else if (period === "PM" && h !== 12) h += 12
  return { hours: h, minutes: m }
}

function TimePicker({
  label,
  placeholder,
  helperText,
  error,
  radius = "regular",
  shrink = "none",
  format = "12h",
  mode = "picker",
  minuteStep = 5,
  disabled = false,
  fullWidth = false,
  value,
  defaultValue,
  onChange,
}: TimePickerProps) {
  const controlled = value !== undefined
  const [internalValue, setInternalValue] = useState<TimeValue | null>(defaultValue ?? null)
  const [open, setOpen] = useState(false)
  const [focused, setFocused] = useState(false)
  const [inputText, setInputText] = useState(() => {
    const t = value ?? defaultValue
    return t ? formatTime(t, format) : ""
  })
  const [period, setPeriod] = useState<"AM" | "PM">(() => {
    const t = value ?? defaultValue
    return t && t.hours >= 12 ? "PM" : "AM"
  })
  const wrapperRef = useRef<HTMLDivElement>(null)
  const hoursRef = useRef<HTMLDivElement>(null)
  const minutesRef = useRef<HTMLDivElement>(null)

  const selectedTime = controlled ? value : internalValue
  const hasValue = selectedTime !== null
  const isFloating = shrink !== "none"
  const isInputMode = mode === "input"
  const isShrunk = open || focused || hasValue
  const isHidden = shrink === "shrinkAndHide" && hasValue && !open && !focused

  const resolvedPlaceholder = placeholder ?? (format === "24h" ? "HH:MM" : "HH:MM AM/PM")

  const hours = format === "24h"
    ? Array.from({ length: 24 }, (_, i) => i)
    : Array.from({ length: 12 }, (_, i) => i === 0 ? 12 : i)

  const minutes = Array.from(
    { length: Math.ceil(60 / minuteStep) },
    (_, i) => i * minuteStep
  )

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (open && selectedTime) {
      setTimeout(() => {
        hoursRef.current?.querySelector("[data-selected]")?.scrollIntoView({ block: "center" })
        minutesRef.current?.querySelector("[data-selected]")?.scrollIntoView({ block: "center" })
      }, 0)
    }
  }, [open])

  function getSelected24Hour(displayHour: number): number {
    if (format === "24h") return displayHour
    if (displayHour === 12) return period === "AM" ? 0 : 12
    return period === "AM" ? displayHour : displayHour + 12
  }

  function handleHourSelect(displayHour: number) {
    const h24 = getSelected24Hour(displayHour)
    const newTime: TimeValue = { hours: h24, minutes: selectedTime?.minutes ?? 0 }
    if (!controlled) setInternalValue(newTime)
    setInputText(formatTime(newTime, format))
    onChange?.(newTime)
  }

  function handleMinuteSelect(minute: number) {
    const h = selectedTime?.hours ?? (period === "AM" ? 0 : 12)
    const newTime: TimeValue = { hours: h, minutes: minute }
    if (!controlled) setInternalValue(newTime)
    setInputText(formatTime(newTime, format))
    onChange?.(newTime)
  }

  function handlePeriodChange(newPeriod: "AM" | "PM") {
    if (newPeriod === period) return
    setPeriod(newPeriod)
    if (selectedTime) {
      let h = selectedTime.hours
      if (newPeriod === "AM" && h >= 12) h -= 12
      if (newPeriod === "PM" && h < 12) h += 12
      const newTime: TimeValue = { hours: h, minutes: selectedTime.minutes }
      if (!controlled) setInternalValue(newTime)
      setInputText(formatTime(newTime, format))
      onChange?.(newTime)
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const formatted = formatInputValue(e.target.value, format)
    setInputText(formatted)

    const parsed = parseInputTime(formatted, format)
    if (parsed) {
      if (!controlled) setInternalValue(parsed)
      setPeriod(parsed.hours >= 12 ? "PM" : "AM")
      onChange?.(parsed)
    } else if (formatted === "") {
      if (!controlled) setInternalValue(null)
      onChange?.(null)
    }
  }

  function isHourSelected(displayHour: number): boolean {
    if (!selectedTime) return false
    const h24 = getSelected24Hour(displayHour)
    return selectedTime.hours === h24
  }

  return (
    <Wrapper $fullWidth={fullWidth} ref={wrapperRef}>
      {label && !isFloating && <Label>{label}</Label>}
      <div style={{ position: "relative" }}>
        <InputContainer
          $radius={radius}
          $focused={open || focused}
          $hasError={!!error}
          $disabled={disabled}
          $floating={isFloating}
          onClick={() => {
            if (disabled) return
            if (!isInputMode) setOpen((prev) => !prev)
          }}
          tabIndex={isInputMode ? -1 : (disabled ? -1 : 0)}
        >
          {label && isFloating && (
            <FloatingLabel $shrunk={isShrunk} $hidden={isHidden}>
              {label}
            </FloatingLabel>
          )}
          {isInputMode ? (
            <StyledInput
              value={inputText}
              placeholder={isFloating && !isShrunk ? "" : resolvedPlaceholder}
              disabled={disabled}
              onChange={handleInputChange}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
          ) : (
            hasValue ? (
              <DisplayValue>{formatTime(selectedTime!, format)}</DisplayValue>
            ) : (
              <PlaceholderText>{isFloating && !isShrunk ? "" : resolvedPlaceholder}</PlaceholderText>
            )
          )}
          <ClockIcon onClick={(e) => {
            if (disabled) return
            e.stopPropagation()
            setOpen((prev) => !prev)
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </ClockIcon>
        </InputContainer>

        {open && (
          <Dropdown onClick={(e) => e.stopPropagation()}>
            <Column>
              <ColumnLabel>Hr</ColumnLabel>
              <ScrollList ref={hoursRef}>
                {hours.map((h) => (
                  <TimeOption
                    key={h}
                    type="button"
                    $selected={isHourSelected(h)}
                    data-selected={isHourSelected(h) ? "" : undefined}
                    onClick={() => handleHourSelect(h)}
                  >
                    {format === "24h" ? String(h).padStart(2, "0") : h}
                  </TimeOption>
                ))}
              </ScrollList>
            </Column>
            <Column>
              <ColumnLabel>Min</ColumnLabel>
              <ScrollList ref={minutesRef}>
                {minutes.map((m) => (
                  <TimeOption
                    key={m}
                    type="button"
                    $selected={selectedTime?.minutes === m}
                    data-selected={selectedTime?.minutes === m ? "" : undefined}
                    onClick={() => handleMinuteSelect(m)}
                  >
                    {String(m).padStart(2, "0")}
                  </TimeOption>
                ))}
              </ScrollList>
            </Column>
            {format === "12h" && (
              <PeriodToggle>
                <PeriodButton
                  type="button"
                  $active={period === "AM"}
                  onClick={() => handlePeriodChange("AM")}
                >
                  AM
                </PeriodButton>
                <PeriodButton
                  type="button"
                  $active={period === "PM"}
                  onClick={() => handlePeriodChange("PM")}
                >
                  PM
                </PeriodButton>
              </PeriodToggle>
            )}
          </Dropdown>
        )}
      </div>
      {(error || helperText) && (
        <HelperText $isError={!!error}>{error ?? helperText}</HelperText>
      )}
    </Wrapper>
  )
}

export default TimePicker
