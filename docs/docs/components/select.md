---
sidebar_position: 3
---

# Select

A dropdown select with multiple selection (chips), search, dynamic CRUD options, and floating label system.

## Import

```tsx
import { Select } from 'marine-components';
```

## Usage

```tsx
{/* Basic */}
<Select
  label="Country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'br', label: 'Brazil' },
  ]}
/>

{/* Multiple with chips */}
<Select label="Tags" multiple options={options} />

{/* Searchable */}
<Select label="Search..." searchable options={options} />

{/* Dynamic CRUD */}
<Select
  label="Categories"
  options={categories}
  onAddOption={(label) => addCategory(label)}
  onEditOption={(value, label) => editCategory(value, label)}
  onDeleteOption={(value) => deleteCategory(value)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Select label |
| `options` | `{ value: string, label: string }[]` | *required* | Option list |
| `value` | `string \| string[]` | — | Controlled value |
| `defaultValue` | `string \| string[]` | — | Uncontrolled default |
| `multiple` | `boolean` | `false` | Multi-select with chips |
| `searchable` | `boolean` | `false` | Filter options by typing |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size |
| `shrink` | `"none" \| "shrink" \| "shrinkAndHide"` | `"none"` | Label float behavior |
| `disabled` | `boolean` | `false` | Disabled state |
| `onChange` | `(value) => void` | — | Change callback |
| `onAddOption` | `(label: string) => void` | — | Add new option |
| `onEditOption` | `(value: string, label: string) => void` | — | Edit option |
| `onDeleteOption` | `(value: string) => void` | — | Delete option |
