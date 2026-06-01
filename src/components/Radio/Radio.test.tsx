import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import Radio from "./index"
import React from "react"

describe("Radio component", () => {
  it("renders labels", () => {
    const { getByText } = render(
      <Radio defaultValue="a">
        <Radio.Item value="a" label="A" />
        <Radio.Item value="b" label="B" />
      </Radio>
    );
    expect(getByText("A")).toBeInTheDocument();
    expect(getByText("B")).toBeInTheDocument();
  });

  it("selects on click", () => {
    const handleChange = jest.fn();
    const { getByText } = render(
      <Radio defaultValue="a" onChange={handleChange}>
        <Radio.Item value="a" label="A" />
        <Radio.Item value="b" label="B" />
      </Radio>
    );
    fireEvent.click(getByText("B"));
    expect(handleChange).toHaveBeenCalledWith("b");
  });

  it("does not select disabled item", () => {
    const handleChange = jest.fn();
    const { getByText } = render(
      <Radio defaultValue="a" onChange={handleChange}>
        <Radio.Item value="a" label="A" />
        <Radio.Item value="b" label="B" disabled />
      </Radio>
    );
    fireEvent.click(getByText("B"));
    expect(handleChange).not.toHaveBeenCalled();
  });
});
