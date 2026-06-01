import Button from ".";

export default {
  title: "MyComponents/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined", "text"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "warning", "danger", "success", "action", "secondaryAction"],
    },
    radius: {
      control: { type: "select" },
      options: ["regular", "rounded"],
    },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
};

export const Filled = {
  args: {
    children: "Filled",
    variant: "filled",
  },
};

export const Outlined = {
  args: {
    children: "Outlined",
    variant: "outlined",
  },
};

export const Text = {
  args: {
    children: "Text",
    variant: "text",
  },
};

export const Small = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Disabled = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const FullWidth = {
  args: {
    children: "Full Width",
    fullWidth: true,
  },
};

export const Primary = {
  args: {
    children: "Primary",
    color: "primary",
  },
};

export const Secondary = {
  args: {
    children: "Secondary",
    color: "secondary",
  },
};

export const Warning = {
  args: {
    children: "Warning",
    color: "warning",
  },
};

export const Danger = {
  args: {
    children: "Danger",
    color: "danger",
  },
};

export const Success = {
  args: {
    children: "Success",
    color: "success",
  },
};

export const Action = {
  args: {
    children: "Action",
    color: "action",
  },
};

export const SecondaryAction = {
  args: {
    children: "Secondary Action",
    color: "secondaryAction",
  },
};

export const Rounded = {
  args: {
    children: "Rounded",
    radius: "rounded",
  },
};

export const OutlinedRounded = {
  args: {
    children: "Outlined Rounded",
    variant: "outlined",
    radius: "rounded",
  },
};

export const WithStartIcon = {
  args: {
    children: "Send",
    startIcon: "✉",
  },
};

export const WithEndIcon = {
  args: {
    children: "Next",
    endIcon: "→",
  },
};

export const WithBothIcons = {
  args: {
    children: "Transfer",
    startIcon: "←",
    endIcon: "→",
  },
};
