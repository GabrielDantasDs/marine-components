import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import TimePicker from "./index"
import React from "react"

describe("TimePicker component", () => {
  it("renders with label", () => {
    const { getByText } = render(<TimePicker label="Time" />);
    expect(getByText("Time")).toBeInTheDocument();
  });

  it("shows placeholder when no value", () => {
    const { getByText } = render(<TimePicker placeholder="Pick time" />);
    expect(getByText("Pick time")).toBeInTheDocument();
  });

  it("displays default value in 12h format", () => {
    const { getByText } = render(
      <TimePicker defaultValue={{ hours: 14, minutes: 30 }} format="12h" />
    );
    expect(getByText("2:30 PM")).toBeInTheDocument();
  });

  it("displays default value in 24h format", () => {
    const { getByText } = render(
      <TimePicker defaultValue={{ hours: 9, minutes: 5 }} format="24h" />
    );
    expect(getByText("09:05")).toBeInTheDocument();
  });

  it("opens dropdown on click", () => {
    const { container, getByText } = render(<TimePicker />);
    fireEvent.click(container.querySelector("[tabindex]")!);
    expect(getByText("Hr")).toBeInTheDocument();
    expect(getByText("Min")).toBeInTheDocument();
  });

  it("calls onChange when hour is selected", () => {
    const handleChange = jest.fn();
    const { container, getAllByText } = render(
      <TimePicker format="24h" onChange={handleChange} />
    );
    fireEvent.click(container.querySelector("[tabindex]")!);
    const buttons = getAllByText("10");
    fireEvent.click(buttons[0]!);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.calls[0][0].hours).toBe(10);
  });

  it("renders error text", () => {
    const { getByText } = render(<TimePicker error="Required" />);
    expect(getByText("Required")).toBeInTheDocument();
  });
});
