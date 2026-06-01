---
sidebar_position: 3
---

# Theming

Marine Components uses a consistent design system across all components.

## Color Palette

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#4a90d9` | Default actions, links, active states |
| Secondary | `#6b7280` | Subtle elements, secondary actions |
| Success | `#4caf6a` | Confirmations, positive states |
| Danger | `#e05252` | Errors, destructive actions |
| Warning | `#f0a030` | Warnings, caution states |

### Neutral Colors

| Name | Hex | Usage |
|------|-----|-------|
| Text Primary | `#1a1a1a` | Headings, body text |
| Text Secondary | `#6b7280` | Captions, labels |
| Text Muted | `#9ca3af` | Placeholders, disabled text |
| Border | `#e0e0e0` | Borders, dividers |
| Background | `#f5f5f5` | Page backgrounds, hover states |

## Typography

The library uses **Lexend** as the default font family with the following scale:

| Variant | Size | Weight | Element |
|---------|------|--------|---------|
| h1 | 2rem | 700 | `<h1>` |
| h2 | 1.5rem | 600 | `<h2>` |
| h3 | 1.25rem | 600 | `<h3>` |
| h4 | 1.1rem | 600 | `<h4>` |
| body1 | 1rem | 400 | `<p>` |
| body2 | 0.88rem | 400 | `<p>` |
| caption | 0.75rem | 400 | `<span>` |
| overline | 0.7rem | 600 | `<span>` |
| label | 0.85rem | 500 | `<label>` |

## Sizing System

Most components support three sizes:

| Size | Description |
|------|------------|
| `sm` | Compact — smaller padding, font, and height |
| `md` | Default — standard sizing |
| `lg` | Large — more prominent |

Some components like Avatar add `xs` and `xl` sizes.

## Border Radius

Components that support the `radius` prop use:

| Value | Radius | Usage |
|-------|--------|-------|
| `regular` | 8px | Default rounded corners |
| `rounded` | 20–32px | Pill-shaped, more rounded |

## Shadows

Shadows are minimal and light:

| Level | Value |
|-------|-------|
| none | `none` |
| sm | `0 1px 3px rgba(0,0,0,0.06)` |
| md | `0 2px 8px rgba(0,0,0,0.08)` |
| lg | `0 4px 16px rgba(0,0,0,0.1)` |

## Patterns

### Controlled / Uncontrolled

All form components support both modes:

```tsx
// Uncontrolled — internal state
<Input defaultValue="hello" />

// Controlled — you manage state
<Input value={name} onChange={setName} />
```

### Compound Components

Several components use the compound pattern:

```tsx
<Tabs defaultValue="tab1">
  <Tabs.Tab value="tab1">First</Tabs.Tab>
  <Tabs.Tab value="tab2">Second</Tabs.Tab>
  <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
  <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
</Tabs>
```

Components using this pattern: **Navbar**, **Sidebar**, **Tabs**, **Accordion**, **Radio**, **Avatar.Group**, **Alert.Banner**.
