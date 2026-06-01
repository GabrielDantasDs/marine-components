import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import Button from "./index"
import React from "react"

describe("Button component", () => {
  it("renders children text", () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button disabled onClick={handleClick}>Click</Button>);
    fireEvent.click(getByText("Click"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders as disabled", () => {
    const { getByRole } = render(<Button disabled>Disabled</Button>);
    expect(getByRole("button")).toBeDisabled();
  });
});
