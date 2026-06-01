---
sidebar_position: 2
---

# Avatar

A user avatar with image, initials fallback, status indicator, and group stacking.

## Import

```tsx
import { Avatar } from 'marine-components';
```

## Usage

```tsx
{/* With image */}
<Avatar src="/photo.jpg" alt="John" />

{/* Initials fallback */}
<Avatar name="Gabriel Dantas" color="primary" />

{/* With status */}
<Avatar src="/photo.jpg" status="online" />

{/* Stacked group */}
<Avatar.Group max={3}>
  <Avatar name="Alice" />
  <Avatar name="Bob" />
  <Avatar name="Carol" />
  <Avatar name="Dan" />
  <Avatar name="Eve" />
</Avatar.Group>
```

## Avatar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | — | Image URL |
| `alt` | `string` | `""` | Alt text |
| `name` | `string` | — | Generates initials ("Gabriel Dantas" → "GD") |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | 24–64px |
| `variant` | `"circular" \| "rounded" \| "square"` | `"circular"` | Shape |
| `color` | `"primary" \| "secondary" \| "success" \| "danger" \| "warning"` | `"primary"` | Background for initials |
| `status` | `"online" \| "offline" \| "busy" \| "away"` | — | Status dot |
| `icon` | `ReactNode` | — | Custom fallback icon |

## Avatar.Group Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Avatar elements |
| `max` | `number` | `5` | Max visible before "+N" |
| `size` | `AvatarSize` | `"md"` | Applied to all children |
| `spacing` | `number` | auto | Overlap in px |

## Fallback Chain

Image → Initials → Custom Icon → Default Person Icon

If the image fails to load, it automatically falls back to initials (if `name` is set).
