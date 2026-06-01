import Accordion from ".";

export default {
  title: "MyComponents/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "outlined", "separated"],
    },
    multiple: { control: "boolean" },
  },
  decorators: [
    (Story: any) => <div style={{ width: "450px" }}><Story /></div>,
  ],
};

export const Default = {
  args: {
    children: [
      <Accordion.Item key="1" title="What is Marine Components?">
        A React component library with a light, modern design inspired by Material UI.
      </Accordion.Item>,
      <Accordion.Item key="2" title="How do I install it?">
        Run npm install marine-components and import the components you need.
      </Accordion.Item>,
      <Accordion.Item key="3" title="Is it customizable?">
        Yes! Each component supports variants, sizes, and custom styling through styled-components.
      </Accordion.Item>,
    ],
  },
};

export const Outlined = {
  args: {
    variant: "outlined",
    children: [
      <Accordion.Item key="1" title="First Section" defaultOpen>
        This section starts open by default.
      </Accordion.Item>,
      <Accordion.Item key="2" title="Second Section">
        Click to expand this section.
      </Accordion.Item>,
      <Accordion.Item key="3" title="Third Section">
        Another expandable section.
      </Accordion.Item>,
    ],
  },
};

export const Separated = {
  args: {
    variant: "separated",
    children: [
      <Accordion.Item key="1" title="Billing" icon="💳">
        Manage your billing and payment methods.
      </Accordion.Item>,
      <Accordion.Item key="2" title="Notifications" icon="🔔">
        Configure your notification preferences.
      </Accordion.Item>,
      <Accordion.Item key="3" title="Privacy" icon="🔒">
        Review and update your privacy settings.
      </Accordion.Item>,
    ],
  },
};

export const Multiple = {
  args: {
    variant: "outlined",
    multiple: true,
    children: [
      <Accordion.Item key="1" title="Section A">
        Content A — multiple items can be open at once.
      </Accordion.Item>,
      <Accordion.Item key="2" title="Section B">
        Content B — try opening all of them.
      </Accordion.Item>,
      <Accordion.Item key="3" title="Section C">
        Content C — they stay open independently.
      </Accordion.Item>,
    ],
  },
};

export const WithDisabled = {
  args: {
    children: [
      <Accordion.Item key="1" title="Available">
        This section is available.
      </Accordion.Item>,
      <Accordion.Item key="2" title="Disabled Section" disabled>
        You cannot open this.
      </Accordion.Item>,
      <Accordion.Item key="3" title="Also Available">
        This one works too.
      </Accordion.Item>,
    ],
  },
};
