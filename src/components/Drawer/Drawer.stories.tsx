import React, { useState } from "react";
import Drawer from ".";

export default {
  title: "MyComponents/Drawer",
  component: Drawer,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    placement: { control: { type: "select" }, options: ["left", "right", "top", "bottom"] },
    size: { control: { type: "select" }, options: ["sm", "md", "lg", "full"] },
    closeOnOverlay: { control: "boolean" },
    closeOnEsc: { control: "boolean" },
    showCloseButton: { control: "boolean" },
  },
};

const SampleContent = () => (
  <div style={{ fontFamily: "Lexend, sans-serif", fontSize: "0.88rem", color: "#444", lineHeight: 1.7 }}>
    <p>This is the drawer body content. You can place any React elements here — forms, lists, navigation menus, settings panels, etc.</p>
    <p>The drawer supports scrollable content when it overflows.</p>
    <p style={{ marginTop: 16, padding: 12, background: "#f5f5f5", borderRadius: 8 }}>
      Tip: Try resizing the window or changing the <code>size</code> prop.
    </p>
  </div>
);

const FooterButtons = ({ onClose }: { onClose: () => void }) => (
  <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
    <button
      onClick={onClose}
      style={{ fontFamily: "Lexend, sans-serif", padding: "8px 16px", borderRadius: 8, border: "1px solid #d0d0d0", background: "#fff", cursor: "pointer", fontSize: "0.85rem" }}
    >
      Cancel
    </button>
    <button
      onClick={onClose}
      style={{ fontFamily: "Lexend, sans-serif", padding: "8px 16px", borderRadius: 8, border: "none", background: "#4a90d9", color: "#fff", cursor: "pointer", fontSize: "0.85rem" }}
    >
      Save
    </button>
  </div>
);

function DrawerDemo(props: any) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{ fontFamily: "Lexend, sans-serif", padding: "10px 20px", borderRadius: 8, border: "1px solid #d0d0d0", background: "#fff", cursor: "pointer", fontSize: "0.88rem" }}
      >
        Open Drawer
      </button>
      <Drawer {...props} open={open} onClose={() => setOpen(false)}>
        <SampleContent />
      </Drawer>
    </>
  );
}

export const Default = {
  render: (args: any) => <DrawerDemo {...args} title="Drawer" subtitle="A simple side panel" />,
};

export const LeftPlacement = {
  render: () => <DrawerDemo placement="left" title="Left Drawer" />,
};

export const TopPlacement = {
  render: () => <DrawerDemo placement="top" title="Top Drawer" size="sm" />,
};

export const BottomPlacement = {
  render: () => <DrawerDemo placement="bottom" title="Bottom Drawer" size="sm" />,
};

export const Sizes = {
  render: () => {
    const [open, setOpen] = useState<string | null>(null);
    return (
      <div style={{ display: "flex", gap: 8 }}>
        {(["sm", "md", "lg", "full"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setOpen(s)}
            style={{ fontFamily: "Lexend, sans-serif", padding: "8px 16px", borderRadius: 8, border: "1px solid #d0d0d0", background: "#fff", cursor: "pointer", fontSize: "0.85rem" }}
          >
            {s.toUpperCase()}
          </button>
        ))}
        {open && (
          <Drawer open onClose={() => setOpen(null)} size={open as any} title={`Size: ${open}`}>
            <SampleContent />
          </Drawer>
        )}
      </div>
    );
  },
};

export const WithFooter = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          style={{ fontFamily: "Lexend, sans-serif", padding: "10px 20px", borderRadius: 8, border: "1px solid #d0d0d0", background: "#fff", cursor: "pointer", fontSize: "0.88rem" }}
        >
          Open with Footer
        </button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title="Settings"
          subtitle="Update your preferences"
          footer={<FooterButtons onClose={() => setOpen(false)} />}
        >
          <SampleContent />
        </Drawer>
      </>
    );
  },
};

export const NoHeader = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          style={{ fontFamily: "Lexend, sans-serif", padding: "10px 20px", borderRadius: 8, border: "1px solid #d0d0d0", background: "#fff", cursor: "pointer", fontSize: "0.88rem" }}
        >
          Open (no header)
        </button>
        <Drawer open={open} onClose={() => setOpen(false)} showCloseButton={false}>
          <SampleContent />
        </Drawer>
      </>
    );
  },
};

export const LongContent = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          style={{ fontFamily: "Lexend, sans-serif", padding: "10px 20px", borderRadius: 8, border: "1px solid #d0d0d0", background: "#fff", cursor: "pointer", fontSize: "0.88rem" }}
        >
          Open (scrollable)
        </button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Scrollable Content">
          <div style={{ fontFamily: "Lexend, sans-serif", fontSize: "0.88rem", color: "#444", lineHeight: 1.7 }}>
            {Array.from({ length: 20 }, (_, i) => (
              <p key={i}>Paragraph {i + 1} — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            ))}
          </div>
        </Drawer>
      </>
    );
  },
};
