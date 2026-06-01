---
sidebar_position: 3
---

# Badge

A small counter or dot indicator attached to an element (icon, avatar, etc.).

## Import

```tsx
import { Badge } from 'marine-components';
```

## Usage

```tsx
{/* Counter badge */}
<Badge content={5}>
  <MailIcon />
</Badge>

{/* Capped at max */}
<Badge content={150} max={99}>
  <MailIcon />
</Badge>

{/* Dot indicator */}
<Badge variant="dot" color="success">
  <BellIcon />
</Badge>

{/* Text badge */}
<Badge content="NEW" color="primary">
  <BellIcon />
</Badge>

{/* Standalone */}
<Badge content={3} standalone />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Element the badge attaches to |
| `content` | `ReactNode` | — | Number or short text |
| `max` | `number` | `99` | Cap — shows "99+" when exceeded |
| `variant` | `"standard" \| "dot"` | `"standard"` | Dot shows a circle with no text |
| `color` | `"primary" \| "secondary" \| "success" \| "danger" \| "warning"` | `"danger"` | Badge color |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Badge size |
| `position` | `"top-right" \| "top-left" \| "bottom-right" \| "bottom-left"` | `"top-right"` | Anchor position |
| `invisible` | `boolean` | `false` | Hide with scale animation |
| `showZero` | `boolean` | `false` | Show when content is 0 |
| `standalone` | `boolean` | `false` | Render without wrapping children |
