import Page from ".";

export default {
  title: "MyComponents/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "elevated", "outlined"],
    },
    padding: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
    },
    fullHeight: { control: "boolean" },
    maxWidth: { control: "text" },
  },
};

export const Default = {
  args: {
    title: "Welcome",
    subtitle: "This is a simple page layout",
    children: "Page content goes here.",
    centered: false,
    fullHeight: false
  },
};

export const Elevated = {
  args: {
    title: "Elevated Page",
    subtitle: "With a subtle shadow",
    variant: "elevated",
    children: "This variant adds a tiny box-shadow for depth.",
  },
};

export const Outlined = {
  args: {
    title: "Outlined Page",
    variant: "outlined",
    children: "This variant uses a light border instead of shadow.",
  },
};

export const NoHeader = {
  args: {
    children: "A page without title or subtitle — just content.",
    variant: "elevated",
  },
};

export const FullHeight = {
  args: {
    title: "Full Height",
    subtitle: "Takes the full viewport height",
    fullHeight: true,
    variant: "default",
    children: "Content stretches vertically.",
  },
};
