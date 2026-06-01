---
sidebar_position: 6
---

# Accordion

Collapsible content panels with compound component pattern.

## Import

```tsx
import { Accordion } from 'marine-components';
```

## Usage

```tsx
<Accordion variant="outlined">
  <Accordion.Item title="What is Marine Components?">
    A lightweight React component library.
  </Accordion.Item>
  <Accordion.Item title="Is it free?" defaultOpen>
    Yes, it's open source!
  </Accordion.Item>
  <Accordion.Item title="Disabled" disabled>
    Can't open this one.
  </Accordion.Item>
</Accordion>

{/* Multiple panels open at once */}
<Accordion multiple>
  <Accordion.Item title="Section 1">Content 1</Accordion.Item>
  <Accordion.Item title="Section 2">Content 2</Accordion.Item>
</Accordion>
```

## Accordion Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Accordion.Item elements |
| `variant` | `"default" \| "outlined" \| "separated"` | `"default"` | Visual style |
| `multiple` | `boolean` | `false` | Allow multiple panels open |

## Accordion.Item Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | *required* | Panel header |
| `children` | `ReactNode` | — | Panel content |
| `icon` | `ReactNode` | — | Leading icon |
| `defaultOpen` | `boolean` | `false` | Initially expanded |
| `disabled` | `boolean` | `false` | Prevent toggling |
