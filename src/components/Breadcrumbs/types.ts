export type BreadcrumbsSize = "sm" | "md" | "lg"

export type BreadcrumbItem = {
  label: string
  href?: string
  icon?: React.ReactNode
}

export type BreadcrumbsProps = {
  items: BreadcrumbItem[]
  size?: BreadcrumbsSize
  /** Custom separator (string or ReactNode) */
  separator?: React.ReactNode
  /** Max items before collapsing middle items into "..." */
  maxItems?: number
  /** Called when a breadcrumb is clicked */
  onNavigate?: (item: BreadcrumbItem, index: number) => void
}
