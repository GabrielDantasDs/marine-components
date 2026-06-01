import React from "react";
import Badge from ".";

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 4L12 13L2 4" />
  </svg>
);

const BellIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

export default {
  title: "MyComponents/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: { type: "select" }, options: ["standard", "dot"] },
    color: { control: { type: "select" }, options: ["primary", "secondary", "success", "danger", "warning"] },
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    position: { control: { type: "select" }, options: ["top-right", "top-left", "bottom-right", "bottom-left"] },
    content: { control: { type: "number" } },
    max: { control: { type: "number" } },
    invisible: { control: "boolean" },
    showZero: { control: "boolean" },
  },
};

export const Default = {
  args: { content: 5 },
  render: (args: any) => (
    <Badge {...args}><MailIcon /></Badge>
  ),
};

export const HighCount = {
  args: { content: 150, max: 99 },
  render: (args: any) => (
    <Badge {...args}><MailIcon /></Badge>
  ),
};

export const DotVariant = {
  args: { variant: "dot", color: "success" },
  render: (args: any) => (
    <Badge {...args}><BellIcon /></Badge>
  ),
};

export const TextContent = {
  args: { content: "NEW", color: "primary" },
  render: (args: any) => (
    <Badge {...args}><BellIcon /></Badge>
  ),
};

export const Colors = {
  render: () => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <Badge content={3} color="primary"><MailIcon /></Badge>
      <Badge content={3} color="secondary"><MailIcon /></Badge>
      <Badge content={3} color="success"><MailIcon /></Badge>
      <Badge content={3} color="danger"><MailIcon /></Badge>
      <Badge content={3} color="warning"><MailIcon /></Badge>
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <Badge content={5} size="sm"><MailIcon /></Badge>
      <Badge content={5} size="md"><MailIcon /></Badge>
      <Badge content={5} size="lg"><MailIcon /></Badge>
    </div>
  ),
};

export const Positions = {
  render: () => (
    <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
      <Badge content={1} position="top-right"><MailIcon /></Badge>
      <Badge content={2} position="top-left"><MailIcon /></Badge>
      <Badge content={3} position="bottom-right"><MailIcon /></Badge>
      <Badge content={4} position="bottom-left"><MailIcon /></Badge>
    </div>
  ),
};

export const ZeroHidden = {
  args: { content: 0 },
  render: (args: any) => (
    <Badge {...args}><MailIcon /></Badge>
  ),
};

export const ZeroVisible = {
  args: { content: 0, showZero: true },
  render: (args: any) => (
    <Badge {...args}><MailIcon /></Badge>
  ),
};

export const Standalone = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Badge content={3} color="danger" standalone />
      <Badge content="NEW" color="primary" standalone />
      <Badge variant="dot" color="success" standalone />
    </div>
  ),
};
