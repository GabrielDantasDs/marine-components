import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import Accordion from "./index"
import React from "react"

describe("Accordion component", () => {
  it("renders item titles", () => {
    const { getByText } = render(
      <Accordion>
        <Accordion.Item title="First">Content 1</Accordion.Item>
        <Accordion.Item title="Second">Content 2</Accordion.Item>
      </Accordion>
    );
    expect(getByText("First")).toBeInTheDocument();
    expect(getByText("Second")).toBeInTheDocument();
  });

  it("expands item on click", () => {
    const { getByText } = render(
      <Accordion>
        <Accordion.Item title="Click me">Hidden content</Accordion.Item>
      </Accordion>
    );
    fireEvent.click(getByText("Click me"));
    expect(getByText("Hidden content")).toBeVisible();
  });

  it("collapses item on second click", () => {
    const { getByText } = render(
      <Accordion>
        <Accordion.Item title="Toggle">Content</Accordion.Item>
      </Accordion>
    );
    fireEvent.click(getByText("Toggle"));
    fireEvent.click(getByText("Toggle"));
    const content = getByText("Content");
    expect(content.parentElement).toHaveStyle("max-height: 0");
  });

  it("renders defaultOpen item as expanded", () => {
    const { getByText } = render(
      <Accordion>
        <Accordion.Item title="Open" defaultOpen>Visible</Accordion.Item>
      </Accordion>
    );
    expect(getByText("Visible")).toBeVisible();
  });

  it("renders icon", () => {
    const { getByText } = render(
      <Accordion>
        <Accordion.Item title="With Icon" icon="⭐">Content</Accordion.Item>
      </Accordion>
    );
    expect(getByText("⭐")).toBeInTheDocument();
  });

  it("only one item open at a time in single mode", () => {
    const { getByText } = render(
      <Accordion>
        <Accordion.Item title="A">Content A</Accordion.Item>
        <Accordion.Item title="B">Content B</Accordion.Item>
      </Accordion>
    );
    fireEvent.click(getByText("A"));
    fireEvent.click(getByText("B"));
    const contentA = getByText("Content A");
    expect(contentA.parentElement).toHaveStyle("max-height: 0");
  });
});
