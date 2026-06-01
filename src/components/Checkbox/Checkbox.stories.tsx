import React, { useState } from "react";
import Checkbox from ".";

export default {
  title: "MyComponents/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    color: { control: { type: "select" }, options: ["primary", "success", "danger"] },
    disabled: { control: "boolean" },
    indeterminate: { control: "boolean" },
  },
};

export const Default = { args: { label: "Accept terms" } };
export const Checked = { args: { label: "Checked", defaultChecked: true } };
export const Success = { args: { label: "Completed", color: "success", defaultChecked: true } };
export const Danger = { args: { label: "Delete items", color: "danger", defaultChecked: true } };
export const Small = { args: { label: "Small", size: "sm" } };
export const Large = { args: { label: "Large", size: "lg" } };
export const Disabled = { args: { label: "Disabled", disabled: true } };

const items = ["Emails", "Push notifications", "SMS alerts"];

export const Indeterminate = {
  render: () => {
    const [checked, setChecked] = useState<boolean[]>([true, false, false]);
    const allChecked = checked.every(Boolean);
    const noneChecked = checked.every((v) => !v);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Checkbox
          label="Select all"
          checked={allChecked}
          indeterminate={!allChecked && !noneChecked}
          onChange={(next) => setChecked(checked.map(() => next))}
        />
        <div style={{ marginLeft: 24, display: "flex", flexDirection: "column", gap: 4 }}>
          {items.map((item, i) => (
            <Checkbox
              key={item}
              label={item}
              checked={checked[i]}
              onChange={(next) => {
                const copy = [...checked];
                copy[i] = next;
                setChecked(copy);
              }}
            />
          ))}
        </div>
      </div>
    );
  },
};
