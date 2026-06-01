---
sidebar_position: 4
---

# Divider

A separator line — horizontal or vertical — with optional text label.

## Import

```tsx
import { Divider } from 'marine-components';
```

## Usage

```tsx
{/* Simple horizontal line */}
<Divider />

{/* With text */}
<Divider>OR</Divider>

{/* Text aligned left */}
<Divider textAlign="left">Section</Divider>

{/* Vertical between inline elements */}
<div style={{ display: 'flex', alignItems: 'center' }}>
  <span>Home</span>
  <Divider orientation="vertical" spacing={12} />
  <span>About</span>
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Direction |
| `variant` | `"solid" \| "dashed" \| "dotted"` | `"solid"` | Line style |
| `children` | `ReactNode` | — | Text label on the line |
| `textAlign` | `"left" \| "center" \| "right"` | `"center"` | Label position |
| `color` | `string` | `"#e0e0e0"` | Line color |
| `thickness` | `number` | `1` | Line thickness (px) |
| `spacing` | `number` | `16` | Margin around divider (px) |
