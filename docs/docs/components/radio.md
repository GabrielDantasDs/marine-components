---
sidebar_position: 5
---

# Radio

A radio group with compound component pattern and context-based state management.

## Import

```tsx
import { Radio } from 'marine-components';
```

## Usage

```tsx
{/* Uncontrolled */}
<Radio name="plan" defaultValue="free">
  <Radio.Item value="free" label="Free" />
  <Radio.Item value="pro" label="Pro" />
  <Radio.Item value="enterprise" label="Enterprise" disabled />
</Radio>

{/* Controlled */}
<Radio name="size" value={size} onChange={setSize}>
  <Radio.Item value="sm" label="Small" />
  <Radio.Item value="md" label="Medium" />
  <Radio.Item value="lg" label="Large" />
</Radio>
```

## Radio (Group) Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | *required* | Input group name |
| `children` | `ReactNode` | — | Radio.Item elements |
| `value` | `string` | — | Controlled selected value |
| `defaultValue` | `string` | — | Uncontrolled default |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size for all items |
| `color` | `"primary" \| "success" \| "danger"` | `"primary"` | Selected color |
| `disabled` | `boolean` | `false` | Disable all items |
| `onChange` | `(value: string) => void` | — | Change callback |

## Radio.Item Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | *required* | Item value |
| `label` | `string` | — | Item label |
| `disabled` | `boolean` | `false` | Disable this item |
