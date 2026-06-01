import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import Checkbox from "./index"
import React from "react"

describe("Checkbox component", () => {
  it("renders label", () => {
    const { getByText } = render(<Checkbox label="Check me" />);
    expect(getByText("Check me")).toBeInTheDocument();
  });

  it("toggles on click", () => {
    const handleChange = jest.fn();
    const { container } = render(<Checkbox label="Toggle" onChange={handleChange} />);
    // Click the Box span (first span inside the label)
    const box = container.querySelector("label > span")!;
    fireEvent.click(box);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("does not toggle when disabled", () => {
    const handleChange = jest.fn();
    const { container } = render(<Checkbox label="Disabled" disabled onChange={handleChange} />);
    fireEvent.click(container.querySelector("label")!);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("renders checked state visually", () => {
    const { container } = render(<Checkbox defaultChecked />);
    // The Box span gets a checked background — verify SVG check icon renders
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
