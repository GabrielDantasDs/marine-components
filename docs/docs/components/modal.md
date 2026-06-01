---
sidebar_position: 1
---

# Modal

A dialog overlay with portal rendering, slide-up animation, and body scroll lock.

## Import

```tsx
import { Modal } from 'marine-components';
```

## Usage

```tsx
const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Modal</Button>

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm Action"
  subtitle="This cannot be undone"
  size="md"
  footer={
    <>
      <Button variant="text" onClick={() => setOpen(false)}>Cancel</Button>
      <Button color="danger" onClick={handleDelete}>Delete</Button>
    </>
  }
>
  <p>Are you sure you want to delete this item?</p>
</Modal>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | *required* | Controls visibility |
| `onClose` | `() => void` | *required* | Close callback |
| `size` | `"sm" \| "md" \| "lg" \| "fullscreen"` | `"md"` | Dialog width (400–720px) |
| `radius` | `"regular" \| "rounded"` | `"regular"` | Border radius (12px / 32px) |
| `title` | `string` | — | Header title |
| `subtitle` | `string` | — | Header subtitle |
| `icon` | `ReactNode` | — | Header icon |
| `children` | `ReactNode` | — | Body content |
| `header` | `ReactNode` | — | Custom header slot |
| `footer` | `ReactNode` | — | Footer content |
| `closeOnOverlay` | `boolean` | `true` | Close on backdrop click |
| `closeOnEsc` | `boolean` | `true` | Close on Escape key |
| `showCloseButton` | `boolean` | `true` | Show X button |

## Features

- Portal-rendered on `document.body`
- Overlay fade-in + dialog slide-up animation
- Body scroll lock while open
- Keyboard accessible (Escape to close)
