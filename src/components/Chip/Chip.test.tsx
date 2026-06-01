import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import Chip from "./index"
import React from "react"

describe("Chip component", () => {
  it("renders label", () => {
    const { getByText } = render(<Chip label="Hello" />)
    expect(getByText("Hello")).toBeInTheDocument()
  })

  it("renders start icon", () => {
    const { container } = render(<Chip label="Test" startIcon={<svg data-testid="icon" />} />)
    expect(container.querySelector("svg")).toBeInTheDocument()
  })

  it("renders delete button when deletable", () => {
    const { getByLabelText } = render(<Chip label="Tag" deletable />)
    expect(getByLabelText("Remove Tag")).toBeInTheDocument()
  })

  it("calls onDelete when delete button clicked", () => {
    const onDelete = jest.fn()
    const { getByLabelText } = render(<Chip label="Tag" deletable onDelete={onDelete} />)
    fireEvent.click(getByLabelText("Remove Tag"))
    expect(onDelete).toHaveBeenCalled()
  })

  it("calls onClick when clickable", () => {
    const onClick = jest.fn()
    const { getByText } = render(<Chip label="Click" clickable onClick={onClick} />)
    fireEvent.click(getByText("Click").closest("[role='button']")!)
    expect(onClick).toHaveBeenCalled()
  })

  it("has role=button when clickable", () => {
    const { container } = render(<Chip label="Test" clickable />)
    expect(container.querySelector("[role='button']")).toBeInTheDocument()
  })

  it("does not have role=button when not clickable", () => {
    const { container } = render(<Chip label="Test" />)
    expect(container.querySelector("[role='button']")).not.toBeInTheDocument()
  })

  it("does not fire onClick when disabled", () => {
    const onClick = jest.fn()
    const { container } = render(<Chip label="Test" clickable disabled onClick={onClick} />)
    const chip = container.firstChild as HTMLElement
    fireEvent.click(chip)
    expect(onClick).not.toHaveBeenCalled()
  })

  it("delete does not trigger chip onClick", () => {
    const onClick = jest.fn()
    const onDelete = jest.fn()
    const { getByLabelText } = render(
      <Chip label="Tag" clickable deletable onClick={onClick} onDelete={onDelete} />
    )
    fireEvent.click(getByLabelText("Remove Tag"))
    expect(onDelete).toHaveBeenCalled()
    expect(onClick).not.toHaveBeenCalled()
  })
})
