---
sidebar_position: 1
---

# Button

A versatile button with 7 colors, 3 variants, icons, and size options.

## Import

```tsx
import { Button } from 'marine-components';
```

## Usage

```tsx
<Button>Default</Button>
<Button color="success" variant="filled">Save</Button>
<Button color="danger" variant="outlined">Delete</Button>
<Button color="secondary" variant="text">Cancel</Button>
<Button radius="rounded" startIcon={<PlusIcon />}>Add Item</Button>
<Button fullWidth size="lg">Full Width</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Button label |
| `color` | `"primary" \| "secondary" \| "warning" \| "danger" \| "success" \| "action" \| "secondaryAction"` | `"primary"` | Color theme |
| `variant` | `"filled" \| "outlined" \| "text"` | `"filled"` | Visual style |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Button size |
| `radius` | `"regular" \| "rounded"` | `"regular"` | Border radius (8px / 20px) |
| `startIcon` | `ReactNode` | — | Icon before label |
| `endIcon` | `ReactNode` | — | Icon after label |
| `fullWidth` | `boolean` | `false` | 100% width |
| `disabled` | `boolean` | `false` | Disabled state |
| `onClick` | `() => void` | — | Click handler |
