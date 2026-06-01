---
sidebar_position: 6
---

# Switch

A toggle switch with track/thumb animation, sizes, and colors.

## Import

```tsx
import { Switch } from 'marine-components';
```

## Usage

```tsx
<Switch label="Notifications" />
<Switch label="Dark mode" defaultChecked />
<Switch label="Active" color="success" />
<Switch label="Locked" disabled defaultChecked />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Switch label |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Track/thumb size |
| `color` | `"primary" \| "success" \| "danger"` | `"primary"` | Active track color |
| `checked` | `boolean` | — | Controlled state |
| `defaultChecked` | `boolean` | `false` | Uncontrolled default |
| `disabled` | `boolean` | `false` | Disabled state |
| `onChange` | `(checked: boolean) => void` | — | Change callback |
