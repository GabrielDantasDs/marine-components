import React, { useState } from "react"
import type { BreadcrumbsProps, BreadcrumbItem } from "./types"
import { Nav, Separator, Link, Current, Ellipsis, IconWrapper } from "./styled"

const DefaultSeparator = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M4.5 2.5L7.5 6L4.5 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function Breadcrumbs({
  items,
  size = "md",
  separator,
  maxItems,
  onNavigate,
}: BreadcrumbsProps) {
  const [expanded, setExpanded] = useState(false)

  const sep = separator ?? <DefaultSeparator />

  const shouldCollapse = maxItems != null && maxItems > 1 && items.length > maxItems && !expanded

  let visibleItems: (BreadcrumbItem | "ellipsis")[]
  if (shouldCollapse) {
    // Show first item, ellipsis, last (maxItems - 1) items
    const tailCount = maxItems - 1
    visibleItems = [
      items[0]!,
      "ellipsis" as const,
      ...items.slice(items.length - tailCount),
    ]
  } else {
    visibleItems = [...items]
  }

  function handleClick(item: BreadcrumbItem, originalIndex: number, e: React.MouseEvent) {
    if (onNavigate) {
      e.preventDefault()
      onNavigate(item, originalIndex)
    }
  }

  function getOriginalIndex(visibleIndex: number): number {
    if (!shouldCollapse) return visibleIndex
    if (visibleIndex === 0) return 0
    if (visibleIndex === 1) return -1 // ellipsis
    const tailCount = maxItems! - 1
    return items.length - tailCount + (visibleIndex - 2)
  }

  return (
    <Nav $size={size} aria-label="Breadcrumb">
      <ol style={{ display: "contents", listStyle: "none", margin: 0, padding: 0 }}>
        {visibleItems.map((item, i) => {
          const isLast = i === visibleItems.length - 1
          const originalIndex = getOriginalIndex(i)

          if (item === "ellipsis") {
            return (
              <React.Fragment key="ellipsis">
                <li style={{ display: "contents" }}>
                  <Ellipsis onClick={() => setExpanded(true)} aria-label="Show more">
                    …
                  </Ellipsis>
                </li>
                <Separator aria-hidden>{sep}</Separator>
              </React.Fragment>
            )
          }

          const icon = item.icon ? <IconWrapper $size={size}>{item.icon}</IconWrapper> : null

          return (
            <React.Fragment key={originalIndex}>
              <li style={{ display: "contents" }}>
                {isLast ? (
                  <Current aria-current="page">
                    {icon}
                    {item.label}
                  </Current>
                ) : (
                  <Link
                    href={item.href ?? "#"}
                    onClick={(e) => handleClick(item, originalIndex, e)}
                  >
                    {icon}
                    {item.label}
                  </Link>
                )}
              </li>
              {!isLast && <Separator aria-hidden>{sep}</Separator>}
            </React.Fragment>
          )
        })}
      </ol>
    </Nav>
  )
}

export default Breadcrumbs
