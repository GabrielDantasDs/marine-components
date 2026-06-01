import DatePicker from ".";

export default {
  title: "MyComponents/DatePicker",
  component: DatePicker,
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
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
  decorators: [
    (Story: any) => <div style={{ width: "300px" }}><Story /></div>,
  ],
};

export const Default = {
  args: {
    label: "Date",
    placeholder: "Select a date",
  },
};

export const WithDefaultValue = {
  args: {
    label: "Birthday",
    defaultValue: new Date(1995, 5, 15),
  },
};

export const WithMinMax = {
  args: {
    label: "Appointment",
    helperText: "Select a date within this month",
    minDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    maxDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
  },
};

export const WithError = {
  args: {
    label: "Due date",
    error: "Please select a valid date",
  },
};

export const Disabled = {
  args: {
    label: "Date",
    disabled: true,
    defaultValue: new Date(),
  },
};

export const Shrink = {
  args: {
    label: "Start date",
    shrink: "shrink",
  },
};

export const ShrinkAndHide = {
  args: {
    label: "End date",
    shrink: "shrinkAndHide",
  },
};

export const Rounded = {
  args: {
    label: "Event date",
    radius: "rounded",
  },
};

export const InputMode = {
  args: {
    label: "Date",
    mode: "input",
    helperText: "Type a date or click the calendar icon",
  },
};

export const InputModeShrink = {
  args: {
    label: "Birth date",
    mode: "input",
    shrink: "shrink",
  },
};
