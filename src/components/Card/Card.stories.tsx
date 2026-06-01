import Card from ".";

export default {
  title: "MyComponents/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    radius: {
      control: { type: "select" },
      options: ["regular", "rounded"],
    },
    shadow: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
    },
    padding: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
    },
    outlined: { control: "boolean" },
  },
};

export const Default = {
  args: {
    title: "Card Title",
    subtitle: "A brief description",
    children: "This is the card content. It can contain any text or elements.",
  },
};

export const Rounded = {
  args: {
    title: "Rounded Card",
    radius: "rounded",
    shadow: "md",
    children: "A card with more border radius.",
  },
};

export const NoShadow = {
  args: {
    title: "Flat Card",
    shadow: "none",
    outlined: true,
    children: "No shadow, just a border.",
  },
};

export const LargeShadow = {
  args: {
    title: "Elevated Card",
    shadow: "lg",
    children: "This card has a more prominent shadow.",
  },
};

export const WithFooter = {
  args: {
    title: "Card with Footer",
    children: "Main content area.",
    footer: "Footer actions go here",
  },
};

export const NoHeader = {
  args: {
    shadow: "md",
    children: "A card without title — just content.",
  },
};

export const Outlined = {
  args: {
    title: "Outlined Card",
    outlined: true,
    shadow: "none",
    children: "Uses a subtle border instead of shadow.",
  },
};
