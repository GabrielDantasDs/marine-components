import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import Select from "./index"
import React from "react"

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

describe("Select component", () => {
  it("renders with label", () => {
    const { getByText } = render(
      <Select label="Fruit" options={options} />
    );
    expect(getByText("Fruit")).toBeInTheDocument();
  });

  it("shows placeholder when no value", () => {
    const { getAllByText } = render(
      <Select options={options} placeholder="Pick one" />
    );
    const visible = getAllByText("Pick one").filter(
      (el) => el.getAttribute("aria-hidden") !== "true"
    );
    expect(visible.length).toBeGreaterThan(0);
  });

  it("opens dropdown on click", () => {
    const { getByRole, getByText } = render(
      <Select options={options} />
    );
    fireEvent.click(getByRole("combobox"));
    expect(getByText("Apple")).toBeInTheDocument();
    expect(getByText("Banana")).toBeInTheDocument();
  });

  it("selects a single option", () => {
    const handleChange = jest.fn();
    const { getByRole, getByText } = render(
      <Select options={options} onChange={handleChange} />
    );
    fireEvent.click(getByRole("combobox"));
    fireEvent.click(getByText("Banana"));
    expect(handleChange).toHaveBeenCalledWith("banana");
  });

  it("renders error text", () => {
    const { getByText } = render(
      <Select options={options} error="Required" />
    );
    expect(getByText("Required")).toBeInTheDocument();
  });

  it("renders helper text", () => {
    const { getByText } = render(
      <Select options={options} helperText="Pick one" />
    );
    expect(getByText("Pick one")).toBeInTheDocument();
  });

  it("renders disabled state", () => {
    const { getByRole } = render(
      <Select options={options} disabled />
    );
    expect(getByRole("combobox")).toHaveAttribute("tabindex", "-1");
  });
});
