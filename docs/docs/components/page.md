---
sidebar_position: 1
---

# Page

A root layout wrapper with optional variants, padding control, max-width constraint, and centering.

## Import

```tsx
import { Page } from 'marine-components';
```

## Usage

```tsx
<Page variant="elevated" padding="lg" centered>
  <h1>Welcome</h1>
  <p>Your content here</p>
</Page>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Page content |
| `variant` | `"default" \| "elevated" \| "outlined"` | `"default"` | Visual style |
| `padding` | `"none" \| "sm" \| "md" \| "lg"` | `"md"` | Inner padding |
| `maxWidth` | `number \| string` | — | Max content width |
| `fullHeight` | `boolean` | `false` | Fill viewport height |
| `centered` | `boolean` | `false` | Center all text content |
