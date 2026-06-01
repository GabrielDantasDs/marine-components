import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import Switch from "./index"
import React from "react"

describe("Switch component", () => {
  it("renders label", () => {
    const { getByText } = render(<Switch label="Toggle" />);
    expect(getByText("Toggle")).toBeInTheDocument();
  });

  it("toggles on click", () => {
    const handleChange = jest.fn();
    const { container } = render(<Switch onChange={handleChange} />);
    fireEvent.click(container.querySelector("input")!);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("does not toggle when disabled", () => {
    const handleChange = jest.fn();
    const { container } = render(<Switch disabled onChange={handleChange} />);
    fireEvent.click(container.querySelector("input")!);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("renders checked state", () => {
    const { container } = render(<Switch defaultChecked />);
    expect(container.querySelector("input")).toBeChecked();
  });
});
