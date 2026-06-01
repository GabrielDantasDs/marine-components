import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import Pagination from "./index"
import React from "react"

describe("Pagination component", () => {
  it("renders page buttons", () => {
    const { getByLabelText } = render(<Pagination totalPages={5} defaultPage={1} />)
    expect(getByLabelText("Page 1")).toBeInTheDocument()
    expect(getByLabelText("Page 5")).toBeInTheDocument()
  })

  it("marks current page with aria-current", () => {
    const { getByLabelText } = render(<Pagination totalPages={5} defaultPage={3} />)
    expect(getByLabelText("Page 3")).toHaveAttribute("aria-current", "page")
  })

  it("calls onChange on page click", () => {
    const onChange = jest.fn()
    const { getByLabelText } = render(
      <Pagination totalPages={5} defaultPage={1} onChange={onChange} />
    )
    fireEvent.click(getByLabelText("Page 2"))
    expect(onChange).toHaveBeenCalledWith(2)
  })

  it("navigates with previous/next arrows", () => {
    const onChange = jest.fn()
    const { getByLabelText } = render(
      <Pagination totalPages={5} defaultPage={3} onChange={onChange} />
    )
    fireEvent.click(getByLabelText("Previous page"))
    expect(onChange).toHaveBeenCalledWith(2)

    fireEvent.click(getByLabelText("Next page"))
    // After prev click, internal state is 2, next goes to 3
    expect(onChange).toHaveBeenCalledWith(3)
  })

  it("disables previous on first page", () => {
    const { getByLabelText } = render(<Pagination totalPages={5} defaultPage={1} />)
    expect(getByLabelText("Previous page")).toBeDisabled()
  })

  it("disables next on last page", () => {
    const { getByLabelText } = render(<Pagination totalPages={5} defaultPage={5} />)
    expect(getByLabelText("Next page")).toBeDisabled()
  })

  it("shows ellipsis for many pages", () => {
    const { container } = render(<Pagination totalPages={20} defaultPage={10} />)
    const ellipses = container.querySelectorAll("button")
    const ellipsisButtons = Array.from(ellipses).filter((b) => b.textContent === "…")
    expect(ellipsisButtons.length).toBe(2)
  })

  it("shows first/last buttons when enabled", () => {
    const { getByLabelText } = render(
      <Pagination totalPages={10} defaultPage={5} showFirstLast />
    )
    expect(getByLabelText("First page")).toBeInTheDocument()
    expect(getByLabelText("Last page")).toBeInTheDocument()
  })

  it("first page button navigates to page 1", () => {
    const onChange = jest.fn()
    const { getByLabelText } = render(
      <Pagination totalPages={10} defaultPage={5} showFirstLast onChange={onChange} />
    )
    fireEvent.click(getByLabelText("First page"))
    expect(onChange).toHaveBeenCalledWith(1)
  })

  it("disables all buttons when disabled", () => {
    const { getByLabelText } = render(
      <Pagination totalPages={5} defaultPage={3} disabled />
    )
    expect(getByLabelText("Page 1")).toBeDisabled()
    expect(getByLabelText("Previous page")).toBeDisabled()
    expect(getByLabelText("Next page")).toBeDisabled()
  })
})
