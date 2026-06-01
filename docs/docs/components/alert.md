---
sidebar_position: 1
---

# Alert

Inline alert messages and full-width banners for notifications. Includes `Alert.Banner` sub-component.

## Import

```tsx
import { Alert } from 'marine-components';
```

## Usage

```tsx
{/* Inline alert */}
<Alert type="success" title="Saved!" closable>
  Your changes have been saved.
</Alert>

{/* Variants */}
<Alert type="error" variant="filled">Something went wrong.</Alert>
<Alert type="warning" variant="outlined">Check your input.</Alert>
<Alert type="info" icon={false}>No icon alert.</Alert>

{/* With action */}
<Alert type="error" action={{ label: 'Retry', onClick: retry }} closable>
  Connection lost.
</Alert>

{/* Banner */}
<Alert.Banner type="warning" closable action={{ label: 'Upgrade', onClick: upgrade }}>
  Your trial expires in 3 days.
</Alert.Banner>
```

## Alert Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `"info" \| "success" \| "warning" \| "error"` | `"info"` | Semantic type |
| `variant` | `"filled" \| "outlined" \| "light"` | `"light"` | Visual style |
| `title` | `string` | — | Bold title |
| `children` | `ReactNode` | *required* | Message content |
| `icon` | `ReactNode \| false` | auto | Custom icon, or `false` to hide |
| `closable` | `boolean` | `false` | Show close button |
| `onClose` | `() => void` | — | Close callback |
| `action` | `{ label, onClick }` | — | Action button |

## Alert.Banner Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `AlertType` | `"info"` | Color theme |
| `children` | `ReactNode` | *required* | Centered message |
| `closable` | `boolean` | `false` | Close button |
| `onClose` | `() => void` | — | Close callback |
| `action` | `{ label, onClick }` | — | Action button |
| `sticky` | `boolean` | `false` | Sticky to top of viewport |
