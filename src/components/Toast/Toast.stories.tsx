import ToastProvider, { useToast } from ".";
import Button from "../Button";

export default {
  title: "MyComponents/Toast",
  component: ToastProvider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

const SuccessDemo = () => {
  const { toast } = useToast();
  return (
    <Button color="success" onClick={() => toast({
      type: "success",
      title: "Saved successfully",
      message: "Your changes have been saved.",
    })}>
      Show Success
    </Button>
  );
};

export const Success = {
  render: () => <SuccessDemo />,
};

const ErrorDemo = () => {
  const { toast } = useToast();
  return (
    <Button color="danger" onClick={() => toast({
      type: "error",
      title: "Something went wrong",
      message: "Please try again later.",
    })}>
      Show Error
    </Button>
  );
};

export const Error = {
  render: () => <ErrorDemo />,
};

const WarningDemo = () => {
  const { toast } = useToast();
  return (
    <Button color="warning" onClick={() => toast({
      type: "warning",
      title: "Attention",
      message: "Your session will expire in 5 minutes.",
    })}>
      Show Warning
    </Button>
  );
};

export const Warning = {
  render: () => <WarningDemo />,
};

const InfoDemo = () => {
  const { toast } = useToast();
  return (
    <Button color="primary" onClick={() => toast({
      type: "info",
      title: "New update available",
      message: "Version 2.0 is ready to install.",
    })}>
      Show Info
    </Button>
  );
};

export const Info = {
  render: () => <InfoDemo />,
};

const WithActionDemo = () => {
  const { toast } = useToast();
  return (
    <Button onClick={() => toast({
      type: "info",
      title: "Item deleted",
      message: "The item was moved to trash.",
      action: { label: "Undo", onClick: () => alert("Undo!") },
    })}>
      Show with Action
    </Button>
  );
};

export const WithAction = {
  render: () => <WithActionDemo />,
};

const PersistentDemo = () => {
  const { toast } = useToast();
  return (
    <Button onClick={() => toast({
      type: "warning",
      title: "Persistent Toast",
      message: "This won't auto-dismiss. Close it manually.",
      duration: 0,
    })}>
      Show Persistent
    </Button>
  );
};

export const Persistent = {
  render: () => <PersistentDemo />,
};

const AllTypesDemo = () => {
  const { toast } = useToast();
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Button color="success" size="sm" onClick={() => toast({ type: "success", title: "Success!" })}>
        Success
      </Button>
      <Button color="danger" size="sm" onClick={() => toast({ type: "error", title: "Error!" })}>
        Error
      </Button>
      <Button color="warning" size="sm" onClick={() => toast({ type: "warning", title: "Warning!" })}>
        Warning
      </Button>
      <Button color="primary" size="sm" onClick={() => toast({ type: "info", title: "Info!" })}>
        Info
      </Button>
    </div>
  );
};

export const AllTypes = {
  render: () => <AllTypesDemo />,
};
