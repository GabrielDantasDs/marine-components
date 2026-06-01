import React, { useState, useRef, useEffect, useCallback } from "react"
import type { SelectProps, SelectOption } from "./types"
import {
  Wrapper,
  Label,
  FloatingLabel,
  SelectContainer,
  ValueArea,
  PlaceholderSizer,
  PlaceholderText,
  SingleValue,
  Chip,
  ChipLabel,
  ChipRemove,
  Arrow,
  IconSlot,
  Dropdown,
  SearchInput,
  OptionsList,
  OptionItem,
  OptionActions,
  OptionActionBtn,
  OptionActionBtnDanger,
  AddOptionRow,
  AddInput,
  AddButton,
  EditInput,
  EmptyText,
  HelperText,
  CheckMark,
} from "./styled"

function Select({
  label,
  placeholder = "Select...",
  helperText,
  error,
  radius = "regular",
  shrink = "none",
  disabled = false,
  fullWidth = false,
  multiple = false,
  searchable = false,
  options,
  value,
  defaultValue,
  startIcon,
  onChange,
  onAddOption,
  onEditOption,
  onDeleteOption,
}: SelectProps) {
  const controlled = value !== undefined
  const [internalValue, setInternalValue] = useState<string[]>(() => {
    const dv = defaultValue
    if (!dv) return []
    return Array.isArray(dv) ? dv : [dv]
  })
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [activeIndex, setActiveIndex] = useState(-1)
  const [addText, setAddText] = useState("")
  const [editingValue, setEditingValue] = useState<string | null>(null)
  const [editText, setEditText] = useState("")
  const wrapperRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  const selected: string[] = controlled
    ? Array.isArray(value) ? value : value ? [value] : []
    : internalValue

  const isSelected = (val: string) => selected.includes(val)

  const filteredOptions = searchable && search
    ? options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase()))
    : options

  const handleSelect = useCallback((optionValue: string) => {
    let next: string[]
    if (multiple) {
      next = isSelected(optionValue)
        ? selected.filter((v) => v !== optionValue)
        : [...selected, optionValue]
    } else {
      next = [optionValue]
      setOpen(false)
      setSearch("")
    }
    if (!controlled) setInternalValue(next)
    onChange?.(multiple ? next : next[0] ?? "")
  }, [selected, multiple, controlled, onChange])

  const handleRemoveChip = useCallback((optionValue: string, e: React.MouseEvent) => {
    e.stopPropagation()
    const next = selected.filter((v) => v !== optionValue)
    if (!controlled) setInternalValue(next)
    onChange?.(multiple ? next : next[0] ?? "")
  }, [selected, multiple, controlled, onChange])

  const handleAdd = useCallback(() => {
    const trimmed = addText.trim()
    if (!trimmed || !onAddOption) return
    onAddOption(trimmed)
    setAddText("")
  }, [addText, onAddOption])

  const handleEditSubmit = useCallback((option: SelectOption) => {
    const trimmed = editText.trim()
    if (!trimmed || !onEditOption) return
    onEditOption(option, trimmed)
    setEditingValue(null)
    setEditText("")
  }, [editText, onEditOption])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(true) }
      return
    }
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((prev) => (prev + 1) % filteredOptions.length)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((prev) => (prev - 1 + filteredOptions.length) % filteredOptions.length)
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault()
      const opt = filteredOptions[activeIndex]
      if (opt) handleSelect(opt.value)
    } else if (e.key === "Escape") {
      setOpen(false)
      setSearch("")
    }
  }, [open, filteredOptions, activeIndex, handleSelect])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
        setSearch("")
        setEditingValue(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (open && searchable && searchRef.current) {
      searchRef.current.focus()
    }
  }, [open, searchable])

  const hasValue = selected.length > 0
  const isFloating = shrink !== "none"
  const isShrunk = open || hasValue
  const isHidden = shrink === "shrinkAndHide" && hasValue && !open

  const selectedLabels = selected
    .map((v) => options.find((o) => o.value === v))
    .filter(Boolean) as SelectOption[]

  return (
    <Wrapper $fullWidth={fullWidth} ref={wrapperRef}>
      {label && !isFloating && <Label>{label}</Label>}
      <div style={{ position: "relative" }}>
        <SelectContainer
          $radius={radius}
          $focused={open}
          $hasError={!!error}
          $disabled={disabled}
          $floating={isFloating}
          onClick={() => { if (!disabled) setOpen((prev) => !prev) }}
          onKeyDown={handleKeyDown}
          tabIndex={disabled ? -1 : 0}
          role="combobox"
          aria-expanded={open}
        >
          {label && isFloating && (
            <FloatingLabel $shrunk={isShrunk} $hidden={isHidden}>
              {label}
            </FloatingLabel>
          )}
          {startIcon && <IconSlot>{startIcon}</IconSlot>}
          <ValueArea>
            {isFloating && !hasValue && !isShrunk && <PlaceholderSizer aria-hidden="true">{placeholder}</PlaceholderSizer>}
            {!hasValue && <PlaceholderText>{isFloating && !isShrunk ? "" : placeholder}</PlaceholderText>}
            {hasValue && !multiple && <SingleValue>{selectedLabels[0]?.label}</SingleValue>}
            {hasValue && multiple && selectedLabels.map((opt) => (
              <Chip key={opt.value}>
                <ChipLabel>{opt.label}</ChipLabel>
                <ChipRemove
                  type="button"
                  onClick={(e) => handleRemoveChip(opt.value, e)}
                  aria-label={`Remove ${opt.label}`}
                >
                  ✕
                </ChipRemove>
              </Chip>
            ))}
          </ValueArea>
          <Arrow $open={open}>▼</Arrow>
        </SelectContainer>

        {open && (
          <Dropdown>
            {searchable && (
              <SearchInput
                ref={searchRef}
                value={search}
                placeholder="Search..."
                onChange={(e) => { setSearch(e.target.value); setActiveIndex(-1) }}
                onClick={(e) => e.stopPropagation()}
              />
            )}
            <OptionsList>
              {filteredOptions.length === 0 && (
                <EmptyText>No options found</EmptyText>
              )}
              {filteredOptions.map((option, i) => (
                <OptionItem
                  key={option.value}
                  $active={i === activeIndex}
                  $selected={isSelected(option.value)}
                  onMouseDown={(e) => {
                    e.preventDefault()
                  }}
                  onClick={(e) => {
                    if ((e.target as HTMLElement).closest("button")) return
                    if (editingValue !== option.value) handleSelect(option.value)
                  }}
                >
                  {editingValue === option.value ? (
                    <EditInput
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onKeyDown={(e) => {
                        e.stopPropagation()
                        if (e.key === "Enter") handleEditSubmit(option)
                        if (e.key === "Escape") { setEditingValue(null); setEditText("") }
                      }}
                      onClick={(e) => e.stopPropagation()}
                      autoFocus
                    />
                  ) : (
                    <>
                      <span>{option.label}</span>
                      <OptionActions>
                        {isSelected(option.value) && <CheckMark>✓</CheckMark>}
                        {onEditOption && (
                          <OptionActionBtn
                            type="button"
                            onClick={() => {
                              setEditingValue(option.value)
                              setEditText(option.label)
                            }}
                            aria-label={`Edit ${option.label}`}
                          >
                            ✎
                          </OptionActionBtn>
                        )}
                        {onDeleteOption && (
                          <OptionActionBtnDanger
                            type="button"
                            onClick={() => onDeleteOption(option)}
                            aria-label={`Delete ${option.label}`}
                          >
                            ✕
                          </OptionActionBtnDanger>
                        )}
                      </OptionActions>
                    </>
                  )}
                </OptionItem>
              ))}
            </OptionsList>
            {onAddOption && (
              <AddOptionRow onClick={(e) => e.stopPropagation()}>
                <AddInput
                  value={addText}
                  placeholder="Add new option..."
                  onChange={(e) => setAddText(e.target.value)}
                  onKeyDown={(e) => { e.stopPropagation(); if (e.key === "Enter") handleAdd() }}
                />
                <AddButton type="button" disabled={!addText.trim()} onClick={handleAdd}>
                  Add
                </AddButton>
              </AddOptionRow>
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

export default Select
