import React from "react";
import Tooltip from ".";

export default {
  title: "MyComponents/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    placement: { control: { type: "select" }, options: ["top", "bottom", "left", "right"] },
    color: { control: { type: "select" }, options: ["dark", "light"] },
    size: { control: { type: "select" }, options: ["sm", "md"] },
    arrow: { control: "boolean" },
    disabled: { control: "boolean" },
    enterDelay: { control: { type: "number" } },
    leaveDelay: { control: { type: "number" } },
    maxWidth: { control: { type: "number" } },
    content: { control: "text" },
  },
};

const SampleButton = ({ label = "Hover me" }: { label?: string }) => (
  <button
    style={{
      fontFamily: "Lexend, sans-serif",
      padding: "8px 16px",
      borderRadius: 8,
      border: "1px solid #d0d0d0",
      background: "#fff",
      cursor: "pointer",
      fontSize: "0.88rem",
    }}
  >
    {label}
  </button>
);

export const Default = {
  args: { content: "This is a tooltip" },
  render: (args: any) => (
    <Tooltip {...args}>
      <SampleButton />
    </Tooltip>
  ),
};

export const Placements = {
  render: () => (
    <div style={{ display: "flex", gap: 40, alignItems: "center", padding: 60 }}>
      <Tooltip content="Top tooltip" placement="top">
        <SampleButton label="Top" />
      </Tooltip>
      <Tooltip content="Bottom tooltip" placement="bottom">
        <SampleButton label="Bottom" />
      </Tooltip>
      <Tooltip content="Left tooltip" placement="left">
        <SampleButton label="Left" />
      </Tooltip>
      <Tooltip content="Right tooltip" placement="right">
        <SampleButton label="Right" />
      </Tooltip>
    </div>
  ),
};

export const LightColor = {
  args: { content: "Light tooltip", color: "light" },
  render: (args: any) => (
    <Tooltip {...args}>
      <SampleButton />
    </Tooltip>
  ),
};

export const SmallSize = {
  args: { content: "Small tooltip", size: "sm" },
  render: (args: any) => (
    <Tooltip {...args}>
      <SampleButton />
    </Tooltip>
  ),
};

export const NoArrow = {
  args: { content: "No arrow", arrow: false },
  render: (args: any) => (
    <Tooltip {...args}>
      <SampleButton />
    </Tooltip>
  ),
};

export const LongContent = {
  args: {
    content: "This is a longer tooltip message that wraps to multiple lines when it exceeds the max width.",
    maxWidth: 200,
  },
  render: (args: any) => (
    <Tooltip {...args}>
      <SampleButton />
    </Tooltip>
  ),
};

export const WithDelay = {
  args: { content: "Delayed tooltip", enterDelay: 500, leaveDelay: 300 },
  render: (args: any) => (
    <Tooltip {...args}>
      <SampleButton label="Hover (500ms delay)" />
    </Tooltip>
  ),
};

export const Disabled = {
  args: { content: "You won't see this", disabled: true },
  render: (args: any) => (
    <Tooltip {...args}>
      <SampleButton label="Disabled tooltip" />
    </Tooltip>
  ),
};

export const OnIcon = {
  render: () => (
    <Tooltip content="Settings">
      <span style={{ cursor: "pointer", fontSize: 20 }}>⚙️</span>
    </Tooltip>
  ),
};

export const RichContent = {
  render: () => (
    <Tooltip
      content={
        <span>
          <strong>Bold title</strong>
          <br />
          With a second line of info
        </span>
      }
      maxWidth={200}
    >
      <SampleButton label="Rich tooltip" />
    </Tooltip>
  ),
};
