import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import Sidebar from "./index"
import React from "react"

describe("Sidebar component", () => {
  it("renders items", () => {
    const { getByText } = render(
      <Sidebar>
        <Sidebar.Item>Home</Sidebar.Item>
        <Sidebar.Item>About</Sidebar.Item>
      </Sidebar>
    );
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
  });

  it("renders header", () => {
    const { getByText } = render(
      <Sidebar header="My App">
        <Sidebar.Item>Item</Sidebar.Item>
      </Sidebar>
    );
    expect(getByText("My App")).toBeInTheDocument();
  });

  it("renders footer", () => {
    const { getByText } = render(
      <Sidebar footer="v1.0">
        <Sidebar.Item>Item</Sidebar.Item>
      </Sidebar>
    );
    expect(getByText("v1.0")).toBeInTheDocument();
  });

  it("renders icon in item", () => {
    const { getByText } = render(
      <Sidebar>
        <Sidebar.Item icon="🏠">Home</Sidebar.Item>
      </Sidebar>
    );
    expect(getByText("🏠")).toBeInTheDocument();
  });

  it("fires onClick on item", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Sidebar>
        <Sidebar.Item onClick={handleClick}>Click me</Sidebar.Item>
      </Sidebar>
    );
    fireEvent.click(getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders group with title", () => {
    const { getByText } = render(
      <Sidebar>
        <Sidebar.Group title="Section">
          <Sidebar.Item>Item</Sidebar.Item>
        </Sidebar.Group>
      </Sidebar>
    );
    expect(getByText("Section")).toBeInTheDocument();
  });

  it("renders divider", () => {
    const { container } = render(
      <Sidebar>
        <Sidebar.Item>A</Sidebar.Item>
        <Sidebar.Divider />
        <Sidebar.Item>B</Sidebar.Item>
      </Sidebar>
    );
    expect(container.querySelector("hr")).toBeInTheDocument();
  });

  it("does not fire onClick when disabled", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Sidebar>
        <Sidebar.Item disabled onClick={handleClick}>Disabled</Sidebar.Item>
      </Sidebar>
    );
    fireEvent.click(getByText("Disabled"));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
