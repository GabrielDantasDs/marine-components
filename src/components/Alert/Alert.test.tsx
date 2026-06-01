import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import Alert from "./index"
import React from "react"

describe("Alert component", () => {
  it("renders message", () => {
    const { getByText } = render(<Alert>Hello world</Alert>)
    expect(getByText("Hello world")).toBeInTheDocument()
  })

  it("renders title", () => {
    const { getByText } = render(<Alert title="Warning!">Message</Alert>)
    expect(getByText("Warning!")).toBeInTheDocument()
  })

  it("has role=alert", () => {
    const { getByRole } = render(<Alert>Message</Alert>)
    expect(getByRole("alert")).toBeInTheDocument()
  })

  it("renders default icon for each type", () => {
    const { container } = render(<Alert type="success">OK</Alert>)
    expect(container.querySelector("svg")).toBeInTheDocument()
  })

  it("hides icon when icon={false}", () => {
    const { container } = render(<Alert icon={false}>No icon</Alert>)
    expect(container.querySelector("svg")).not.toBeInTheDocument()
  })

  it("closes on close button click", () => {
    const onClose = jest.fn()
    const { getByLabelText, queryByRole } = render(
      <Alert closable onClose={onClose}>Dismissable</Alert>
    )
    fireEvent.click(getByLabelText("Close"))
    expect(onClose).toHaveBeenCalled()
    expect(queryByRole("alert")).not.toBeInTheDocument()
  })

  it("calls action onClick", () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <Alert action={{ label: "Retry", onClick }}>Error</Alert>
    )
    fireEvent.click(getByText("Retry"))
    expect(onClick).toHaveBeenCalled()
  })
})

describe("Alert.Banner component", () => {
  it("renders message", () => {
    const { getByText } = render(<Alert.Banner>Maintenance tonight</Alert.Banner>)
    expect(getByText("Maintenance tonight")).toBeInTheDocument()
  })

  it("has role=alert", () => {
    const { getByRole } = render(<Alert.Banner>Message</Alert.Banner>)
    expect(getByRole("alert")).toBeInTheDocument()
  })

  it("closes on close button click", () => {
    const onClose = jest.fn()
    const { getByLabelText, queryByRole } = render(
      <Alert.Banner closable onClose={onClose}>Banner</Alert.Banner>
    )
    fireEvent.click(getByLabelText("Close"))
    expect(onClose).toHaveBeenCalled()
    expect(queryByRole("alert")).not.toBeInTheDocument()
  })

  it("renders action button", () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <Alert.Banner action={{ label: "Upgrade", onClick }}>Trial ending</Alert.Banner>
    )
    fireEvent.click(getByText("Upgrade"))
    expect(onClick).toHaveBeenCalled()
  })
})
