---
sidebar_position: 2
---

# Installation

## Requirements

- React **19.2.6** or higher
- styled-components **6+**

## Install

```bash
npm install marine-components styled-components
```

## Peer Dependencies

Marine Components uses `styled-components` for styling. Make sure it's installed in your project:

```bash
npm install styled-components
```

## Font Setup

The library uses the **Lexend** font family. Add it to your HTML head or import it in your CSS:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

Or via CSS import:

```css
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap');
```

## Usage

Import components individually — the library is tree-shakeable:

```tsx
import { Button, Input, Card } from 'marine-components';
```

## TypeScript

All components are fully typed. Types are exported alongside components:

```tsx
import type { ButtonProps, InputProps } from 'marine-components';
```
