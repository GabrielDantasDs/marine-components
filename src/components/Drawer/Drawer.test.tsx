import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import Drawer from "./index"
import React from "react"

describe("Drawer component", () => {
  it("does not render when closed", () => {
    const { queryByRole } = render(
      <Drawer open={false} onClose={jest.fn()}>Content</Drawer>
    )
    expect(queryByRole("dialog")).not.toBeInTheDocument()
  })

  it("renders when open", () => {
    const { getByRole } = render(
      <Drawer open onClose={jest.fn()}>Content</Drawer>
    )
    expect(getByRole("dialog")).toBeInTheDocument()
  })

  it("renders title and subtitle", () => {
    const { getByText } = render(
      <Drawer open onClose={jest.fn()} title="Settings" subtitle="Update preferences">
        Content
      </Drawer>
    )
    expect(getByText("Settings")).toBeInTheDocument()
    expect(getByText("Update preferences")).toBeInTheDocument()
  })

  it("renders children", () => {
    const { getByText } = render(
      <Drawer open onClose={jest.fn()}>Hello Drawer</Drawer>
    )
    expect(getByText("Hello Drawer")).toBeInTheDocument()
  })

  it("renders footer", () => {
    const { getByText } = render(
      <Drawer open onClose={jest.fn()} footer={<button>Save</button>}>
        Content
      </Drawer>
    )
    expect(getByText("Save")).toBeInTheDocument()
  })

  it("calls onClose on close button click", () => {
    const onClose = jest.fn()
    const { getByLabelText } = render(
      <Drawer open onClose={onClose} title="Test">Content</Drawer>
    )
    fireEvent.click(getByLabelText("Close drawer"))
    expect(onClose).toHaveBeenCalled()
  })

  it("calls onClose on Escape key", () => {
    const onClose = jest.fn()
    render(<Drawer open onClose={onClose}>Content</Drawer>)
    fireEvent.keyDown(document, { key: "Escape" })
    expect(onClose).toHaveBeenCalled()
  })

  it("does not call onClose on Escape when closeOnEsc is false", () => {
    const onClose = jest.fn()
    render(<Drawer open onClose={onClose} closeOnEsc={false}>Content</Drawer>)
    fireEvent.keyDown(document, { key: "Escape" })
    expect(onClose).not.toHaveBeenCalled()
  })

  it("has aria-modal=true", () => {
    const { getByRole } = render(
      <Drawer open onClose={jest.fn()}>Content</Drawer>
    )
    expect(getByRole("dialog")).toHaveAttribute("aria-modal", "true")
  })
})
