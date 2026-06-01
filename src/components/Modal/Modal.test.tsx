import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import Modal from "./index"
import React from "react"

describe("Modal component", () => {
  it("renders when open", () => {
    const { getByText } = render(
      <Modal open onClose={() => {}}>Content</Modal>
    );
    expect(getByText("Content")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    const { queryByText } = render(
      <Modal open={false} onClose={() => {}}>Content</Modal>
    );
    expect(queryByText("Content")).not.toBeInTheDocument();
  });

  it("renders title and subtitle", () => {
    const { getByText } = render(
      <Modal open onClose={() => {}} title="Title" subtitle="Sub">Body</Modal>
    );
    expect(getByText("Title")).toBeInTheDocument();
    expect(getByText("Sub")).toBeInTheDocument();
  });

  it("renders icon", () => {
    const { getByText } = render(
      <Modal open onClose={() => {}} icon="⚠️">Body</Modal>
    );
    expect(getByText("⚠️")).toBeInTheDocument();
  });

  it("renders footer", () => {
    const { getByText } = render(
      <Modal open onClose={() => {}} footer={<button>OK</button>}>Body</Modal>
    );
    expect(getByText("OK")).toBeInTheDocument();
  });

  it("calls onClose when close button clicked", () => {
    const handleClose = jest.fn();
    const { getByLabelText } = render(
      <Modal open onClose={handleClose} title="Test">Body</Modal>
    );
    fireEvent.click(getByLabelText("Close"));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose on Escape key", () => {
    const handleClose = jest.fn();
    render(<Modal open onClose={handleClose}>Body</Modal>);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose on overlay click", () => {
    const handleClose = jest.fn();
    const { getByRole } = render(
      <Modal open onClose={handleClose}>Body</Modal>
    );
    fireEvent.click(getByRole("dialog"));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("does not close on overlay click when closeOnOverlay is false", () => {
    const handleClose = jest.fn();
    const { getByRole } = render(
      <Modal open onClose={handleClose} closeOnOverlay={false}>Body</Modal>
    );
    fireEvent.click(getByRole("dialog"));
    expect(handleClose).not.toHaveBeenCalled();
  });
});
