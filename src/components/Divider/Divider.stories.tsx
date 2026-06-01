import React from "react";
import Divider from ".";

export default {
  title: "MyComponents/Divider",
  component: Divider,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    orientation: { control: { type: "select" }, options: ["horizontal", "vertical"] },
    variant: { control: { type: "select" }, options: ["solid", "dashed", "dotted"] },
    textAlign: { control: { type: "select" }, options: ["left", "center", "right"] },
    color: { control: "color" },
    thickness: { control: { type: "number" } },
    spacing: { control: { type: "number" } },
  },
};

const Text = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: "Lexend, sans-serif", fontSize: "0.88rem", color: "#444", margin: 0 }}>
    {children}
  </p>
);

export const Default = {
  render: () => (
    <div style={{ width: 400 }}>
      <Text>Section above</Text>
      <Divider />
      <Text>Section below</Text>
    </div>
  ),
};

export const WithText = {
  render: () => (
    <div style={{ width: 400 }}>
      <Text>Content above</Text>
      <Divider>OR</Divider>
      <Text>Content below</Text>
    </div>
  ),
};

export const TextAlignments = {
  render: () => (
    <div style={{ width: 400, display: "flex", flexDirection: "column", gap: 8 }}>
      <Divider textAlign="left">Left</Divider>
      <Divider textAlign="center">Center</Divider>
      <Divider textAlign="right">Right</Divider>
    </div>
  ),
};

export const Variants = {
  render: () => (
    <div style={{ width: 400, display: "flex", flexDirection: "column", gap: 8 }}>
      <Divider variant="solid" />
      <Divider variant="dashed" />
      <Divider variant="dotted" />
    </div>
  ),
};

export const Vertical = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", height: 40, fontFamily: "Lexend, sans-serif", fontSize: "0.88rem", color: "#444" }}>
      <span>Home</span>
      <Divider orientation="vertical" spacing={12} />
      <span>Products</span>
      <Divider orientation="vertical" spacing={12} />
      <span>About</span>
      <Divider orientation="vertical" spacing={12} />
      <span>Contact</span>
    </div>
  ),
};

export const CustomColor = {
  render: () => (
    <div style={{ width: 400 }}>
      <Divider color="#4a90d9" thickness={2}>Section</Divider>
    </div>
  ),
};

export const Thick = {
  render: () => (
    <div style={{ width: 400 }}>
      <Divider thickness={3} color="#e05252" />
    </div>
  ),
};

export const DashedWithText = {
  render: () => (
    <div style={{ width: 400 }}>
      <Divider variant="dashed">Continue</Divider>
    </div>
  ),
};
