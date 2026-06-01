import React from "react";
import Spinner from ".";

export default {
  title: "MyComponents/Spinner",
  component: Spinner,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: { type: "select" }, options: ["circular", "dots", "bar"] },
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    color: { control: { type: "select" }, options: ["primary", "secondary", "success", "danger", "inherit"] },
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
    overlay: { control: "boolean" },
  },
};

export const Default = { args: {} };

export const WithLabel = { args: { label: "Loading..." } };

export const Large = { args: { size: "lg", label: "Please wait" } };

export const Success = { args: { color: "success" } };

export const Determinate = { args: { value: 65, label: "65%" } };

export const Dots = { args: { variant: "dots", label: "Loading" } };

export const DotsLarge = { args: { variant: "dots", size: "lg", color: "success" } };

export const Bar = { args: { variant: "bar" } };

export const BarDeterminate = { args: { variant: "bar", value: 45, label: "Uploading... 45%" } };

export const BarLarge = { args: { variant: "bar", size: "lg", color: "danger", label: "Processing" } };

export const OverlayExample = {
  render: () => (
    <div style={{ position: "relative", width: 300, height: 200, border: "1px solid #e0e0e0", borderRadius: 8, padding: 16 }}>
      <p style={{ fontFamily: "Lexend, sans-serif", color: "#999" }}>Card content behind the overlay</p>
      <Spinner overlay label="Loading..." />
    </div>
  ),
};

export const AllVariants = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, alignItems: "center" }}>
      <Spinner variant="circular" label="Circular" />
      <Spinner variant="dots" label="Dots" />
      <div style={{ width: 240 }}>
        <Spinner variant="bar" label="Bar" />
      </div>
    </div>
  ),
};
