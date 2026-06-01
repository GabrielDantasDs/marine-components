---
sidebar_position: 2
---

# Toast

A notification toast system with provider pattern and `useToast` hook. Portal-rendered.

## Import

```tsx
import { ToastProvider, useToast } from 'marine-components';
```

## Setup

Wrap your app with `ToastProvider`:

```tsx
function App() {
  return (
    <ToastProvider position="top-right" maxToasts={5}>
      <YourApp />
    </ToastProvider>
  );
}
```

## Usage

```tsx
function MyComponent() {
  const toast = useToast();

  return (
    <button onClick={() => toast.success('Saved!')}>
      Save
    </button>
  );
}

// All toast types
toast.success('Operation completed');
toast.error('Something went wrong');
toast.warning('Check your input');
toast.info('New update available');

// With options
toast.success('Saved!', {
  duration: 5000,
  closable: true,
  action: { label: 'Undo', onClick: undo },
});

// Persistent (duration: 0)
toast.error('Connection lost', { duration: 0, closable: true });
```

## ToastProvider Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | App content |
| `position` | `"top-right" \| "top-left" \| "top-center" \| "bottom-right" \| "bottom-left" \| "bottom-center"` | `"top-right"` | Toast position |
| `maxToasts` | `number` | `5` | Max visible toasts |

## Toast Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `duration` | `number` | `4000` | Auto-dismiss (ms). `0` = persistent |
| `closable` | `boolean` | `true` | Show close button |
| `action` | `{ label, onClick }` | — | Action button |

## Toast Types

Each type has a default icon: ✓ success, ✕ error, ⚠ warning, ℹ info.
