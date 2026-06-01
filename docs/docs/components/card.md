---
sidebar_position: 2
---

# Card

A container component with title, subtitle, footer slot, shadow variants, and border radius options.

## Import

```tsx
import { Card } from 'marine-components';
```

## Usage

```tsx
<Card title="Project Stats" subtitle="Last 7 days" shadow="md" radius="rounded">
  <p>Content goes here</p>
</Card>

<Card title="With Footer" footer={<button>View More</button>}>
  <p>Card body</p>
</Card>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Card body content |
| `title` | `string` | — | Card title |
| `subtitle` | `string` | — | Subtitle below title |
| `radius` | `"regular" \| "rounded"` | `"regular"` | Border radius (8px / 20px) |
| `shadow` | `"none" \| "sm" \| "md" \| "lg"` | `"sm"` | Box shadow level |
| `padding` | `"none" \| "sm" \| "md" \| "lg"` | `"md"` | Inner padding |
| `outlined` | `boolean` | `false` | Show border instead of shadow |
| `footer` | `ReactNode` | — | Footer content slot |
