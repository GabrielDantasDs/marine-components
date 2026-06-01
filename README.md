# Marine Components

A lightweight **React 19** component library with clean, modern design. Inspired by Material UI but with lighter colors, tiny shadows, and the Lexend font family.

**[Documentation](https://gabrieldantas.github.io/marine-components/)** | **[Storybook](https://gabrieldantas.github.io/marine-components/storybook/)**

## Features

- 28 ready-to-use components
- Styled with **styled-components** — no global CSS conflicts
- Fully typed with **TypeScript** in strict mode
- Controlled and uncontrolled patterns on all form components
- Accessible — semantic HTML, ARIA attributes, keyboard navigation
- Tree-shakeable ESM + CJS builds

## Installation

```bash
npm install marine-components styled-components
```

Add the Lexend font to your HTML:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

## Quick Start

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

## Components

| Category | Components |
|----------|-----------|
| **Layout** | Page, Card, CardList, Divider |
| **Navigation** | Navbar, Sidebar, Tabs, Breadcrumbs, Pagination |
| **Data Display** | Typography, Avatar, Badge, Chip, Tooltip, Accordion |
| **Forms** | Button, Input, Select, Checkbox, Radio, Switch, DatePicker, TimePicker |
| **Feedback** | Alert, Toast, Spinner, Skeleton |
| **Overlays** | Modal, Drawer |

## Development

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Run tests
npm test

# Build the library
npm run build

# Run docs site locally
cd docs && npm start
```

## License

MIT
