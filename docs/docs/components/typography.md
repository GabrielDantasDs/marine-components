---
sidebar_position: 1
---

# Typography

A text component with 9 semantic variants, weight/color/align overrides, and truncation.

## Import

```tsx
import { Typography } from 'marine-components';
```

## Usage

```tsx
<Typography variant="h1">Heading 1</Typography>
<Typography variant="body1" color="secondary">Body text</Typography>
<Typography variant="caption" truncate>Long text that truncates...</Typography>
<Typography variant="body1" as="div">Rendered as div</Typography>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"h1" \| "h2" \| "h3" \| "h4" \| "body1" \| "body2" \| "caption" \| "overline" \| "label"` | `"body1"` | Text style & semantic element |
| `children` | `ReactNode` | — | Text content |
| `weight` | `number` | auto | Font weight override |
| `align` | `"left" \| "center" \| "right"` | — | Text alignment |
| `color` | `"primary" \| "secondary" \| "muted" \| "inherit"` | `"primary"` | Text color |
| `truncate` | `boolean` | `false` | Single-line ellipsis |
| `as` | `ElementType` | auto | Override HTML element |
