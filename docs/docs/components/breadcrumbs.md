---
sidebar_position: 4
---

# Breadcrumbs

A navigation breadcrumb trail with collapsible middle items, custom separators, and icon support.

## Import

```tsx
import { Breadcrumbs } from 'marine-components';
```

## Usage

```tsx
<Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Laptops' },
  ]}
/>

{/* With collapse */}
<Breadcrumbs
  maxItems={3}
  items={longItemsList}
/>

{/* Custom separator */}
<Breadcrumbs items={items} separator="→" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `BreadcrumbItem[]` | *required* | Array of `{ label, href?, icon? }` |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Font & icon size |
| `separator` | `ReactNode` | chevron `›` | Custom separator element |
| `maxItems` | `number` | — | Collapse middle into `…` |
| `onNavigate` | `(item, index) => void` | — | Click callback (prevents default) |

## BreadcrumbItem

```ts
type BreadcrumbItem = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}
```
