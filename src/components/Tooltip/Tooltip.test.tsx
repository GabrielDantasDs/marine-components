import "@testing-library/jest-dom"
import { render, fireEvent, act } from "@testing-library/react"
import Tooltip from "./index"
import React from "react"

describe("Tooltip component", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })
  afterEach(() => {
    jest.useRealTimers()
  })

  it("shows tooltip on mouse enter after delay", () => {
    const { getByText, queryByRole } = render(
      <Tooltip content="Hello">
        <button>Hover</button>
      </Tooltip>
    )
    expect(queryByRole("tooltip")).not.toBeInTheDocument()

    fireEvent.mouseEnter(getByText("Hover").parentElement!)
    act(() => { jest.advanceTimersByTime(150) })

    expect(queryByRole("tooltip")).toBeInTheDocument()
    expect(getByText("Hello")).toBeInTheDocument()
  })

  it("hides tooltip on mouse leave", () => {
    const { getByText, queryByRole } = render(
      <Tooltip content="Hello" enterDelay={0}>
        <button>Hover</button>
      </Tooltip>
    )

    fireEvent.mouseEnter(getByText("Hover").parentElement!)
    expect(queryByRole("tooltip")).toBeInTheDocument()

    fireEvent.mouseLeave(getByText("Hover").parentElement!)
    expect(queryByRole("tooltip")).not.toBeInTheDocument()
  })

  it("does not show when disabled", () => {
    const { getByText, queryByRole } = render(
      <Tooltip content="Hello" disabled enterDelay={0}>
        <button>Hover</button>
      </Tooltip>
    )

    fireEvent.mouseEnter(getByText("Hover").parentElement!)
    act(() => { jest.advanceTimersByTime(200) })

    expect(queryByRole("tooltip")).not.toBeInTheDocument()
  })

  it("shows on focus and hides on blur", () => {
    const { getByText, queryByRole } = render(
      <Tooltip content="Focused" enterDelay={0}>
        <button>Focus me</button>
      </Tooltip>
    )

    fireEvent.focus(getByText("Focus me").parentElement!)
    expect(queryByRole("tooltip")).toBeInTheDocument()

    fireEvent.blur(getByText("Focus me").parentElement!)
    expect(queryByRole("tooltip")).not.toBeInTheDocument()
  })

  it("renders arrow by default", () => {
    const { getByText, container } = render(
      <Tooltip content="With arrow" enterDelay={0}>
        <button>Hover</button>
      </Tooltip>
    )

    fireEvent.mouseEnter(getByText("Hover").parentElement!)
    const tooltip = container.querySelector("[role='tooltip']")!
    // arrow is a span inside the tooltip
    expect(tooltip.querySelector("span")).toBeInTheDocument()
  })

  it("respects leaveDelay", () => {
    const { getByText, queryByRole } = render(
      <Tooltip content="Delayed" enterDelay={0} leaveDelay={200}>
        <button>Hover</button>
      </Tooltip>
    )

    fireEvent.mouseEnter(getByText("Hover").parentElement!)
    expect(queryByRole("tooltip")).toBeInTheDocument()

    fireEvent.mouseLeave(getByText("Hover").parentElement!)
    // Still visible during delay
    expect(queryByRole("tooltip")).toBeInTheDocument()

    act(() => { jest.advanceTimersByTime(250) })
    expect(queryByRole("tooltip")).not.toBeInTheDocument()
  })
})
