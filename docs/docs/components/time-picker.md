---
sidebar_position: 8
---

# TimePicker

A time picker with scrollable columns, 12h/24h format, and input typing mode.

## Import

```tsx
import { TimePicker } from 'marine-components';
```

## Usage

```tsx
{/* Picker mode (scrollable hour/minute columns) */}
<TimePicker label="Start time" />

{/* 12-hour with AM/PM */}
<TimePicker label="Meeting" format="12h" />

{/* Input mode (type with auto-formatter) */}
<TimePicker label="Alarm" mode="input" />

{/* Custom minute step */}
<TimePicker label="Slot" minuteStep={15} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Input label |
| `value` | `object` | — | Controlled `{ hour, minute }` |
| `defaultValue` | `object` | — | Uncontrolled default |
| `mode` | `"picker" \| "input"` | `"picker"` | Interaction mode |
| `format` | `"12h" \| "24h"` | `"24h"` | Time format |
| `minuteStep` | `number` | `1` | Minute interval |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size |
| `shrink` | `"none" \| "shrink" \| "shrinkAndHide"` | `"none"` | Label behavior |
| `disabled` | `boolean` | `false` | Disabled state |
| `onChange` | `(time) => void` | — | Change callback |
