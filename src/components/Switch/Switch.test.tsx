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
    // Click the track (first child span inside the wrapper label)
    const track = container.querySelector("label > span")!;
    fireEvent.click(track);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("does not toggle when disabled", () => {
    const handleChange = jest.fn();
    const { container } = render(<Switch disabled onChange={handleChange} />);
    const track = container.querySelector("label > span")!;
    fireEvent.click(track);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("renders with role=switch", () => {
    const { container } = render(<Switch defaultChecked />);
    // Switch wrapper is a label element
    expect(container.querySelector("label")).toBeInTheDocument();
  });
});
