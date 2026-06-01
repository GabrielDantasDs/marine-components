---
sidebar_position: 7
---

# DatePicker

A date picker with calendar dropdown, input typing mode, min/max constraints, and today highlight.

## Import

```tsx
import { DatePicker } from 'marine-components';
```

## Usage

```tsx
{/* Picker mode (click to open calendar) */}
<DatePicker label="Start date" />

{/* Input mode (type MM/DD/YYYY with auto-formatter) */}
<DatePicker label="Birthday" mode="input" />

{/* With constraints */}
<DatePicker
  label="Event date"
  minDate={new Date('2026-01-01')}
  maxDate={new Date('2026-12-31')}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Input label |
| `value` | `Date` | — | Controlled value |
| `defaultValue` | `Date` | — | Uncontrolled default |
| `mode` | `"picker" \| "input"` | `"picker"` | Interaction mode |
| `minDate` | `Date` | — | Earliest selectable date |
| `maxDate` | `Date` | — | Latest selectable date |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size |
| `shrink` | `"none" \| "shrink" \| "shrinkAndHide"` | `"none"` | Label behavior |
| `disabled` | `boolean` | `false` | Disabled state |
| `onChange` | `(date: Date) => void` | — | Change callback |

## Modes

- **picker** — Click the input to open a calendar dropdown. Navigate months/years, click a day.
- **input** — Type the date directly with auto-formatting (MM/DD/YYYY). Click the calendar icon to open picker as an assist.
