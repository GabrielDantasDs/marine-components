export type PaginationSize = "sm" | "md" | "lg"
export type PaginationVariant = "filled" | "outlined" | "text"
export type PaginationColor = "primary" | "secondary" | "success" | "danger"

export type PaginationProps = {
  /** Total number of pages */
  totalPages: number
  /** Current active page (1-based) */
  page?: number
  defaultPage?: number
  size?: PaginationSize
  variant?: PaginationVariant
  color?: PaginationColor
  /** Max page buttons visible before ellipsis (min 5) */
  siblingCount?: number
  /** Show first/last arrow buttons */
  showFirstLast?: boolean
  disabled?: boolean
  onChange?: (page: number) => void
  /** Custom previous icon */
  prevIcon?: React.ReactNode
  /** Custom next icon */
  nextIcon?: React.ReactNode
  /** Custom first page icon */
  firstIcon?: React.ReactNode
  /** Custom last page icon */
  lastIcon?: React.ReactNode
}
