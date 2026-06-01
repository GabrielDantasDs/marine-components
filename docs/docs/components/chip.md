---
sidebar_position: 4
---

# Chip

A compact element for tags, filters, or selections. Supports icons, deletable, and clickable modes.

## Import

```tsx
import { Chip } from 'marine-components';
```

## Usage

```tsx
{/* Basic */}
<Chip label="React" />

{/* With icon */}
<Chip label="User" startIcon={<UserIcon />} />

{/* Deletable tag */}
<Chip label="TypeScript" deletable onDelete={() => remove('ts')} />

{/* Clickable filter */}
<Chip label="Active" clickable variant="outlined" onClick={toggle} />

{/* Tag list */}
{tags.map(tag => (
  <Chip key={tag} label={tag} variant="light" deletable onDelete={() => remove(tag)} />
))}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | *required* | Chip text |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size |
| `color` | `"primary" \| "secondary" \| "success" \| "danger" \| "warning"` | `"primary"` | Color |
| `variant` | `"filled" \| "outlined" \| "light"` | `"filled"` | Visual style |
| `startIcon` | `ReactNode` | — | Icon or avatar before label |
| `deletable` | `boolean` | `false` | Show × delete button |
| `onDelete` | `() => void` | — | Delete callback |
| `clickable` | `boolean` | `false` | Make chip interactive |
| `onClick` | `() => void` | — | Click callback |
| `disabled` | `boolean` | `false` | Disabled state |

:::tip
When both `clickable` and `deletable` are true, clicking the × button triggers `onDelete` without also firing `onClick`.
:::
