import styled, { css } from "styled-components"
import type { TimePickerRadius } from "./types"

const radiusMap: Record<TimePickerRadius, string> = {
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
  $radius: TimePickerRadius
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

export const ClockIcon = styled.span`
  display: inline-flex;
  align-items: center;
  color: #8a8a8a;
  font-size: 1rem;
  flex-shrink: 0;
`

export const HelperText = styled.span<{ $isError: boolean }>`
  font-size: 0.75rem;
  color: ${({ $isError }) => $isError ? "#e05252" : "#8a8a8a"};
`

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  z-index: 30;
  background-color: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`

export const ColumnLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  color: #8a8a8a;
  text-transform: uppercase;
  margin-bottom: 4px;
`

export const ScrollList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: 180px;
  overflow-y: auto;
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e0e0e0;
    border-radius: 3px;
  }
`

export const TimeOption = styled.button<{ $selected: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 42px;
  padding: 6px 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-family: "Lexend", sans-serif;
  font-size: 0.85rem;
  font-weight: ${({ $selected }) => $selected ? 600 : 400};
  background-color: ${({ $selected }) => $selected ? "#4a90d9" : "transparent"};
  color: ${({ $selected }) => $selected ? "#ffffff" : "#1a1a1a"};
  transition: all 0.1s ease;

  &:hover {
    background-color: ${({ $selected }) => $selected ? "#3b7bc8" : "#f0f5fc"};
  }
`

export const PeriodToggle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 20px;
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

export const PeriodButton = styled.button<{ $active: boolean }>`
  padding: 6px 12px;
  border-radius: 6px;
  border: 1.5px solid ${({ $active }) => $active ? "#4a90d9" : "#e0e0e0"};
  background-color: ${({ $active }) => $active ? "#4a90d9" : "transparent"};
  color: ${({ $active }) => $active ? "#ffffff" : "#6b6b6b"};
  font-family: "Lexend", sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    border-color: #4a90d9;
  }
`
