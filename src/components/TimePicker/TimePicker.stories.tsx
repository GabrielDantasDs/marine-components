import TimePicker from ".";

export default {
  title: "MyComponents/TimePicker",
  component: TimePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    radius: {
      control: { type: "select" },
      options: ["regular", "rounded"],
    },
    shrink: {
      control: { type: "select" },
      options: ["none", "shrink", "shrinkAndHide"],
    },
    format: {
      control: { type: "select" },
      options: ["12h", "24h"],
    },
    minuteStep: {
      control: { type: "number" },
    },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
  decorators: [
    (Story: any) => <div style={{ width: "300px" }}><Story /></div>,
  ],
};

export const Default12h = {
  args: {
    label: "Time",
    format: "12h",
  },
};

export const Default24h = {
  args: {
    label: "Time",
    format: "24h",
  },
};

export const WithDefaultValue = {
  args: {
    label: "Meeting time",
    defaultValue: { hours: 14, minutes: 30 },
    format: "12h",
  },
};

export const MinuteStep1 = {
  args: {
    label: "Precise time",
    format: "24h",
    minuteStep: 1,
  },
};

export const MinuteStep15 = {
  args: {
    label: "Slot",
    format: "12h",
    minuteStep: 15,
  },
};

export const WithError = {
  args: {
    label: "Start time",
    error: "Please select a valid time",
  },
};

export const Disabled = {
  args: {
    label: "Time",
    disabled: true,
    defaultValue: { hours: 9, minutes: 0 },
  },
};

export const Shrink = {
  args: {
    label: "Check-in",
    shrink: "shrink",
  },
};

export const Rounded = {
  args: {
    label: "Alarm",
    radius: "rounded",
    format: "24h",
  },
};

export const InputMode12h = {
  args: {
    label: "Time",
    mode: "input",
    format: "12h",
    helperText: "Type time or click the clock icon",
  },
};

export const InputMode24h = {
  args: {
    label: "Time",
    mode: "input",
    format: "24h",
  },
};
