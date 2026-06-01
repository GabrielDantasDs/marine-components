import styled, { css } from "styled-components"
import type { InputRadius } from "./types"

const radiusMap: Record<InputRadius, string> = {
  regular: "8px",
  rounded: "20px",
}

export const Wrapper = styled.div<{ $fullWidth: boolean }>`
  font-family: "Lexend", sans-serif;
  display: inline-flex;
  flex-direction: column;
  gap: 6px;
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
  $radius: InputRadius
  $focused: boolean
  $hasError: boolean
  $disabled: boolean
}>`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #ffffff;
  border: 1.5px solid ${({ $hasError, $focused }) =>
    $hasError ? "#e05252" : $focused ? "#4a90d9" : "#e0e0e0"};
  border-radius: ${({ $radius }) => radiusMap[$radius]};
  padding: 10px 14px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
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
  `}
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

  &::placeholder { color: #b0b0b0; }
  &:disabled { cursor: not-allowed; }
`

export const StyledTextarea = styled.textarea`
  font-family: "Lexend", sans-serif;
  font-size: 0.9rem;
  color: #1a1a1a;
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  padding: 0;
  resize: vertical;

  &::placeholder { color: #b0b0b0; }
  &:disabled { cursor: not-allowed; }
`

export const IconSlot = styled.span`
  display: inline-flex;
  align-items: center;
  color: #8a8a8a;
  font-size: 1.1em;
  flex-shrink: 0;
`

export const Prefix = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 0.85rem;
  color: #4a4a4a;
  white-space: nowrap;
  flex-shrink: 0;
`

export const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: #8a8a8a;
  padding: 0;
  font-size: 1rem;
  flex-shrink: 0;

  &:hover { color: #4a4a4a; }
`

export const HelperText = styled.span<{ $isError: boolean }>`
  font-size: 0.75rem;
  color: ${({ $isError }) => $isError ? "#e05252" : "#8a8a8a"};
`

export const AutocompleteDropdown = styled.ul`
  font-family: "Lexend", sans-serif;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 4px 0 0;
  padding: 4px 0;
  list-style: none;
  background-color: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
`

export const AutocompleteItem = styled.li<{ $active: boolean }>`
  padding: 10px 14px;
  font-size: 0.9rem;
  color: #1a1a1a;
  cursor: pointer;
  background-color: ${({ $active }) => $active ? "#f5f7fa" : "transparent"};

  &:hover { background-color: #f5f7fa; }
`

export const AutocompleteWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const FloatingInputContainer = styled.div<{
  $radius: InputRadius
  $focused: boolean
  $hasError: boolean
  $disabled: boolean
}>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #ffffff;
  border: 1.5px solid ${({ $hasError, $focused }) =>
    $hasError ? "#e05252" : $focused ? "#4a90d9" : "#e0e0e0"};
  border-radius: ${({ $radius }) => radiusMap[$radius]};
  padding: 14px 14px 10px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
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
  `}
`
