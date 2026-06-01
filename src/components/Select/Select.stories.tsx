import { useState } from "react";
import Select from ".";
import type { SelectOption } from "./types";

export default {
  title: "MyComponents/Select",
  component: Select,
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
    multiple: { control: "boolean" },
    searchable: { control: "boolean" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
  decorators: [
    (Story: any) => <div style={{ width: "360px" }}><Story /></div>,
  ],
};

const fruits: SelectOption[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Grape", value: "grape" },
  { label: "Mango", value: "mango" },
  { label: "Orange", value: "orange" },
  { label: "Strawberry", value: "strawberry" },
];

export const Single = {
  args: {
    label: "Fruit",
    options: fruits,
    placeholder: "Pick a fruit",
  },
};

export const Multiple = {
  args: {
    label: "Fruits",
    options: fruits,
    multiple: true,
    placeholder: "Pick fruits",
  },
};

export const Searchable = {
  args: {
    label: "Fruit",
    options: fruits,
    searchable: true,
    placeholder: "Search fruits...",
  },
};

export const MultipleSearchable = {
  args: {
    label: "Fruits",
    options: fruits,
    multiple: true,
    searchable: true,
    placeholder: "Search and pick...",
  },
};

export const WithError = {
  args: {
    label: "Category",
    options: fruits,
    error: "Please select a category",
  },
};

export const Disabled = {
  args: {
    label: "Fruit",
    options: fruits,
    disabled: true,
    defaultValue: "apple",
  },
};

export const Shrink = {
  args: {
    label: "Fruit",
    options: fruits,
    shrink: "shrink",
  },
};

export const ShrinkAndHide = {
  args: {
    label: "Fruit",
    options: fruits,
    shrink: "shrinkAndHide",
  },
};

export const WithStartIcon = {
  args: {
    label: "Category",
    options: fruits,
    startIcon: "🏷",
  },
};

const DynamicOptionsRender = () => {
  const [opts, setOpts] = useState<SelectOption[]>([
    { label: "Design", value: "design" },
    { label: "Engineering", value: "engineering" },
    { label: "Marketing", value: "marketing" },
  ]);

  return (
    <Select
      label="Department"
      options={opts}
      multiple
      searchable
      placeholder="Select departments..."
      onAddOption={(label) => {
        setOpts((prev) => [...prev, { label, value: label.toLowerCase().replace(/\s+/g, "-") }])
      }}
      onEditOption={(option, newLabel) => {
        setOpts((prev) => prev.map((o) =>
          o.value === option.value ? { ...o, label: newLabel } : o
        ))
      }}
      onDeleteOption={(option) => {
        setOpts((prev) => prev.filter((o) => o.value !== option.value))
      }}
    />
  );
};

export const DynamicOptions = {
  render: () => <DynamicOptionsRender />,
};
