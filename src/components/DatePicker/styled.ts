import styled, { css } from "styled-components"
import type { DatePickerRadius } from "./types"

const radiusMap: Record<DatePickerRadius, string> = {
  regular: "8px",
  rounded: "20px",
}

export const Wrapper = styled.div<{ $fullWidth: boolean }>`
  font-family: "Lexend", sans-serif;
  display: inline-flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  ${({ $fullWidth }) => $fullWidth && css`width: 100%;`}
`

export const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 500;
  color: #1a1a1a;
`

export const FloatingLabel = styled.label<{
  $shrunk: boolean
  $hidden: boolean
}>`
  position: absolute;
  left: 14px;
  font-family: "Lexend", sans-serif;
  font-weight: 500;
  color: #8a8a8a;
  pointer-events: none;
  transition: all 0.15s ease;
  z-index: 1;

  ${({ $shrunk, $hidden }) =>
    $shrunk
      ? css`
          top: -8px;
          font-size: 0.7rem;
          color: #4a90d9;
          background-color: #ffffff;
          padding: 0 4px;
          opacity: ${$hidden ? 0 : 1};
        `
      : css`
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.9rem;
        `
  }
`

export const InputContainer = styled.div<{
  $radius: DatePickerRadius
  $focused: boolean
  $hasError: boolean
  $disabled: boolean
  $floating: boolean
}>`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #ffffff;
  border: 1.5px solid ${({ $hasError, $focused }) =>
    $hasError ? "#e05252" : $focused ? "#4a90d9" : "#e0e0e0"};
  border-radius: ${({ $radius }) => radiusMap[$radius]};
  padding: ${({ $floating }) => $floating ? "14px 14px 10px" : "10px 14px"};
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  cursor: pointer;
  position: relative;
  box-shadow: ${({ $focused, $hasError }) =>
    $focused
      ? $hasError
        ? "0 0 0 3px rgba(224, 82, 82, 0.1)"
        : "0 0 0 3px rgba(74, 144, 217, 0.1)"
      : "none"};

  ${({ $disabled }) => $disabled && css`
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  `}
`

export const DisplayValue = styled.span`
  font-size: 0.9rem;
  color: #1a1a1a;
  flex: 1;
`

export const PlaceholderText = styled.span`
  font-size: 0.9rem;
  color: #b0b0b0;
  flex: 1;
`

export const CalendarIcon = styled.span`
  display: inline-flex;
  align-items: center;
  color: #8a8a8a;
  font-size: 1rem;
  flex-shrink: 0;
  cursor: pointer;
`

export const StyledInput = styled.input`
  font-family: "Lexend", sans-serif;
  font-size: 0.9rem;
  color: #1a1a1a;
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  padding: 0;
  flex: 1;

  &::placeholder { color: #b0b0b0; }
  &:disabled { cursor: not-allowed; }
`

export const HelperText = styled.span<{ $isError: boolean }>`
  font-size: 0.75rem;
  color: ${({ $isError }) => $isError ? "#e05252" : "#8a8a8a"};
`

export const Calendar = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  z-index: 30;
  background-color: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 16px;
  min-width: 280px;
`

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const MonthYear = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a1a;
`

export const NavButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: #6b6b6b;
  font-size: 1rem;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background-color 0.1s ease;

  &:hover { background-color: #f5f5f5; }
`

export const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 4px;
`

export const WeekDay = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  color: #8a8a8a;
  text-align: center;
  padding: 4px 0;
  text-transform: uppercase;
`

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`

export const DayCell = styled.button<{
  $selected: boolean
  $today: boolean
  $outside: boolean
  $disabled: boolean
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-family: "Lexend", sans-serif;
  font-size: 0.8rem;
  font-weight: ${({ $selected }) => $selected ? 600 : 400};
  transition: all 0.1s ease;

  background-color: ${({ $selected }) => $selected ? "#4a90d9" : "transparent"};
  color: ${({ $selected, $outside, $disabled }) =>
    $selected ? "#ffffff" : $disabled ? "#d0d0d0" : $outside ? "#c0c0c0" : "#1a1a1a"};

  ${({ $today, $selected }) => $today && !$selected && css`
    border: 1.5px solid #4a90d9;
    color: #4a90d9;
    font-weight: 600;
  `}

  ${({ $disabled }) => $disabled && css`
    cursor: not-allowed;
    pointer-events: none;
  `}

  &:hover:not(:disabled) {
    background-color: ${({ $selected }) => $selected ? "#3b7bc8" : "#f0f5fc"};
  }
`
