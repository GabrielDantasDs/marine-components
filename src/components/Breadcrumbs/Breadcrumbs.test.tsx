import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import Breadcrumbs from "./index"
import React from "react"

const items = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Detail" },
]

describe("Breadcrumbs component", () => {
  it("renders all items", () => {
    const { getByText } = render(<Breadcrumbs items={items} />)
    expect(getByText("Home")).toBeInTheDocument()
    expect(getByText("Products")).toBeInTheDocument()
    expect(getByText("Detail")).toBeInTheDocument()
  })

  it("last item has aria-current=page", () => {
    const { getByText } = render(<Breadcrumbs items={items} />)
    expect(getByText("Detail").closest("[aria-current]")).toHaveAttribute("aria-current", "page")
  })

  it("non-last items are links", () => {
    const { getByText } = render(<Breadcrumbs items={items} />)
    const home = getByText("Home").closest("a")
    expect(home).toBeInTheDocument()
    expect(home).toHaveAttribute("href", "/")
  })

  it("calls onNavigate on link click", () => {
    const onNavigate = jest.fn()
    const { getByText } = render(<Breadcrumbs items={items} onNavigate={onNavigate} />)
    fireEvent.click(getByText("Home"))
    expect(onNavigate).toHaveBeenCalledWith(items[0], 0)
  })

  it("renders custom separator", () => {
    const { getAllByText } = render(<Breadcrumbs items={items} separator="→" />)
    expect(getAllByText("→").length).toBe(2)
  })

  it("collapses middle items when maxItems is set", () => {
    const longItems = [
      { label: "A", href: "/a" },
      { label: "B", href: "/b" },
      { label: "C", href: "/c" },
      { label: "D", href: "/d" },
      { label: "E" },
    ]
    const { getByText, queryByText, getByLabelText } = render(
      <Breadcrumbs items={longItems} maxItems={3} />
    )
    expect(getByText("A")).toBeInTheDocument()
    expect(queryByText("B")).not.toBeInTheDocument()
    expect(queryByText("C")).not.toBeInTheDocument()
    expect(getByText("D")).toBeInTheDocument()
    expect(getByText("E")).toBeInTheDocument()
    expect(getByLabelText("Show more")).toBeInTheDocument()
  })

  it("expands collapsed items on ellipsis click", () => {
    const longItems = [
      { label: "A", href: "/a" },
      { label: "B", href: "/b" },
      { label: "C", href: "/c" },
      { label: "D" },
    ]
    const { getByText, getByLabelText } = render(
      <Breadcrumbs items={longItems} maxItems={2} />
    )
    fireEvent.click(getByLabelText("Show more"))
    expect(getByText("A")).toBeInTheDocument()
    expect(getByText("B")).toBeInTheDocument()
    expect(getByText("C")).toBeInTheDocument()
    expect(getByText("D")).toBeInTheDocument()
  })

  it("has nav with aria-label", () => {
    const { container } = render(<Breadcrumbs items={items} />)
    expect(container.querySelector("nav")).toHaveAttribute("aria-label", "Breadcrumb")
  })
})
