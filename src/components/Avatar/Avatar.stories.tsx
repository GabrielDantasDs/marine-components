import React from "react";
import Avatar from ".";

export default {
  title: "MyComponents/Avatar",
  component: Avatar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: { type: "select" }, options: ["xs", "sm", "md", "lg", "xl"] },
    variant: { control: { type: "select" }, options: ["circular", "rounded", "square"] },
    color: { control: { type: "select" }, options: ["primary", "secondary", "success", "danger", "warning"] },
    status: { control: { type: "select" }, options: [undefined, "online", "offline", "busy", "away"] },
  },
};

export const Default = { args: {} };

export const WithImage = {
  args: {
    src: "https://i.pravatar.cc/150?img=32",
    alt: "User avatar",
  },
};

export const Initials = { args: { name: "Gabriel Dantas" } };

export const SingleName = { args: { name: "Gabriel", color: "success" } };

export const StatusOnline = {
  args: {
    src: "https://i.pravatar.cc/150?img=12",
    status: "online",
  },
};

export const StatusBusy = {
  args: { name: "Jane Doe", color: "danger", status: "busy" },
};

export const AllStatuses = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Avatar name="AB" status="online" />
      <Avatar name="CD" color="secondary" status="offline" />
      <Avatar name="EF" color="danger" status="busy" />
      <Avatar name="GH" color="warning" status="away" />
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Avatar name="XS" size="xs" />
      <Avatar name="SM" size="sm" />
      <Avatar name="MD" size="md" />
      <Avatar name="LG" size="lg" />
      <Avatar name="XL" size="xl" />
    </div>
  ),
};

export const Variants = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Avatar name="CI" variant="circular" />
      <Avatar name="RO" variant="rounded" color="success" />
      <Avatar name="SQ" variant="square" color="danger" />
    </div>
  ),
};

export const Colors = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Avatar name="PR" color="primary" />
      <Avatar name="SE" color="secondary" />
      <Avatar name="SU" color="success" />
      <Avatar name="DA" color="danger" />
      <Avatar name="WA" color="warning" />
    </div>
  ),
};

export const FallbackIcon = {
  args: { size: "lg" },
};

export const ImageError = {
  args: {
    src: "https://broken-url.example/avatar.jpg",
    name: "Fallback User",
    size: "lg",
  },
};

export const Group = {
  render: () => (
    <Avatar.Group max={3} size="md">
      <Avatar src="https://i.pravatar.cc/150?img=1" />
      <Avatar src="https://i.pravatar.cc/150?img=2" />
      <Avatar src="https://i.pravatar.cc/150?img=3" />
      <Avatar src="https://i.pravatar.cc/150?img=4" />
      <Avatar src="https://i.pravatar.cc/150?img=5" />
    </Avatar.Group>
  ),
};

export const GroupLarge = {
  render: () => (
    <Avatar.Group max={4} size="lg">
      <Avatar name="Ana Silva" color="primary" />
      <Avatar name="Bob Smith" color="success" />
      <Avatar name="Carol Lee" color="danger" />
      <Avatar name="Dan Brown" color="warning" />
      <Avatar name="Eve Park" color="secondary" />
      <Avatar name="Frank Wu" color="primary" />
    </Avatar.Group>
  ),
};
