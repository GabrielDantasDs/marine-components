import type React from "react"

export type AccordionVariant = "default" | "outlined" | "separated"

export type AccordionProps = {
  variant?: AccordionVariant
  multiple?: boolean
  children: React.ReactNode
}

export type AccordionItemProps = {
  title: string
  icon?: React.ReactNode
  defaultOpen?: boolean
  disabled?: boolean
  children: React.ReactNode
}
