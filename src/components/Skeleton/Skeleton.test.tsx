import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Skeleton from "./index"
import React from "react"

describe("Skeleton component", () => {
  it("renders with role=status", () => {
    const { getByRole } = render(<Skeleton />)
    expect(getByRole("status")).toBeInTheDocument()
  })

  it("renders aria-label Loading", () => {
    const { getByRole } = render(<Skeleton />)
    expect(getByRole("status")).toHaveAttribute("aria-label", "Loading")
  })

  it("renders single block for text variant", () => {
    const { container } = render(<Skeleton variant="text" />)
    const blocks = container.querySelectorAll("[role='status']")
    expect(blocks.length).toBe(1)
  })

  it("renders multiple lines when lines > 1", () => {
    const { container } = render(<Skeleton variant="text" lines={3} />)
    const wrapper = container.querySelector("[role='status']")!
    const blocks = wrapper.querySelectorAll("span")
    expect(blocks.length).toBe(3)
  })

  it("renders correct number of lines", () => {
    const { container } = render(<Skeleton variant="text" lines={5} />)
    const wrapper = container.querySelector("[role='status']")!
    expect(wrapper.children.length).toBe(5)
  })

  it("renders circular variant as a single block", () => {
    const { getByRole } = render(<Skeleton variant="circular" width={48} height={48} />)
    expect(getByRole("status")).toBeInTheDocument()
    expect(getByRole("status").tagName.toLowerCase()).toBe("span")
  })

  it("renders rectangular variant", () => {
    const { getByRole } = render(<Skeleton variant="rectangular" />)
    expect(getByRole("status")).toBeInTheDocument()
  })

  it("renders rounded variant", () => {
    const { getByRole } = render(<Skeleton variant="rounded" />)
    expect(getByRole("status")).toBeInTheDocument()
  })

  it("renders without animation when set to none", () => {
    const { getByRole } = render(<Skeleton animation="none" />)
    expect(getByRole("status")).toBeInTheDocument()
  })
})
