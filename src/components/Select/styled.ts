import styled, { css } from "styled-components"
import type { SelectRadius } from "./types"

const radiusMap: Record<SelectRadius, string> = {
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

export const SelectContainer = styled.div<{
  $radius: SelectRadius
  $focused: boolean
  $hasError: boolean
  $disabled: boolean
  $floating: boolean
}>`
  position: relative;
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
  min-height: 42px;
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

export const ValueArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  flex: 1;
  min-width: 0;
  position: relative;
`

export const PlaceholderSizer = styled.span`
  display: block;
  visibility: hidden;
  font-size: 0.9rem;
  white-space: nowrap;
  pointer-events: none;
  height: 0;
`

export const PlaceholderText = styled.span`
  font-size: 0.9rem;
  color: #b0b0b0;
`

export const SingleValue = styled.span`
  font-size: 0.9rem;
  color: #1a1a1a;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background-color: #eef3fa;
  color: #2a6cb6;
  font-size: 0.78rem;
  font-weight: 500;
  padding: 3px 8px;
  border-radius: 12px;
  max-width: 160px;
`

export const ChipLabel = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const ChipRemove = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: #2a6cb6;
  padding: 0;
  font-size: 0.85rem;
  line-height: 1;
  flex-shrink: 0;

  &:hover { color: #e05252; }
`

export const Arrow = styled.span<{ $open: boolean }>`
  display: inline-flex;
  align-items: center;
  color: #8a8a8a;
  font-size: 0.7rem;
  flex-shrink: 0;
  transition: transform 0.15s ease;
  transform: rotate(${({ $open }) => $open ? "180deg" : "0deg"});
`

export const IconSlot = styled.span`
  display: inline-flex;
  align-items: center;
  color: #8a8a8a;
  font-size: 1.1em;
  flex-shrink: 0;
`

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  z-index: 20;
  overflow: hidden;
`

export const SearchInput = styled.input`
  font-family: "Lexend", sans-serif;
  font-size: 0.85rem;
  color: #1a1a1a;
  border: none;
  border-bottom: 1px solid #f0f0f0;
  outline: none;
  padding: 10px 14px;
  width: 100%;
  background: transparent;

  &::placeholder { color: #b0b0b0; }
`

export const OptionsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 4px 0;
  max-height: 200px;
  overflow-y: auto;
`

export const OptionItem = styled.li<{ $active: boolean; $selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  font-size: 0.9rem;
  color: #1a1a1a;
  cursor: pointer;
  background-color: ${({ $active }) => $active ? "#f5f7fa" : "transparent"};
  font-weight: ${({ $selected }) => $selected ? 500 : 400};

  &:hover { background-color: #f5f7fa; }
`

export const OptionActions = styled.span`
  display: flex;
  gap: 6px;
  align-items: center;
`

export const OptionActionBtn = styled.button`
  display: inline-flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: #8a8a8a;
  padding: 2px;
  font-size: 0.8rem;

  &:hover { color: #4a90d9; }
`

export const OptionActionBtnDanger = styled(OptionActionBtn)`
  &:hover { color: #e05252; }
`

export const AddOptionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-top: 1px solid #f0f0f0;
`

export const AddInput = styled.input`
  font-family: "Lexend", sans-serif;
  font-size: 0.85rem;
  color: #1a1a1a;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  outline: none;
  padding: 6px 10px;
  flex: 1;

  &:focus { border-color: #4a90d9; }
  &::placeholder { color: #b0b0b0; }
`

export const AddButton = styled.button`
  font-family: "Lexend", sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: #ffffff;
  background-color: #4a90d9;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  flex-shrink: 0;

  &:hover { background-color: #3b7bc8; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`

export const EditInput = styled.input`
  font-family: "Lexend", sans-serif;
  font-size: 0.85rem;
  color: #1a1a1a;
  border: 1px solid #4a90d9;
  border-radius: 4px;
  outline: none;
  padding: 2px 6px;
  flex: 1;
`

export const EmptyText = styled.li`
  padding: 10px 14px;
  font-size: 0.85rem;
  color: #8a8a8a;
  text-align: center;
`

export const HelperText = styled.span<{ $isError: boolean }>`
  font-size: 0.75rem;
  color: ${({ $isError }) => $isError ? "#e05252" : "#8a8a8a"};
`

export const CheckMark = styled.span`
  color: #4a90d9;
  font-size: 0.85rem;
`
