import React from "react";
import Alert from ".";

export default {
  title: "MyComponents/Alert",
  component: Alert,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    type: { control: { type: "select" }, options: ["info", "success", "warning", "error"] },
    variant: { control: { type: "select" }, options: ["filled", "outlined", "light"] },
    closable: { control: "boolean" },
    title: { control: "text" },
  },
};

export const Default = {
  args: { children: "This is an informational alert." },
};

export const WithTitle = {
  args: {
    type: "info",
    title: "Heads up!",
    children: "This alert has a title and a description.",
  },
};

export const Types = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Alert type="info">Info — Something you should know.</Alert>
      <Alert type="success">Success — Operation completed successfully.</Alert>
      <Alert type="warning">Warning — Please review before proceeding.</Alert>
      <Alert type="error">Error — Something went wrong.</Alert>
    </div>
  ),
};

export const Filled = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Alert type="info" variant="filled">Filled info alert.</Alert>
      <Alert type="success" variant="filled">Filled success alert.</Alert>
      <Alert type="warning" variant="filled">Filled warning alert.</Alert>
      <Alert type="error" variant="filled">Filled error alert.</Alert>
    </div>
  ),
};

export const Outlined = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Alert type="info" variant="outlined">Outlined info alert.</Alert>
      <Alert type="success" variant="outlined">Outlined success alert.</Alert>
      <Alert type="warning" variant="outlined">Outlined warning alert.</Alert>
      <Alert type="error" variant="outlined">Outlined error alert.</Alert>
    </div>
  ),
};

export const Closable = {
  args: {
    type: "warning",
    title: "Dismissable",
    children: "You can close this alert.",
    closable: true,
  },
};

export const WithAction = {
  args: {
    type: "error",
    title: "Connection lost",
    children: "Unable to reach the server.",
    action: { label: "Retry", onClick: () => alert("Retrying...") },
    closable: true,
  },
};

export const NoIcon = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Alert type="info" icon={false}>Info without icon.</Alert>
      <Alert type="success" icon={false}>Success without icon.</Alert>
      <Alert type="warning" icon={false} variant="outlined">Warning outlined without icon.</Alert>
      <Alert type="error" icon={false} variant="filled">Error filled without icon.</Alert>
    </div>
  ),
};

/* ---- Banner stories ---- */

export const BannerDefault = {
  render: () => (
    <Alert.Banner type="info">
      We are performing scheduled maintenance tonight at 11 PM.
    </Alert.Banner>
  ),
};

export const BannerTypes = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <Alert.Banner type="info">Info banner message.</Alert.Banner>
      <Alert.Banner type="success">Success banner message.</Alert.Banner>
      <Alert.Banner type="warning">Warning banner message.</Alert.Banner>
      <Alert.Banner type="error">Error banner message.</Alert.Banner>
    </div>
  ),
};

export const BannerWithAction = {
  render: () => (
    <Alert.Banner
      type="warning"
      closable
      action={{ label: "Upgrade now", onClick: () => alert("Upgrade!") }}
    >
      Your trial expires in 3 days.
    </Alert.Banner>
  ),
};

export const BannerClosable = {
  render: () => (
    <Alert.Banner type="success" closable>
      Your account has been verified!
    </Alert.Banner>
  ),
};
