---
sidebar_position: 2
---

# Drawer

A slide-in panel from any edge of the screen. Portal-rendered with overlay.

## Import

```tsx
import { Drawer } from 'marine-components';
```

## Usage

```tsx
const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Drawer</Button>

<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="Settings"
  subtitle="Update your preferences"
  footer={
    <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
      <Button variant="text" onClick={() => setOpen(false)}>Cancel</Button>
      <Button onClick={save}>Save</Button>
    </div>
  }
>
  <p>Drawer body content</p>
</Drawer>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | *required* | Controls visibility |
| `onClose` | `() => void` | *required* | Close callback |
| `placement` | `"left" \| "right" \| "top" \| "bottom"` | `"right"` | Slide direction |
| `size` | `"sm" \| "md" \| "lg" \| "full"` | `"md"` | Panel width/height |
| `title` | `string` | — | Header title |
| `subtitle` | `string` | — | Header subtitle |
| `children` | `ReactNode` | *required* | Body content |
| `footer` | `ReactNode` | — | Footer slot |
| `closeOnOverlay` | `boolean` | `true` | Close on backdrop click |
| `closeOnEsc` | `boolean` | `true` | Close on Escape key |
| `showCloseButton` | `boolean` | `true` | Show X button |

## Sizes

| Size | Dimension |
|------|-----------|
| sm | 280px |
| md | 400px |
| lg | 560px |
| full | 100% |

For `top`/`bottom` placement, the size controls height instead of width.
