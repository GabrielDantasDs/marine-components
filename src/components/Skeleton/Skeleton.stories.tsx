import React from "react";
import Skeleton from ".";

export default {
  title: "MyComponents/Skeleton",
  component: Skeleton,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: { type: "select" }, options: ["text", "circular", "rectangular", "rounded"] },
    animation: { control: { type: "select" }, options: ["pulse", "wave", "none"] },
    width: { control: { type: "text" } },
    height: { control: { type: "text" } },
    lines: { control: { type: "number" } },
    lineGap: { control: { type: "number" } },
    lastLineWidth: { control: { type: "text" } },
    borderRadius: { control: { type: "number" } },
  },
};

export const Text = { args: { variant: "text", width: 240 } };

export const MultiLine = { args: { variant: "text", lines: 4, width: 300 } };

export const Circular = { args: { variant: "circular", width: 48, height: 48 } };

export const Rectangular = { args: { variant: "rectangular", width: 300, height: 140 } };

export const Rounded = { args: { variant: "rounded", width: 300, height: 140 } };

export const WaveAnimation = { args: { variant: "rectangular", width: 300, height: 100, animation: "wave" } };

export const NoAnimation = { args: { variant: "rectangular", width: 300, height: 100, animation: "none" } };

export const CardSkeleton = {
  render: () => (
    <div style={{ width: 300, padding: 16, border: "1px solid #e5e7eb", borderRadius: 12, display: "flex", flexDirection: "column", gap: 12 }}>
      <Skeleton variant="rounded" height={160} />
      <Skeleton variant="text" width="70%" />
      <Skeleton variant="text" lines={2} lastLineWidth="50%" />
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 4 }}>
        <Skeleton variant="circular" width={32} height={32} />
        <Skeleton variant="text" width={100} />
      </div>
    </div>
  ),
};

export const ProfileSkeleton = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
      <Skeleton variant="circular" width={56} height={56} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
        <Skeleton variant="text" width="40%" height={18} />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" lines={3} />
      </div>
    </div>
  ),
};

export const ListSkeleton = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 320 }}>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Skeleton variant="circular" width={40} height={40} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
            <Skeleton variant="text" width="70%" />
            <Skeleton variant="text" width="45%" />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const WaveCard = {
  render: () => (
    <div style={{ width: 300, padding: 16, border: "1px solid #e5e7eb", borderRadius: 12, display: "flex", flexDirection: "column", gap: 12 }}>
      <Skeleton variant="rounded" height={160} animation="wave" />
      <Skeleton variant="text" width="70%" animation="wave" />
      <Skeleton variant="text" lines={2} lastLineWidth="50%" animation="wave" />
    </div>
  ),
};
