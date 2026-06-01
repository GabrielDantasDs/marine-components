---
sidebar_position: 3
---

# Tabs

A tabbed interface with compound component pattern. Only the active panel renders.

## Import

```tsx
import { Tabs } from 'marine-components';
```

## Usage

```tsx
<Tabs defaultValue="tab1" variant="underline">
  <Tabs.Tab value="tab1">General</Tabs.Tab>
  <Tabs.Tab value="tab2">Security</Tabs.Tab>
  <Tabs.Tab value="tab3" disabled>Advanced</Tabs.Tab>

  <Tabs.Panel value="tab1">General settings content</Tabs.Panel>
  <Tabs.Panel value="tab2">Security settings content</Tabs.Panel>
  <Tabs.Panel value="tab3">Advanced content</Tabs.Panel>
</Tabs>
```

## Tabs Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Tab and Panel elements |
| `defaultValue` | `string` | — | Default active tab (uncontrolled) |
| `value` | `string` | — | Active tab (controlled) |
| `variant` | `"underline" \| "filled" \| "outlined"` | `"underline"` | Tab style |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Tab size |
| `fullWidth` | `boolean` | `false` | Stretch tabs to fill width |
| `onChange` | `(value: string) => void` | — | Tab change callback |

## Tabs.Tab Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | *required* | Tab identifier |
| `children` | `ReactNode` | — | Tab label |
| `icon` | `ReactNode` | — | Tab icon |
| `disabled` | `boolean` | `false` | Disabled state |

## Tabs.Panel Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | *required* | Matches a Tab value |
| `children` | `ReactNode` | — | Panel content |
