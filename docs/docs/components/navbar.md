---
sidebar_position: 1
---

# Navbar

A top navigation bar with compound component pattern. Supports fixed/sticky positioning, variants, logo, and grouped items.

## Import

```tsx
import { Navbar } from 'marine-components';
```

## Usage

```tsx
<Navbar title="My App" position="sticky" variant="elevated">
  <Navbar.Group>
    <Navbar.Item active>Home</Navbar.Item>
    <Navbar.Item>Products</Navbar.Item>
    <Navbar.Item>About</Navbar.Item>
  </Navbar.Group>
</Navbar>
```

## Navbar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Navbar content |
| `title` | `string` | — | App/brand title |
| `logo` | `ReactNode` | — | Logo element |
| `position` | `"fixed" \| "sticky" \| "static"` | `"static"` | Position behavior |
| `variant` | `"default" \| "elevated" \| "outlined" \| "transparent"` | `"default"` | Visual style |
| `fullWidth` | `boolean` | `false` | Full viewport width |
| `height` | `number` | `56` | Bar height (px) |
| `endContent` | `ReactNode` | — | Right-side content |

## Navbar.Item Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Item label |
| `active` | `boolean` | `false` | Active state (blue underline) |
| `onClick` | `() => void` | — | Click handler |

## Navbar.Group Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Group items |
