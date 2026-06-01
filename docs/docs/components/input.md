---
sidebar_position: 2
---

# Input

A text input with formatters, autocomplete, textarea mode, icons, and floating label system.

## Import

```tsx
import { Input } from 'marine-components';
```

## Usage

```tsx
{/* Basic */}
<Input label="Name" placeholder="Enter name" />

{/* With formatter */}
<Input label="Phone" format="phone" country="US" />

{/* Password with toggle */}
<Input label="Password" type="password" />

{/* Textarea */}
<Input label="Bio" textarea rows={4} />

{/* Autocomplete */}
<Input label="City" autocomplete={fetchCities} />

{/* Floating label */}
<Input label="Email" shrink="shrink" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Input label |
| `placeholder` | `string` | — | Placeholder text |
| `value` | `string` | — | Controlled value |
| `defaultValue` | `string` | — | Uncontrolled default |
| `type` | `string` | `"text"` | Input type (password shows toggle) |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Input size |
| `shrink` | `"none" \| "shrink" \| "shrinkAndHide"` | `"none"` | Label float behavior |
| `format` | `string` | — | Auto-formatter (phone, cpf, cnpj, currency, etc.) |
| `country` | `string` | — | Country for formatter |
| `textarea` | `boolean` | `false` | Render as textarea |
| `rows` | `number` | `3` | Textarea rows |
| `startIcon` | `ReactNode` | — | Icon before input |
| `endIcon` | `ReactNode` | — | Icon after input |
| `autocomplete` | `(query: string) => Promise<string[]>` | — | Autocomplete fetcher |
| `disabled` | `boolean` | `false` | Disabled state |
| `onChange` | `(value: string) => void` | — | Change callback |

## Shrink Modes

- **none** — Label stays above the input
- **shrink** — Label floats up when focused/has value
- **shrinkAndHide** — Label floats up when focused, hides when has value

## Formatters

Supports 12 format types across 12 countries: phone, CPF, CNPJ, currency, zip code, SSN, and more.
