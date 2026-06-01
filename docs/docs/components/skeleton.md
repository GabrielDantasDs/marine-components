---
sidebar_position: 4
---

# Skeleton

Placeholder loading shapes with pulse or wave animation. Compose them to build loading states for any layout.

## Import

```tsx
import { Skeleton } from 'marine-components';
```

## Usage

```tsx
{/* Single text line */}
<Skeleton variant="text" width={200} />

{/* Multi-line paragraph */}
<Skeleton variant="text" lines={4} width={300} />

{/* Avatar placeholder */}
<Skeleton variant="circular" width={48} height={48} />

{/* Image placeholder */}
<Skeleton variant="rounded" width={300} height={160} />

{/* Wave animation */}
<Skeleton variant="rounded" height={100} animation="wave" />

{/* Card loading state */}
<div style={{ display: 'flex', gap: 12 }}>
  <Skeleton variant="circular" width={40} height={40} />
  <div>
    <Skeleton variant="text" width="60%" />
    <Skeleton variant="text" lines={2} />
  </div>
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"text" \| "circular" \| "rectangular" \| "rounded"` | `"text"` | Shape |
| `animation` | `"pulse" \| "wave" \| "none"` | `"pulse"` | Animation style |
| `width` | `number \| string` | auto | Width |
| `height` | `number \| string` | auto | Height |
| `borderRadius` | `number` | auto | Override border radius |
| `lines` | `number` | — | Multi-line text skeleton |
| `lineGap` | `number` | `8` | Gap between lines (px) |
| `lastLineWidth` | `string` | `"60%"` | Shorter last line |

## Variants

| Variant | Default Size | Radius | Use Case |
|---------|-------------|--------|----------|
| text | 100% × 14px | 4px | Text lines |
| circular | 40px × 40px | 50% | Avatars, icons |
| rectangular | 100% × 120px | 0 | Images, blocks |
| rounded | 100% × 120px | 8px | Cards, thumbnails |
