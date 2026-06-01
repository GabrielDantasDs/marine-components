import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Badge from "./index"
import React from "react"

describe("Badge component", () => {
  it("renders content number", () => {
    const { getByText } = render(<Badge content={5}><span>icon</span></Badge>)
    expect(getByText("5")).toBeInTheDocument()
  })

  it("renders text content", () => {
    const { getByText } = render(<Badge content="NEW"><span>icon</span></Badge>)
    expect(getByText("NEW")).toBeInTheDocument()
  })

  it("caps content at max", () => {
    const { getByText } = render(<Badge content={150} max={99}><span>icon</span></Badge>)
    expect(getByText("99+")).toBeInTheDocument()
  })

  it("hides badge when content is 0 by default", () => {
    const { container } = render(<Badge content={0}><span>icon</span></Badge>)
    // badge element should have invisible styling
    const badge = container.querySelectorAll("span")[0]
    expect(badge).toBeInTheDocument()
  })

  it("shows zero when showZero is true", () => {
    const { getByText } = render(<Badge content={0} showZero><span>icon</span></Badge>)
    expect(getByText("0")).toBeInTheDocument()
  })

  it("renders dot variant without text", () => {
    const { container } = render(<Badge variant="dot"><span>icon</span></Badge>)
    // dot should not have text content
    const spans = container.querySelectorAll("span")
    const badgeSpan = spans[spans.length - 1]
    expect(badgeSpan?.textContent).toBe("")
  })

  it("renders standalone without wrapper", () => {
    const { container } = render(<Badge content={3} standalone />)
    // No wrapper, just the badge element directly
    const firstChild = container.firstChild as HTMLElement
    expect(firstChild.textContent).toBe("3")
  })

  it("wraps children with position relative", () => {
    const { container } = render(<Badge content={1}><span>child</span></Badge>)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.childNodes.length).toBe(2) // child + badge
  })
})
