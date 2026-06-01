import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Typography from "./index"
import React from "react"

describe("Typography component", () => {
  it("renders children text", () => {
    const { getByText } = render(
      <Typography>Hello world</Typography>
    );
    expect(getByText("Hello world")).toBeInTheDocument();
  });

  it("renders correct semantic element for headings", () => {
    const { container } = render(
      <Typography variant="h2">Title</Typography>
    );
    expect(container.querySelector("h2")).toBeInTheDocument();
  });

  it("renders as paragraph for body variants", () => {
    const { container } = render(
      <Typography variant="body1">Paragraph</Typography>
    );
    expect(container.querySelector("p")).toBeInTheDocument();
  });

  it("renders as label element for label variant", () => {
    const { container } = render(
      <Typography variant="label">Field name</Typography>
    );
    expect(container.querySelector("label")).toBeInTheDocument();
  });

  it("allows custom element via as prop", () => {
    const { container } = render(
      <Typography variant="body1" as="div">Custom</Typography>
    );
    expect(container.querySelector("div")).toBeInTheDocument();
  });
});
