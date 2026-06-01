import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Card from "./index"
import React from "react"

describe("Card component", () => {
  it("renders title and children", () => {
    const { getByText } = render(
      <Card title="My Card">Content here</Card>
    );
    expect(getByText("My Card")).toBeInTheDocument();
    expect(getByText("Content here")).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    const { getByText } = render(
      <Card title="Title" subtitle="Subtitle">Content</Card>
    );
    expect(getByText("Subtitle")).toBeInTheDocument();
  });

  it("renders footer when provided", () => {
    const { getByText } = render(
      <Card footer="Footer text">Content</Card>
    );
    expect(getByText("Footer text")).toBeInTheDocument();
  });

  it("does not render header when no title or subtitle", () => {
    const { queryByText } = render(
      <Card>Just content</Card>
    );
    expect(queryByText("Just content")).toBeInTheDocument();
  });
});
