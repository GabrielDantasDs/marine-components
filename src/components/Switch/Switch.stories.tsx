import Switch from ".";

export default {
  title: "MyComponents/Switch",
  component: Switch,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    color: { control: { type: "select" }, options: ["primary", "success", "danger"] },
    disabled: { control: "boolean" },
  },
};

export const Default = { args: { label: "Notifications" } };
export const Checked = { args: { label: "Enabled", defaultChecked: true } };
export const Success = { args: { label: "Active", color: "success", defaultChecked: true } };
export const Danger = { args: { label: "Danger mode", color: "danger", defaultChecked: true } };
export const Small = { args: { label: "Small", size: "sm" } };
export const Large = { args: { label: "Large", size: "lg" } };
export const Disabled = { args: { label: "Disabled", disabled: true } };
export const DisabledChecked = { args: { label: "Locked on", disabled: true, defaultChecked: true } };
