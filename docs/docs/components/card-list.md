---
sidebar_position: 3
---

# CardList

A scrollable list of cards with vertical or horizontal direction, optional header/footer.

## Import

```tsx
import { CardList } from 'marine-components';
```

## Usage

```tsx
<CardList direction="vertical" maxHeight={400} header={<h3>My Items</h3>}>
  <Card title="Item 1">Content</Card>
  <Card title="Item 2">Content</Card>
  <Card title="Item 3">Content</Card>
</CardList>

<CardList direction="horizontal" gap={16}>
  <Card title="A">Horizontal</Card>
  <Card title="B">Scrollable</Card>
</CardList>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Card items |
| `direction` | `"vertical" \| "horizontal"` | `"vertical"` | Layout direction |
| `radius` | `"regular" \| "rounded"` | `"regular"` | Border radius |
| `shadow` | `"none" \| "sm" \| "md" \| "lg"` | `"sm"` | Box shadow |
| `gap` | `number` | `12` | Gap between items (px) |
| `header` | `ReactNode` | — | Header content |
| `footer` | `ReactNode` | — | Footer content |
| `maxHeight` | `number` | — | Enables vertical scrolling |
