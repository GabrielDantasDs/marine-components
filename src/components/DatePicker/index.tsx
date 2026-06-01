import React, { useState, useRef, useEffect } from "react"
import type { DatePickerProps } from "./types"
import {
  Wrapper,
  Label,
  FloatingLabel,
  InputContainer,
  DisplayValue,
  PlaceholderText,
  CalendarIcon,
  StyledInput,
  HelperText,
  Calendar,
  CalendarHeader,
  MonthYear,
  NavButton,
  WeekDays,
  WeekDay,
  DaysGrid,
  DayCell,
} from "./styled"

const WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay()
}

function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
}

function formatDate(date: Date): string {
  const d = String(date.getDate()).padStart(2, "0")
  const m = String(date.getMonth() + 1).padStart(2, "0")
  const y = date.getFullYear()
  return `${m}/${d}/${y}`
}

function formatInputValue(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 8)
  if (digits.length <= 2) return digits
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`
}

function parseInputDate(text: string): Date | null {
  const parts = text.split("/")
  if (parts.length !== 3) return null
  const m = parseInt(parts[0]!, 10)
  const d = parseInt(parts[1]!, 10)
  const y = parseInt(parts[2]!, 10)
  if (!m || !d || !y || m < 1 || m > 12 || d < 1 || d > 31 || y < 1000) return null
  const date = new Date(y, m - 1, d)
  if (date.getMonth() !== m - 1 || date.getDate() !== d) return null
  return date
}

function DatePicker({
  label,
  placeholder = "MM/DD/YYYY",
  helperText,
  error,
  radius = "regular",
  shrink = "none",
  mode = "picker",
  disabled = false,
  fullWidth = false,
  value,
  defaultValue,
  minDate,
  maxDate,
  onChange,
}: DatePickerProps) {
  const controlled = value !== undefined
  const [internalValue, setInternalValue] = useState<Date | null>(defaultValue ?? null)
  const [open, setOpen] = useState(false)
  const [inputText, setInputText] = useState(() => {
    const d = value ?? defaultValue
    return d ? formatDate(d) : ""
  })
  const [viewYear, setViewYear] = useState(() => {
    const d = value ?? defaultValue ?? new Date()
    return d ? d.getFullYear() : new Date().getFullYear()
  })
  const [viewMonth, setViewMonth] = useState(() => {
    const d = value ?? defaultValue ?? new Date()
    return d ? d.getMonth() : new Date().getMonth()
  })
  const [focused, setFocused] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const selectedDate = controlled ? value : internalValue
  const today = new Date()

  const hasValue = selectedDate !== null
  const isFloating = shrink !== "none"
  const isInputMode = mode === "input"
  const isShrunk = open || focused || hasValue
  const isHidden = shrink === "shrinkAndHide" && hasValue && !open && !focused

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  function handleSelect(day: number) {
    const date = new Date(viewYear, viewMonth, day)
    if (!controlled) setInternalValue(date)
    setInputText(formatDate(date))
    onChange?.(date)
    setOpen(false)
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const formatted = formatInputValue(e.target.value)
    setInputText(formatted)

    const parsed = parseInputDate(formatted)
    if (parsed) {
      if (!controlled) setInternalValue(parsed)
      setViewYear(parsed.getFullYear())
      setViewMonth(parsed.getMonth())
      onChange?.(parsed)
    } else if (formatted === "") {
      if (!controlled) setInternalValue(null)
      onChange?.(null)
    }
  }

  function handlePrevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11)
      setViewYear((y) => y - 1)
    } else {
      setViewMonth((m) => m - 1)
    }
  }

  function handleNextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0)
      setViewYear((y) => y + 1)
    } else {
      setViewMonth((m) => m + 1)
    }
  }

  function isDayDisabled(day: number): boolean {
    const date = new Date(viewYear, viewMonth, day)
    if (minDate && date < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())) return true
    if (maxDate && date > new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())) return true
    return false
  }

  const daysInMonth = getDaysInMonth(viewYear, viewMonth)
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth)
  const prevMonthDays = getDaysInMonth(viewYear, viewMonth - 1)

  const leadingDays: number[] = []
  for (let i = firstDay - 1; i >= 0; i--) {
    leadingDays.push(prevMonthDays - i)
  }

  const trailingDays: number[] = []
  const totalCells = leadingDays.length + daysInMonth
  const remaining = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7)
  for (let i = 1; i <= remaining; i++) {
    trailingDays.push(i)
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
              placeholder={isFloating && !isShrunk ? "" : placeholder}
              disabled={disabled}
              onChange={handleInputChange}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
          ) : (
            hasValue ? (
              <DisplayValue>{formatDate(selectedDate!)}</DisplayValue>
            ) : (
              <PlaceholderText>{isFloating && !isShrunk ? "" : placeholder}</PlaceholderText>
            )
          )}
          <CalendarIcon onClick={(e) => {
            if (disabled) return
            e.stopPropagation()
            setOpen((prev) => !prev)
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </CalendarIcon>
        </InputContainer>

        {open && (
          <Calendar>
            <CalendarHeader>
              <NavButton type="button" onClick={handlePrevMonth}>‹</NavButton>
              <MonthYear>{MONTH_NAMES[viewMonth]} {viewYear}</MonthYear>
              <NavButton type="button" onClick={handleNextMonth}>›</NavButton>
            </CalendarHeader>
            <WeekDays>
              {WEEK_DAYS.map((d) => <WeekDay key={d}>{d}</WeekDay>)}
            </WeekDays>
            <DaysGrid>
              {leadingDays.map((day, i) => (
                <DayCell
                  key={`prev-${i}`}
                  type="button"
                  $selected={false}
                  $today={false}
                  $outside={true}
                  $disabled={true}
                >
                  {day}
                </DayCell>
              ))}
              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                const dateObj = new Date(viewYear, viewMonth, day)
                const isSelected = selectedDate ? isSameDay(dateObj, selectedDate) : false
                const isToday = isSameDay(dateObj, today)
                const isDisabled = isDayDisabled(day)

                return (
                  <DayCell
                    key={day}
                    type="button"
                    $selected={isSelected}
                    $today={isToday}
                    $outside={false}
                    $disabled={isDisabled}
                    onClick={(e) => {
                      e.stopPropagation()
                      if (!isDisabled) handleSelect(day)
                    }}
                  >
                    {day}
                  </DayCell>
                )
              })}
              {trailingDays.map((day, i) => (
                <DayCell
                  key={`next-${i}`}
                  type="button"
                  $selected={false}
                  $today={false}
                  $outside={true}
                  $disabled={true}
                >
                  {day}
                </DayCell>
              ))}
            </DaysGrid>
          </Calendar>
        )}
      </div>
      {(error || helperText) && (
        <HelperText $isError={!!error}>{error ?? helperText}</HelperText>
      )}
    </Wrapper>
  )
}

export default DatePicker
