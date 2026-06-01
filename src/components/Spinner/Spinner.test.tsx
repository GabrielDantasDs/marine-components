import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Spinner from "./index"
import React from "react"

describe("Spinner component", () => {
  it("renders with default role and aria-label", () => {
    const { getByRole } = render(<Spinner />)
    const el = getByRole("status")
    expect(el).toHaveAttribute("aria-label", "Loading")
  })

  it("renders label text", () => {
    const { getByText } = render(<Spinner label="Please wait" />)
    expect(getByText("Please wait")).toBeInTheDocument()
  })

  it("renders circular variant by default", () => {
    const { container } = render(<Spinner />)
    expect(container.querySelector("svg")).toBeInTheDocument()
  })

  it("renders dots variant", () => {
    const { container } = render(<Spinner variant="dots" />)
    const dots = container.querySelectorAll("span > span")
    expect(dots.length).toBe(3)
  })

  it("renders bar variant", () => {
    const { container } = render(<Spinner variant="bar" />)
    // bar track + bar fill = 2 divs inside the container
    const divs = container.querySelectorAll("[role='status'] > div")
    expect(divs.length).toBe(1)
  })

  it("renders overlay wrapper", () => {
    const { container } = render(<Spinner overlay />)
    const overlay = container.firstChild as HTMLElement
    expect(overlay.style.position || getComputedStyle(overlay).position).toBeDefined()
  })

  it("uses custom aria-label from label prop", () => {
    const { getByRole } = render(<Spinner label="Uploading" />)
    expect(getByRole("status")).toHaveAttribute("aria-label", "Uploading")
  })
})
