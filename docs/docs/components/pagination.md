---
sidebar_position: 5
---

# Pagination

A page navigation component with smart ellipsis, variants, and custom arrow icons.

## Import

```tsx
import { Pagination } from 'marine-components';
```

## Usage

```tsx
{/* Uncontrolled */}
<Pagination totalPages={20} defaultPage={1} />

{/* Controlled */}
const [page, setPage] = useState(1);
<Pagination totalPages={20} page={page} onChange={setPage} />

{/* With first/last buttons */}
<Pagination totalPages={50} showFirstLast />

{/* Custom icons */}
<Pagination
  totalPages={10}
  prevIcon={<span>Prev</span>}
  nextIcon={<span>Next</span>}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `totalPages` | `number` | *required* | Total page count |
| `page` | `number` | — | Controlled current page (1-based) |
| `defaultPage` | `number` | `1` | Uncontrolled default |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Button size |
| `variant` | `"filled" \| "outlined" \| "text"` | `"filled"` | Active page style |
| `color` | `"primary" \| "secondary" \| "success" \| "danger"` | `"primary"` | Active color |
| `siblingCount` | `number` | `1` | Pages shown around current |
| `showFirstLast` | `boolean` | `false` | Show first/last page buttons |
| `disabled` | `boolean` | `false` | Disable all buttons |
| `onChange` | `(page: number) => void` | — | Page change callback |
| `prevIcon` | `ReactNode` | chevron | Custom previous icon |
| `nextIcon` | `ReactNode` | chevron | Custom next icon |
| `firstIcon` | `ReactNode` | double chevron | Custom first page icon |
| `lastIcon` | `ReactNode` | double chevron | Custom last page icon |
