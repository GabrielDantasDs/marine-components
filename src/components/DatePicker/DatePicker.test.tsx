import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import DatePicker from "./index"
import React from "react"

describe("DatePicker component", () => {
  it("renders with label", () => {
    const { getByText } = render(<DatePicker label="Date" />);
    expect(getByText("Date")).toBeInTheDocument();
  });

  it("shows placeholder when no value", () => {
    const { getByText } = render(<DatePicker placeholder="Pick date" />);
    expect(getByText("Pick date")).toBeInTheDocument();
  });

  it("displays default value formatted", () => {
    const { getByText } = render(
      <DatePicker defaultValue={new Date(2024, 0, 15)} />
    );
    expect(getByText("01/15/2024")).toBeInTheDocument();
  });

  it("opens calendar on click", () => {
    const { container, getByText } = render(<DatePicker label="Date" />);
    fireEvent.click(container.querySelector("[tabindex]")!);
    expect(getByText("Su")).toBeInTheDocument();
  });

  it("selects a day", () => {
    const handleChange = jest.fn();
    const { container, getByText } = render(
      <DatePicker onChange={handleChange} />
    );
    fireEvent.click(container.querySelector("[tabindex]")!);
    fireEvent.click(getByText("15"));
    expect(handleChange).toHaveBeenCalledTimes(1);
    const selected = handleChange.mock.calls[0][0] as Date;
    expect(selected.getDate()).toBe(15);
  });

  it("renders error text", () => {
    const { getByText } = render(<DatePicker error="Invalid" />);
    expect(getByText("Invalid")).toBeInTheDocument();
  });
});
