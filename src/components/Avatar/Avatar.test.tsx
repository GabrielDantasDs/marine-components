import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import Avatar from "./index"
import React from "react"

describe("Avatar component", () => {
  it("renders initials from full name", () => {
    const { getByText } = render(<Avatar name="Gabriel Dantas" />)
    expect(getByText("GD")).toBeInTheDocument()
  })

  it("renders single initial from single name", () => {
    const { getByText } = render(<Avatar name="Gabriel" />)
    expect(getByText("G")).toBeInTheDocument()
  })

  it("renders image when src is provided", () => {
    const { container } = render(<Avatar src="https://example.com/photo.jpg" alt="user" />)
    const img = container.querySelector("img")
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute("src", "https://example.com/photo.jpg")
  })

  it("falls back to initials on image error", () => {
    const { container, getByText } = render(
      <Avatar src="https://broken.jpg" name="Jane Doe" />
    )
    const img = container.querySelector("img")!
    fireEvent.error(img)
    expect(getByText("JD")).toBeInTheDocument()
  })

  it("renders default icon when no src or name", () => {
    const { container } = render(<Avatar />)
    const svg = container.querySelector("svg")
    expect(svg).toBeInTheDocument()
  })

  it("renders status dot", () => {
    const { container } = render(<Avatar name="AB" status="online" />)
    // wrapper has 2 children: root + status dot
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.childNodes.length).toBe(2)
  })

  it("has correct aria-label from name", () => {
    const { getByRole } = render(<Avatar name="Test User" />)
    expect(getByRole("img")).toHaveAttribute("aria-label", "Test User")
  })
})

describe("Avatar.Group", () => {
  it("renders max avatars and overflow counter", () => {
    const { getByText } = render(
      <Avatar.Group max={2}>
        <Avatar name="Alice Smith" />
        <Avatar name="Bob Jones" />
        <Avatar name="Carol Lee" />
        <Avatar name="Dan Brown" />
      </Avatar.Group>
    )
    expect(getByText("+2")).toBeInTheDocument()
    expect(getByText("AS")).toBeInTheDocument()
    expect(getByText("BJ")).toBeInTheDocument()
  })

  it("does not show overflow when within max", () => {
    const { queryByText } = render(
      <Avatar.Group max={5}>
        <Avatar name="Alice" />
        <Avatar name="Bob" />
      </Avatar.Group>
    )
    expect(queryByText(/\+/)).not.toBeInTheDocument()
  })
})
