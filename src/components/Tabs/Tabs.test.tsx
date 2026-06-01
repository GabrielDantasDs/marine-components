import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import Tabs from "./index"
import React from "react"

describe("Tabs component", () => {
  it("renders tab labels", () => {
    const { getByText } = render(
      <Tabs defaultValue="a">
        <Tabs.Tab value="a" label="Tab A" />
        <Tabs.Tab value="b" label="Tab B" />
        <Tabs.Panel value="a">Content A</Tabs.Panel>
        <Tabs.Panel value="b">Content B</Tabs.Panel>
      </Tabs>
    );
    expect(getByText("Tab A")).toBeInTheDocument();
    expect(getByText("Tab B")).toBeInTheDocument();
  });

  it("shows default panel", () => {
    const { getByText, queryByText } = render(
      <Tabs defaultValue="a">
        <Tabs.Tab value="a" label="A" />
        <Tabs.Tab value="b" label="B" />
        <Tabs.Panel value="a">Content A</Tabs.Panel>
        <Tabs.Panel value="b">Content B</Tabs.Panel>
      </Tabs>
    );
    expect(getByText("Content A")).toBeInTheDocument();
    expect(queryByText("Content B")).not.toBeInTheDocument();
  });

  it("switches panel on tab click", () => {
    const { getByText, queryByText } = render(
      <Tabs defaultValue="a">
        <Tabs.Tab value="a" label="A" />
        <Tabs.Tab value="b" label="B" />
        <Tabs.Panel value="a">Content A</Tabs.Panel>
        <Tabs.Panel value="b">Content B</Tabs.Panel>
      </Tabs>
    );
    fireEvent.click(getByText("B"));
    expect(getByText("Content B")).toBeInTheDocument();
    expect(queryByText("Content A")).not.toBeInTheDocument();
  });

  it("calls onChange", () => {
    const handleChange = jest.fn();
    const { getByText } = render(
      <Tabs defaultValue="a" onChange={handleChange}>
        <Tabs.Tab value="a" label="A" />
        <Tabs.Tab value="b" label="B" />
        <Tabs.Panel value="a">A</Tabs.Panel>
        <Tabs.Panel value="b">B</Tabs.Panel>
      </Tabs>
    );
    fireEvent.click(getByText("B"));
    expect(handleChange).toHaveBeenCalledWith("b");
  });

  it("renders icon in tab", () => {
    const { getByText } = render(
      <Tabs defaultValue="a">
        <Tabs.Tab value="a" label="Home" icon="🏠" />
        <Tabs.Panel value="a">Home</Tabs.Panel>
      </Tabs>
    );
    expect(getByText("🏠")).toBeInTheDocument();
  });

  it("does not switch to disabled tab", () => {
    const { getByText, queryByText } = render(
      <Tabs defaultValue="a">
        <Tabs.Tab value="a" label="A" />
        <Tabs.Tab value="b" label="B" disabled />
        <Tabs.Panel value="a">Content A</Tabs.Panel>
        <Tabs.Panel value="b">Content B</Tabs.Panel>
      </Tabs>
    );
    fireEvent.click(getByText("B"));
    expect(getByText("Content A")).toBeInTheDocument();
    expect(queryByText("Content B")).not.toBeInTheDocument();
  });
});
