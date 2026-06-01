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
    const { container } = render(<Checkbox onChange={handleChange} />);
    fireEvent.click(container.querySelector("input")!);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("does not toggle when disabled", () => {
    const handleChange = jest.fn();
    const { container } = render(<Checkbox disabled onChange={handleChange} />);
    fireEvent.click(container.querySelector("input")!);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("renders checked state", () => {
    const { container } = render(<Checkbox defaultChecked />);
    expect(container.querySelector("input")).toBeChecked();
  });
});
