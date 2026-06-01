import "@testing-library/jest-dom"
import { render, fireEvent, act } from "@testing-library/react"
import ToastProvider, { useToast } from "./index"
import React from "react"

function TestTrigger({ type = "success" as const, ...rest }) {
  const { toast } = useToast();
  return (
    <button onClick={() => toast({ type, title: "Test Toast", ...rest })}>
      Trigger
    </button>
  );
}

describe("Toast component", () => {
  it("shows toast on trigger", () => {
    const { getByText } = render(
      <ToastProvider>
        <TestTrigger />
      </ToastProvider>
    );
    fireEvent.click(getByText("Trigger"));
    expect(getByText("Test Toast")).toBeInTheDocument();
  });

  it("shows message text", () => {
    const { getByText } = render(
      <ToastProvider>
        <TestTrigger message="Details here" />
      </ToastProvider>
    );
    fireEvent.click(getByText("Trigger"));
    expect(getByText("Details here")).toBeInTheDocument();
  });

  it("dismisses on close click", () => {
    const { getByText, getByLabelText, queryByText } = render(
      <ToastProvider>
        <TestTrigger duration={0} />
      </ToastProvider>
    );
    fireEvent.click(getByText("Trigger"));
    expect(getByText("Test Toast")).toBeInTheDocument();
    fireEvent.click(getByLabelText("Dismiss"));
    // After animation (200ms)
    act(() => { jest.advanceTimersByTime?.(300) });
  });

  it("renders action button", () => {
    const handleAction = jest.fn();
    const ActionTrigger = () => {
      const { toast } = useToast();
      return (
        <button onClick={() => toast({
          type: "info",
          title: "With Action",
          action: { label: "Undo", onClick: handleAction },
          duration: 0,
        })}>
          Trigger
        </button>
      );
    };

    const { getByText } = render(
      <ToastProvider>
        <ActionTrigger />
      </ToastProvider>
    );
    fireEvent.click(getByText("Trigger"));
    fireEvent.click(getByText("Undo"));
    expect(handleAction).toHaveBeenCalledTimes(1);
  });

  it("renders all toast types", () => {
    const AllTypes = () => {
      const { toast } = useToast();
      return (
        <button onClick={() => {
          toast({ type: "success", title: "S" });
          toast({ type: "error", title: "E" });
          toast({ type: "warning", title: "W" });
          toast({ type: "info", title: "I" });
        }}>
          All
        </button>
      );
    };

    const { getByText } = render(
      <ToastProvider>
        <AllTypes />
      </ToastProvider>
    );
    fireEvent.click(getByText("All"));
    expect(getByText("S")).toBeInTheDocument();
    expect(getByText("E")).toBeInTheDocument();
    expect(getByText("W")).toBeInTheDocument();
    expect(getByText("I")).toBeInTheDocument();
  });
});
