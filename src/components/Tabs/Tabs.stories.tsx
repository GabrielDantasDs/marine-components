import Tabs from ".";

export default {
  title: "MyComponents/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["underline", "filled", "outlined"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    fullWidth: { control: "boolean" },
  },
  decorators: [
    (Story: any) => <div style={{ width: "500px" }}><Story /></div>,
  ],
};

export const Underline = {
  args: {
    defaultValue: "tab1",
    children: [
      <Tabs.Tab key="t1" value="tab1" label="Overview" />,
      <Tabs.Tab key="t2" value="tab2" label="Features" />,
      <Tabs.Tab key="t3" value="tab3" label="Pricing" />,
      <Tabs.Panel key="p1" value="tab1">Overview content goes here.</Tabs.Panel>,
      <Tabs.Panel key="p2" value="tab2">Features content goes here.</Tabs.Panel>,
      <Tabs.Panel key="p3" value="tab3">Pricing content goes here.</Tabs.Panel>,
    ],
  },
};

export const Filled = {
  args: {
    variant: "filled",
    defaultValue: "tab1",
    children: [
      <Tabs.Tab key="t1" value="tab1" label="All" />,
      <Tabs.Tab key="t2" value="tab2" label="Active" />,
      <Tabs.Tab key="t3" value="tab3" label="Archived" />,
      <Tabs.Panel key="p1" value="tab1">Showing all items.</Tabs.Panel>,
      <Tabs.Panel key="p2" value="tab2">Showing active items only.</Tabs.Panel>,
      <Tabs.Panel key="p3" value="tab3">Showing archived items.</Tabs.Panel>,
    ],
  },
};

export const Outlined = {
  args: {
    variant: "outlined",
    defaultValue: "tab1",
    children: [
      <Tabs.Tab key="t1" value="tab1" label="Profile" />,
      <Tabs.Tab key="t2" value="tab2" label="Settings" />,
      <Tabs.Tab key="t3" value="tab3" label="Billing" />,
      <Tabs.Panel key="p1" value="tab1">Edit your profile information.</Tabs.Panel>,
      <Tabs.Panel key="p2" value="tab2">Manage your account settings.</Tabs.Panel>,
      <Tabs.Panel key="p3" value="tab3">View billing history.</Tabs.Panel>,
    ],
  },
};

export const WithIcons = {
  args: {
    defaultValue: "tab1",
    children: [
      <Tabs.Tab key="t1" value="tab1" label="Home" icon="🏠" />,
      <Tabs.Tab key="t2" value="tab2" label="Messages" icon="💬" />,
      <Tabs.Tab key="t3" value="tab3" label="Settings" icon="⚙" />,
      <Tabs.Panel key="p1" value="tab1">Welcome home.</Tabs.Panel>,
      <Tabs.Panel key="p2" value="tab2">Your messages.</Tabs.Panel>,
      <Tabs.Panel key="p3" value="tab3">Account settings.</Tabs.Panel>,
    ],
  },
};

export const FullWidth = {
  args: {
    variant: "filled",
    fullWidth: true,
    defaultValue: "tab1",
    children: [
      <Tabs.Tab key="t1" value="tab1" label="Tab 1" />,
      <Tabs.Tab key="t2" value="tab2" label="Tab 2" />,
      <Tabs.Tab key="t3" value="tab3" label="Tab 3" />,
      <Tabs.Panel key="p1" value="tab1">Full width tab 1.</Tabs.Panel>,
      <Tabs.Panel key="p2" value="tab2">Full width tab 2.</Tabs.Panel>,
      <Tabs.Panel key="p3" value="tab3">Full width tab 3.</Tabs.Panel>,
    ],
  },
};

export const WithDisabled = {
  args: {
    defaultValue: "tab1",
    children: [
      <Tabs.Tab key="t1" value="tab1" label="Available" />,
      <Tabs.Tab key="t2" value="tab2" label="Disabled" disabled />,
      <Tabs.Tab key="t3" value="tab3" label="Also Available" />,
      <Tabs.Panel key="p1" value="tab1">This tab works.</Tabs.Panel>,
      <Tabs.Panel key="p3" value="tab3">This one too.</Tabs.Panel>,
    ],
  },
};

export const Small = {
  args: {
    size: "sm",
    defaultValue: "tab1",
    children: [
      <Tabs.Tab key="t1" value="tab1" label="Day" />,
      <Tabs.Tab key="t2" value="tab2" label="Week" />,
      <Tabs.Tab key="t3" value="tab3" label="Month" />,
      <Tabs.Panel key="p1" value="tab1">Daily view.</Tabs.Panel>,
      <Tabs.Panel key="p2" value="tab2">Weekly view.</Tabs.Panel>,
      <Tabs.Panel key="p3" value="tab3">Monthly view.</Tabs.Panel>,
    ],
  },
};
