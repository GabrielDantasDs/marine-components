import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import Navbar from "./index"
import React from "react"

describe("Navbar component", () => {
  it("renders title", () => {
    const { getByText } = render(<Navbar title="My App" />);
    expect(getByText("My App")).toBeInTheDocument();
  });

  it("renders nav items", () => {
    const { getByText } = render(
      <Navbar>
        <Navbar.Item>Home</Navbar.Item>
        <Navbar.Item>About</Navbar.Item>
      </Navbar>
    );
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
  });

  it("renders logo node", () => {
    const { getByTestId } = render(
      <Navbar logo={<span data-testid="logo">L</span>} />
    );
    expect(getByTestId("logo")).toBeInTheDocument();
  });

  it("renders end content", () => {
    const { getByText } = render(
      <Navbar endContent={<button>Login</button>} />
    );
    expect(getByText("Login")).toBeInTheDocument();
  });

  it("fires onClick on nav item", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Navbar>
        <Navbar.Item onClick={handleClick}>Click me</Navbar.Item>
      </Navbar>
    );
    fireEvent.click(getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders active state", () => {
    const { getByText } = render(
      <Navbar>
        <Navbar.Item active>Active</Navbar.Item>
      </Navbar>
    );
    expect(getByText("Active")).toBeInTheDocument();
  });
});
