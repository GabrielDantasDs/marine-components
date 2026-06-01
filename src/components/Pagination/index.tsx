import React, { useState } from "react"
import type { PaginationProps } from "./types"
import { Nav, PageButton, ArrowButton } from "./styled"

/* ---- Icons ---- */
const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M10 3L5.5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 3L10.5 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const ChevronsLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 3L3.5 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 3L8.5 8L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const ChevronsRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 3L7.5 8L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 3L12.5 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ---- Range builder ---- */
function buildRange(current: number, total: number, siblings: number): (number | "ellipsis")[] {
  // Always show first, last, current, and `siblings` pages around current
  const range = new Set<number>()
  range.add(1)
  range.add(total)

  const lo = Math.max(2, current - siblings)
  const hi = Math.min(total - 1, current + siblings)
  for (let i = lo; i <= hi; i++) range.add(i)

  const sorted = Array.from(range).sort((a, b) => a - b)

  const result: (number | "ellipsis")[] = []
  let prev = 0
  for (const p of sorted) {
    if (p - prev > 1) result.push("ellipsis")
    result.push(p)
    prev = p
  }
  return result
}

function Pagination({
  totalPages,
  page: controlledPage,
  defaultPage = 1,
  size = "md",
  variant = "filled",
  color = "primary",
  siblingCount = 1,
  showFirstLast = false,
  disabled = false,
  onChange,
  prevIcon,
  nextIcon,
  firstIcon,
  lastIcon,
}: PaginationProps) {
  const controlled = controlledPage !== undefined
  const [internalPage, setInternalPage] = useState(defaultPage)
  const current = controlled ? controlledPage : internalPage

  function goTo(p: number) {
    if (p < 1 || p > totalPages || p === current || disabled) return
    if (!controlled) setInternalPage(p)
    onChange?.(p)
  }

  const range = buildRange(current, totalPages, siblingCount)

  return (
    <Nav aria-label="Pagination">
      {showFirstLast && (
        <ArrowButton $size={size} disabled={disabled || current === 1} onClick={() => goTo(1)} aria-label="First page">
          {firstIcon ?? <ChevronsLeft />}
        </ArrowButton>
      )}

      <ArrowButton $size={size} disabled={disabled || current === 1} onClick={() => goTo(current - 1)} aria-label="Previous page">
        {prevIcon ?? <ChevronLeft />}
      </ArrowButton>

      {range.map((item, i) =>
        item === "ellipsis" ? (
          <PageButton
            key={`e${i}`}
            $size={size}
            $variant={variant}
            $color={color}
            $active={false}
            $isEllipsis
            disabled={disabled}
            tabIndex={-1}
          >
            …
          </PageButton>
        ) : (
          <PageButton
            key={item}
            $size={size}
            $variant={variant}
            $color={color}
            $active={item === current}
            $isEllipsis={false}
            disabled={disabled}
            onClick={() => goTo(item)}
            aria-current={item === current ? "page" : undefined}
            aria-label={`Page ${item}`}
          >
            {item}
          </PageButton>
        )
      )}

      <ArrowButton $size={size} disabled={disabled || current === totalPages} onClick={() => goTo(current + 1)} aria-label="Next page">
        {nextIcon ?? <ChevronRight />}
      </ArrowButton>

      {showFirstLast && (
        <ArrowButton $size={size} disabled={disabled || current === totalPages} onClick={() => goTo(totalPages)} aria-label="Last page">
          {lastIcon ?? <ChevronsRight />}
        </ArrowButton>
      )}
    </Nav>
  )
}

export default Pagination
