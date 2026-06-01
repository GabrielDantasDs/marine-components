---
slug: /
sidebar_position: 1
---

# Marine Components

A lightweight **React 19** component library with clean, modern design. Inspired by Material UI but with lighter colors, tiny shadows, and the Lexend font family.

## Features

- 28 ready-to-use components
- Styled with **styled-components** — no global CSS conflicts
- Fully typed with **TypeScript** in strict mode
- Controlled and uncontrolled patterns on all form components
- Accessible — semantic HTML, ARIA attributes, keyboard navigation
- Consistent sizing (`sm`, `md`, `lg`), color system, and variant patterns
- Tree-shakeable ESM + CJS builds

## Component Overview

| Category | Components |
|----------|-----------|
| **Layout** | Page, Card, CardList, Divider |
| **Navigation** | Navbar, Sidebar, Tabs, Breadcrumbs, Pagination |
| **Data Display** | Typography, Avatar, Badge, Chip, Tooltip, Accordion |
| **Forms** | Button, Input, Select, Checkbox, Radio, Switch, DatePicker, TimePicker |
| **Feedback** | Alert, Toast, Spinner, Skeleton |
| **Overlays** | Modal, Drawer |

## Quick Start

```bash
npm install marine-components
```

```tsx
import { Button, Card, Input } from 'marine-components';

function App() {
  return (
    <Card title="Welcome">
      <Input label="Name" placeholder="Enter your name" />
      <Button>Submit</Button>
    </Card>
  );
}
```
