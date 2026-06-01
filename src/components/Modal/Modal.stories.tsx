import { useState } from "react";
import Modal from ".";
import Button from "../Button";

const ModalWrapper = (args: any) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        {args.children}
      </Modal>
    </>
  );
};

export default {
  title: "MyComponents/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "fullscreen"],
    },
    radius: {
      control: { type: "select" },
      options: ["regular", "rounded"],
    },
    closeOnOverlay: { control: "boolean" },
    closeOnEsc: { control: "boolean" },
    showCloseButton: { control: "boolean" },
  },
  render: (args: any) => <ModalWrapper {...args} />,
};

export const Default = {
  args: {
    title: "Welcome",
    subtitle: "This is a basic modal dialog",
    children: "Here is some content inside the modal. You can put any components or text here.",
  },
};

export const WithFooter = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open with Footer</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm Action"
          subtitle="Are you sure you want to proceed?"
          icon="⚠️"
          footer={
            <>
              <Button variant="text" color="secondary" onClick={() => setOpen(false)}>Cancel</Button>
              <Button color="primary" onClick={() => setOpen(false)}>Confirm</Button>
            </>
          }
        >
          This action cannot be undone. Please make sure you have reviewed everything before confirming.
        </Modal>
      </>
    );
  },
};

export const Small = {
  args: {
    size: "sm",
    title: "Quick Note",
    children: "A compact modal for short messages or quick confirmations.",
  },
};

export const Large = {
  args: {
    size: "lg",
    title: "Detailed View",
    subtitle: "A larger modal for more complex content",
    children: "This modal has more space for content like forms, tables, or detailed information.",
  },
};

export const Fullscreen = {
  args: {
    size: "fullscreen",
    title: "Fullscreen",
    children: "Takes up the entire viewport minus a small margin.",
  },
};

export const Danger = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button color="danger" onClick={() => setOpen(true)}>Delete Item</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          size="sm"
          title="Delete Item"
          icon="🗑"
          footer={
            <>
              <Button variant="text" color="secondary" onClick={() => setOpen(false)}>Cancel</Button>
              <Button color="danger" onClick={() => setOpen(false)}>Delete</Button>
            </>
          }
        >
          Are you sure you want to delete this item? This action is permanent.
        </Modal>
      </>
    );
  },
};

export const Rounded = {
  args: {
    radius: "rounded",
    title: "Rounded Corners",
    children: "This modal uses the rounded radius variant.",
  },
};
