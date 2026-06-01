import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import CardList from "./index"
import React from "react"

describe("CardList component", () => {
  it("renders children", () => {
    const { getByText } = render(
      <CardList>
        <div>Item 1</div>
        <div>Item 2</div>
      </CardList>
    );
    expect(getByText("Item 1")).toBeInTheDocument();
    expect(getByText("Item 2")).toBeInTheDocument();
  });

  it("renders header when provided", () => {
    const { getByText } = render(
      <CardList header="My Header">
        <div>Item</div>
      </CardList>
    );
    expect(getByText("My Header")).toBeInTheDocument();
  });

  it("renders footer when provided", () => {
    const { getByText } = render(
      <CardList footer="My Footer">
        <div>Item</div>
      </CardList>
    );
    expect(getByText("My Footer")).toBeInTheDocument();
  });

  it("does not render header or footer when not provided", () => {
    const { container } = render(
      <CardList>
        <div>Item</div>
      </CardList>
    );
    expect(container.querySelectorAll("[class]")).toHaveLength(2);
  });
});
