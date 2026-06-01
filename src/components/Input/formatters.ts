import type { InputFormat, InputCountry } from "./types"

const countryFlags: Record<InputCountry, string> = {
  US: "\u{1F1FA}\u{1F1F8}",
  BR: "\u{1F1E7}\u{1F1F7}",
  UK: "\u{1F1EC}\u{1F1E7}",
  DE: "\u{1F1E9}\u{1F1EA}",
  FR: "\u{1F1EB}\u{1F1F7}",
  JP: "\u{1F1EF}\u{1F1F5}",
  CA: "\u{1F1E8}\u{1F1E6}",
  AU: "\u{1F1E6}\u{1F1FA}",
  PT: "\u{1F1F5}\u{1F1F9}",
  ES: "\u{1F1EA}\u{1F1F8}",
  MX: "\u{1F1F2}\u{1F1FD}",
  AR: "\u{1F1E6}\u{1F1F7}",
}

const phoneConfigs: Record<InputCountry, { code: string; format: (digits: string) => string }> = {
  US: { code: "+1", format: (d) => d.replace(/(\d{3})(\d{3})(\d{0,4})/, "($1) $2-$3").trim() },
  BR: { code: "+55", format: (d) => d.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").trim() },
  UK: { code: "+44", format: (d) => d.replace(/(\d{4})(\d{0,6})/, "$1 $2").trim() },
  DE: { code: "+49", format: (d) => d.replace(/(\d{3})(\d{0,8})/, "$1 $2").trim() },
  FR: { code: "+33", format: (d) => d.replace(/(\d{1})(\d{2})(\d{2})(\d{2})(\d{0,2})/, "$1 $2 $3 $4 $5").trim() },
  JP: { code: "+81", format: (d) => d.replace(/(\d{2})(\d{4})(\d{0,4})/, "$1-$2-$3").trim() },
  CA: { code: "+1", format: (d) => d.replace(/(\d{3})(\d{3})(\d{0,4})/, "($1) $2-$3").trim() },
  AU: { code: "+61", format: (d) => d.replace(/(\d{4})(\d{3})(\d{0,3})/, "$1 $2 $3").trim() },
  PT: { code: "+351", format: (d) => d.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1 $2 $3").trim() },
  ES: { code: "+34", format: (d) => d.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1 $2 $3").trim() },
  MX: { code: "+52", format: (d) => d.replace(/(\d{2})(\d{4})(\d{0,4})/, "$1 $2 $3").trim() },
  AR: { code: "+54", format: (d) => d.replace(/(\d{2})(\d{4})(\d{0,4})/, "$1 $2-$3").trim() },
}

const moneyConfigs: Record<InputCountry, { symbol: string; thousandSep: string; decimalSep: string }> = {
  US: { symbol: "$", thousandSep: ",", decimalSep: "." },
  BR: { symbol: "R$", thousandSep: ".", decimalSep: "," },
  UK: { symbol: "£", thousandSep: ",", decimalSep: "." },
  DE: { symbol: "€", thousandSep: ".", decimalSep: "," },
  FR: { symbol: "€", thousandSep: " ", decimalSep: "," },
  JP: { symbol: "¥", thousandSep: ",", decimalSep: "." },
  CA: { symbol: "CA$", thousandSep: ",", decimalSep: "." },
  AU: { symbol: "A$", thousandSep: ",", decimalSep: "." },
  PT: { symbol: "€", thousandSep: ".", decimalSep: "," },
  ES: { symbol: "€", thousandSep: ".", decimalSep: "," },
  MX: { symbol: "MX$", thousandSep: ",", decimalSep: "." },
  AR: { symbol: "AR$", thousandSep: ".", decimalSep: "," },
}

const zipcodeConfigs: Record<InputCountry, { format: (d: string) => string; maxLen: number }> = {
  US: { format: (d) => d.length > 5 ? `${d.slice(0, 5)}-${d.slice(5, 9)}` : d, maxLen: 9 },
  BR: { format: (d) => d.length > 5 ? `${d.slice(0, 5)}-${d.slice(5, 8)}` : d, maxLen: 8 },
  UK: { format: (d) => d.toUpperCase(), maxLen: 7 },
  DE: { format: (d) => d, maxLen: 5 },
  FR: { format: (d) => d, maxLen: 5 },
  JP: { format: (d) => d.length > 3 ? `${d.slice(0, 3)}-${d.slice(3, 7)}` : d, maxLen: 7 },
  CA: { format: (d) => d.toUpperCase(), maxLen: 6 },
  AU: { format: (d) => d, maxLen: 4 },
  PT: { format: (d) => d.length > 4 ? `${d.slice(0, 4)}-${d.slice(4, 7)}` : d, maxLen: 7 },
  ES: { format: (d) => d, maxLen: 5 },
  MX: { format: (d) => d, maxLen: 5 },
  AR: { format: (d) => d.toUpperCase(), maxLen: 8 },
}

function onlyDigits(value: string): string {
  return value.replace(/\D/g, "")
}

function formatMoney(value: string, country: InputCountry): string {
  const config = moneyConfigs[country]
  const digits = onlyDigits(value)
  if (!digits) return ""

  const cents = digits.padStart(3, "0")
  const intPart = cents.slice(0, -2).replace(/^0+(?=\d)/, "")
  const decPart = cents.slice(-2)

  const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, config.thousandSep)
  return `${config.symbol} ${formatted}${config.decimalSep}${decPart}`
}

function formatPhone(value: string, country: InputCountry): string {
  const config = phoneConfigs[country]
  const digits = onlyDigits(value)
  if (!digits) return ""
  return config.format(digits)
}

function formatCpf(value: string): string {
  const d = onlyDigits(value).slice(0, 11)
  return d
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
}

function formatCnpj(value: string): string {
  const d = onlyDigits(value).slice(0, 14)
  return d
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d{1,2})$/, "$1-$2")
}

function formatCreditCard(value: string): string {
  const d = onlyDigits(value).slice(0, 16)
  return d.replace(/(\d{4})(?=\d)/g, "$1 ").trim()
}

function formatDate(value: string): string {
  const d = onlyDigits(value).slice(0, 8)
  return d
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
}

function formatSsn(value: string): string {
  const d = onlyDigits(value).slice(0, 9)
  return d
    .replace(/(\d{3})(\d)/, "$1-$2")
    .replace(/(\d{2})(\d)/, "$1-$2")
}

function formatAge(value: string): string {
  return onlyDigits(value).slice(0, 3)
}

function formatZipcode(value: string, country: InputCountry): string {
  const config = zipcodeConfigs[country]
  const isAlphaAllowed = country === "UK" || country === "CA" || country === "AR"
  const cleaned = isAlphaAllowed ? value.replace(/[^a-zA-Z0-9]/g, "").slice(0, config.maxLen) : onlyDigits(value).slice(0, config.maxLen)
  return config.format(cleaned)
}

export function applyFormat(value: string, format: InputFormat, country: InputCountry): string {
  switch (format) {
    case "phone": return formatPhone(value, country)
    case "money": return formatMoney(value, country)
    case "cpf": return formatCpf(value)
    case "cnpj": return formatCnpj(value)
    case "creditCard": return formatCreditCard(value)
    case "date": return formatDate(value)
    case "ssn": return formatSsn(value)
    case "age": return formatAge(value)
    case "zipcode": return formatZipcode(value, country)
    case "text":
    case "password":
    case "email":
    default:
      return value
  }
}

export function getPhonePrefix(country: InputCountry): string {
  return `${countryFlags[country]} ${phoneConfigs[country].code}`
}

export function getMoneySymbol(country: InputCountry): string {
  return moneyConfigs[country].symbol
}

export function getFlag(country: InputCountry): string {
  return countryFlags[country]
}

export function getPlaceholder(format: InputFormat, country: InputCountry): string {
  switch (format) {
    case "phone": return "Phone number"
    case "money": return `${moneyConfigs[country].symbol} 0${moneyConfigs[country].decimalSep}00`
    case "cpf": return "000.000.000-00"
    case "cnpj": return "00.000.000/0000-00"
    case "creditCard": return "0000 0000 0000 0000"
    case "date": return "DD/MM/YYYY"
    case "ssn": return "000-00-0000"
    case "age": return "Age"
    case "zipcode": return "Zip code"
    case "password": return "Password"
    case "email": return "email@example.com"
    default: return ""
  }
}
