---
sidebar_position: 2
---

# Sidebar

A vertical navigation panel with compound component pattern. Features collapsible mode, grouped items, fancy hover/active animations.

## Import

```tsx
import { Sidebar } from 'marine-components';
```

## Usage

```tsx
<Sidebar variant="elevated" header={<h3>Menu</h3>}>
  <Sidebar.Item active icon={<HomeIcon />}>Dashboard</Sidebar.Item>
  <Sidebar.Item icon={<UsersIcon />}>Users</Sidebar.Item>
  <Sidebar.Group label="Settings">
    <Sidebar.Item>General</Sidebar.Item>
    <Sidebar.Item>Security</Sidebar.Item>
  </Sidebar.Group>
  <Sidebar.Divider />
  <Sidebar.Item>Logout</Sidebar.Item>
</Sidebar>
```

## Sidebar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Sidebar content |
| `variant` | `"default" \| "elevated" \| "outlined"` | `"default"` | Visual style |
| `collapsed` | `boolean` | `false` | Collapsed (icon-only) mode |
| `header` | `ReactNode` | — | Top content |
| `footer` | `ReactNode` | — | Bottom content |

## Sidebar.Item Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Item label |
| `icon` | `ReactNode` | — | Leading icon |
| `active` | `boolean` | `false` | Active state (blue left bar + glow) |
| `onClick` | `() => void` | — | Click handler |

## Sidebar.Group Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Group heading |
| `children` | `ReactNode` | — | Group items |

## Effects

- Hover: `translateX(2px)` nudge
- Active: blue left bar + glow animation
- Click: `scale(0.98)` press effect
