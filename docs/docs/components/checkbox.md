---
sidebar_position: 4
---

# Checkbox

A checkbox with indeterminate state support, sizes, colors, and pop animation.

## Import

```tsx
import { Checkbox } from 'marine-components';
```

## Usage

```tsx
<Checkbox label="Accept terms" />
<Checkbox label="Enabled" defaultChecked />
<Checkbox label="Delete" color="danger" />

{/* Indeterminate (parent-children pattern) */}
<Checkbox
  label="Select all"
  checked={allChecked}
  indeterminate={someChecked}
  onChange={(next) => setAll(next)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Checkbox label |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size |
| `color` | `"primary" \| "success" \| "danger"` | `"primary"` | Check color |
| `checked` | `boolean` | — | Controlled state |
| `defaultChecked` | `boolean` | `false` | Uncontrolled default |
| `indeterminate` | `boolean` | `false` | Shows "−" dash (visual only) |
| `disabled` | `boolean` | `false` | Disabled state |
| `onChange` | `(checked: boolean) => void` | — | Change callback |

## Indeterminate

The `indeterminate` prop is visual-only for "select all" patterns:

- All children checked → parent **checked** ✓
- No children checked → parent **unchecked**
- Some children checked → parent **indeterminate** −
