import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Page from "./index";
import React from "react";

describe("Page component", () => {
  it("renders title and children", () => {
    const { getByText } = render(
      <Page title="Test Page">Content</Page>
    );

    expect(getByText("Test Page")).toBeInTheDocument();
    expect(getByText("Content")).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    const { getByText } = render(
      <Page title="Title" subtitle="A subtitle">Content</Page>
    );

    expect(getByText("A subtitle")).toBeInTheDocument();
  });

  it("does not render header when no title or subtitle", () => {
    const { queryByRole } = render(
      <Page>Content only</Page>
    );

    expect(queryByRole("banner")).not.toBeInTheDocument();
  });

  it("renders with elevated variant", () => {
    const { getByTestId } = render(
      <Page variant="elevated" title="Elevated">Content</Page>
    );

    const container = getByTestId("page-container");
    expect(container).toBeInTheDocument();
  });

  it("renders with outlined variant", () => {
    const { getByTestId } = render(
      <Page variant="outlined" title="Outlined">Content</Page>
    );

    const container = getByTestId("page-container");
    expect(container).toBeInTheDocument();
  });
});
