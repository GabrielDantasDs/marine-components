import type React from "react"

export type InputFormat =
  | "text"
  | "password"
  | "phone"
  | "zipcode"
  | "age"
  | "money"
  | "cpf"
  | "cnpj"
  | "creditCard"
  | "date"
  | "ssn"
  | "email"

export type InputCountry = "US" | "BR" | "UK" | "DE" | "FR" | "JP" | "CA" | "AU" | "PT" | "ES" | "MX" | "AR"

export type InputRadius = "regular" | "rounded"
export type InputShrink = "none" | "shrink" | "shrinkAndHide"

export type AutocompleteOption = {
  label: string
  value: string
}

export type InputProps = {
  label?: string
  placeholder?: string
  helperText?: string
  error?: string
  format?: InputFormat
  country?: InputCountry
  radius?: InputRadius
  shrink?: InputShrink
  disabled?: boolean
  fullWidth?: boolean
  textarea?: boolean
  rows?: number
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  value?: string
  defaultValue?: string
  autocomplete?: boolean
  fetchOptions?: (query: string) => Promise<AutocompleteOption[]>
  onOptionSelect?: (option: AutocompleteOption) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
