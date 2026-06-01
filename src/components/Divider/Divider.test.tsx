import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Divider from "./index"
import React from "react"

describe("Divider component", () => {
  it("renders horizontal separator by default", () => {
    const { getByRole } = render(<Divider />)
    expect(getByRole("separator")).toBeInTheDocument()
  })

  it("renders text content", () => {
    const { getByText } = render(<Divider>OR</Divider>)
    expect(getByText("OR")).toBeInTheDocument()
  })

  it("renders vertical orientation", () => {
    const { getByRole } = render(<Divider orientation="vertical" />)
    expect(getByRole("separator")).toHaveAttribute("aria-orientation", "vertical")
  })

  it("does not have aria-orientation on horizontal (default)", () => {
    const { getByRole } = render(<Divider />)
    expect(getByRole("separator")).not.toHaveAttribute("aria-orientation")
  })

  it("renders two lines when text is present", () => {
    const { container } = render(<Divider>Section</Divider>)
    const lines = container.querySelectorAll("[role='separator'] > span")
    // 2 lines + 1 text label = 3 spans
    expect(lines.length).toBe(3)
  })

  it("renders one line when no text", () => {
    const { container } = render(<Divider />)
    const lines = container.querySelectorAll("[role='separator'] > span")
    expect(lines.length).toBe(1)
  })
})
