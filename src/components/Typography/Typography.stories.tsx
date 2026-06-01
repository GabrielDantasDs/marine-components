import Typography from ".";

export default {
  title: "MyComponents/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "body1", "body2", "caption", "overline", "label"],
    },
    weight: {
      control: { type: "select" },
      options: ["light", "regular", "medium", "semibold", "bold"],
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "muted", "inherit"],
    },
    truncate: { control: "boolean" },
  },
};

export const Heading1 = {
  args: {
    variant: "h1",
    children: "Heading 1",
  },
};

export const Heading2 = {
  args: {
    variant: "h2",
    children: "Heading 2",
  },
};

export const Heading3 = {
  args: {
    variant: "h3",
    children: "Heading 3",
  },
};

export const Heading4 = {
  args: {
    variant: "h4",
    children: "Heading 4",
  },
};

export const Body1 = {
  args: {
    variant: "body1",
    children: "Body 1 — the default text style for paragraphs and main content. Optimized for readability with comfortable line-height.",
  },
};

export const Body2 = {
  args: {
    variant: "body2",
    children: "Body 2 — smaller body text for secondary content, descriptions, and supporting information.",
  },
};

export const Caption = {
  args: {
    variant: "caption",
    children: "Caption — used for timestamps, metadata, and small annotations.",
  },
};

export const Overline = {
  args: {
    variant: "overline",
    children: "Overline text",
  },
};

export const Label = {
  args: {
    variant: "label",
    children: "Form Label",
  },
};

export const Muted = {
  args: {
    variant: "body1",
    color: "muted",
    children: "Muted text for de-emphasized content.",
  },
};

export const Truncated = {
  args: {
    variant: "body1",
    truncate: true,
    children: "This is a very long text that will be truncated with an ellipsis when it overflows its container width boundary.",
  },
  decorators: [
    (Story: any) => <div style={{ maxWidth: "300px" }}><Story /></div>,
  ],
};

export const Centered = {
  args: {
    variant: "h2",
    align: "center",
    children: "Centered Heading",
  },
};

export const LightWeight = {
  args: {
    variant: "h1",
    weight: "light",
    children: "Light Heading",
  },
};
