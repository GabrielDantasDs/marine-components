---
sidebar_position: 5
---

# Tooltip

A hover/focus popup displaying additional information.

## Import

```tsx
import { Tooltip } from 'marine-components';
```

## Usage

```tsx
<Tooltip content="Save changes">
  <button>Save</button>
</Tooltip>

<Tooltip content="Bottom tooltip" placement="bottom" color="light">
  <span>Hover me</span>
</Tooltip>

{/* Rich content */}
<Tooltip content={<><strong>Title</strong><br/>Description</>} maxWidth={200}>
  <button>Info</button>
</Tooltip>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `ReactNode` | *required* | Tooltip text or rich content |
| `children` | `ReactElement` | *required* | Trigger element |
| `placement` | `"top" \| "bottom" \| "left" \| "right"` | `"top"` | Position |
| `color` | `"dark" \| "light"` | `"dark"` | Theme |
| `size` | `"sm" \| "md"` | `"md"` | Padding & font size |
| `enterDelay` | `number` | `100` | Delay before showing (ms) |
| `leaveDelay` | `number` | `0` | Delay before hiding (ms) |
| `disabled` | `boolean` | `false` | Prevents showing |
| `arrow` | `boolean` | `true` | Show arrow pointer |
| `maxWidth` | `number` | `240` | Max width before wrapping (px) |
