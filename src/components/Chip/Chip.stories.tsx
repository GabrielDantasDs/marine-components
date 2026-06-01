import React from "react";
import Chip from ".";

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="5.5" r="3" stroke="currentColor" strokeWidth="1.2" />
    <path d="M2.5 14c0-3 2.5-4.5 5.5-4.5s5.5 1.5 5.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1.5l1.8 3.7 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6L8 1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
  </svg>
);

export default {
  title: "MyComponents/Chip",
  component: Chip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    color: { control: { type: "select" }, options: ["primary", "secondary", "success", "danger", "warning"] },
    variant: { control: { type: "select" }, options: ["filled", "outlined", "light"] },
    deletable: { control: "boolean" },
    clickable: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" },
  },
};

export const Default = { args: { label: "Chip" } };

export const Colors = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Success" color="success" />
      <Chip label="Danger" color="danger" />
      <Chip label="Warning" color="warning" />
    </div>
  ),
};

export const Variants = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Chip label="Filled" variant="filled" />
      <Chip label="Outlined" variant="outlined" />
      <Chip label="Light" variant="light" />
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Chip label="Small" size="sm" />
      <Chip label="Medium" size="md" />
      <Chip label="Large" size="lg" />
    </div>
  ),
};

export const WithIcon = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Chip label="User" startIcon={<UserIcon />} />
      <Chip label="Starred" startIcon={<StarIcon />} color="warning" variant="light" />
      <Chip label="Avatar" startIcon={<img src="https://i.pravatar.cc/32?img=5" alt="" />} />
    </div>
  ),
};

export const Deletable = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Chip label="React" deletable onDelete={() => alert("Deleted React")} />
      <Chip label="TypeScript" deletable variant="outlined" onDelete={() => alert("Deleted TS")} />
      <Chip label="Node.js" deletable variant="light" color="success" onDelete={() => alert("Deleted Node")} />
    </div>
  ),
};

export const Clickable = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Chip label="Click me" clickable onClick={() => alert("Clicked!")} />
      <Chip label="Outlined" clickable variant="outlined" onClick={() => alert("Outlined!")} />
      <Chip label="With delete" clickable deletable onClick={() => alert("Chip clicked")} onDelete={() => alert("Delete clicked")} />
    </div>
  ),
};

export const Disabled = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Chip label="Disabled" disabled />
      <Chip label="Disabled outlined" variant="outlined" disabled />
      <Chip label="Disabled deletable" deletable disabled />
    </div>
  ),
};

export const TagList = {
  render: () => {
    const tags = ["JavaScript", "React", "TypeScript", "Node.js", "CSS", "GraphQL"];
    const [items, setItems] = React.useState(tags);
    return (
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {items.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            variant="light"
            deletable
            onDelete={() => setItems(items.filter((t) => t !== tag))}
          />
        ))}
      </div>
    );
  },
};
