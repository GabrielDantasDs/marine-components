---
sidebar_position: 3
---

# Spinner

Loading indicators with three variants: circular, dots, and progress bar. Supports determinate and overlay modes.

## Import

```tsx
import { Spinner } from 'marine-components';
```

## Usage

```tsx
{/* Circular (default) */}
<Spinner label="Loading..." />

{/* Determinate progress */}
<Spinner value={65} label="65%" />

{/* Dots */}
<Spinner variant="dots" label="Loading" />

{/* Progress bar */}
<Spinner variant="bar" />
<Spinner variant="bar" value={45} label="Uploading... 45%" />

{/* Overlay on a container */}
<div style={{ position: 'relative' }}>
  <CardContent />
  <Spinner overlay label="Loading..." />
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"circular" \| "dots" \| "bar"` | `"circular"` | Animation style |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Overall size |
| `color` | `"primary" \| "secondary" \| "success" \| "danger" \| "inherit"` | `"primary"` | Spinner color |
| `value` | `number` | — | 0–100 for determinate mode |
| `label` | `string` | — | Text below spinner |
| `overlay` | `boolean` | `false` | Semi-transparent overlay wrapper |
| `thickness` | `number` | auto | Circular stroke width |

## Variants

- **circular** — SVG ring. Indeterminate = rotating dash. Determinate = progress arc.
- **dots** — Three bouncing dots.
- **bar** — Full-width track. Indeterminate = sliding fill. Determinate = fill percentage.
