import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import Input from "./index"
import React from "react"

describe("Input component", () => {
  it("renders with label", () => {
    const { getByText } = render(<Input label="Name" />);
    expect(getByText("Name")).toBeInTheDocument();
  });

  it("renders placeholder", () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" />
    );
    expect(getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("renders helper text", () => {
    const { getByText } = render(
      <Input helperText="Some help" />
    );
    expect(getByText("Some help")).toBeInTheDocument();
  });

  it("renders error text and hides helper", () => {
    const { getByText, queryByText } = render(
      <Input helperText="Help" error="Error!" />
    );
    expect(getByText("Error!")).toBeInTheDocument();
    expect(queryByText("Help")).not.toBeInTheDocument();
  });

  it("renders as textarea", () => {
    const { container } = render(<Input textarea />);
    expect(container.querySelector("textarea")).toBeInTheDocument();
  });

  it("formats CPF input", () => {
    const { container } = render(<Input format="cpf" />);
    const input = container.querySelector("input")!;
    fireEvent.change(input, { target: { value: "12345678901" } });
    expect(input.value).toBe("123.456.789-01");
  });

  it("formats phone BR input", () => {
    const { container } = render(<Input format="phone" country="BR" />);
    const input = container.querySelector("input")!;
    fireEvent.change(input, { target: { value: "11999887766" } });
    expect(input.value).toBe("(11) 99988-7766");
  });

  it("toggles password visibility", () => {
    const { container, getByRole } = render(<Input format="password" />);
    const input = container.querySelector("input")!;
    expect(input.type).toBe("password");
    fireEvent.click(getByRole("button", { name: /show password/i }));
    expect(input.type).toBe("text");
  });

  it("renders start and end icons", () => {
    const { getByText } = render(
      <Input startIcon="S" endIcon="E" />
    );
    expect(getByText("S")).toBeInTheDocument();
    expect(getByText("E")).toBeInTheDocument();
  });

  it("renders disabled state", () => {
    const { container } = render(<Input disabled />);
    expect(container.querySelector("input")).toBeDisabled();
  });
});
