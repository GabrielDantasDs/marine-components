import { useState } from "react";
import Sidebar from ".";

export default {
  title: "MyComponents/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "elevated", "outlined"],
    },
    collapsed: { control: "boolean" },
  },
  decorators: [
    (Story: any) => <div style={{ height: "500px", display: "flex" }}><Story /></div>,
  ],
};

const DefaultRender = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <Sidebar
      header={<span style={{ fontWeight: 600, fontSize: "1rem" }}>⚓ Marine</span>}
      footer={<span style={{ fontSize: "0.8rem", color: "#8a8a8a" }}>v0.0.1</span>}
    >
      <Sidebar.Group title="Main">
        <Sidebar.Item icon="🏠" active={active === "Dashboard"} onClick={() => setActive("Dashboard")}>
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item icon="📊" active={active === "Analytics"} onClick={() => setActive("Analytics")}>
          Analytics
        </Sidebar.Item>
        <Sidebar.Item icon="👥" active={active === "Users"} onClick={() => setActive("Users")}>
          Users
        </Sidebar.Item>
      </Sidebar.Group>
      <Sidebar.Divider />
      <Sidebar.Group title="Settings">
        <Sidebar.Item icon="⚙" active={active === "General"} onClick={() => setActive("General")}>
          General
        </Sidebar.Item>
        <Sidebar.Item icon="🔒" active={active === "Security"} onClick={() => setActive("Security")}>
          Security
        </Sidebar.Item>
        <Sidebar.Item icon="🚫" disabled>
          Disabled Item
        </Sidebar.Item>
      </Sidebar.Group>
    </Sidebar>
  );
};

export const Default = {
  render: () => <DefaultRender />,
};

const ElevatedRender = () => {
  const [active, setActive] = useState("Inbox");

  return (
    <Sidebar variant="elevated">
      <Sidebar.Item icon="📥" active={active === "Inbox"} onClick={() => setActive("Inbox")}>
        Inbox
      </Sidebar.Item>
      <Sidebar.Item icon="⭐" active={active === "Starred"} onClick={() => setActive("Starred")}>
        Starred
      </Sidebar.Item>
      <Sidebar.Item icon="📤" active={active === "Sent"} onClick={() => setActive("Sent")}>
        Sent
      </Sidebar.Item>
      <Sidebar.Item icon="🗑" active={active === "Trash"} onClick={() => setActive("Trash")}>
        Trash
      </Sidebar.Item>
    </Sidebar>
  );
};

export const Elevated = {
  render: () => <ElevatedRender />,
};

const CollapsedRender = () => {
  const [active, setActive] = useState("Home");

  return (
    <Sidebar collapsed>
      <Sidebar.Item icon="🏠" active={active === "Home"} onClick={() => setActive("Home")}>
        Home
      </Sidebar.Item>
      <Sidebar.Item icon="🔍" active={active === "Search"} onClick={() => setActive("Search")}>
        Search
      </Sidebar.Item>
      <Sidebar.Item icon="💬" active={active === "Messages"} onClick={() => setActive("Messages")}>
        Messages
      </Sidebar.Item>
      <Sidebar.Item icon="⚙" active={active === "Settings"} onClick={() => setActive("Settings")}>
        Settings
      </Sidebar.Item>
    </Sidebar>
  );
};

export const Collapsed = {
  render: () => <CollapsedRender />,
};

const OutlinedRender = () => {
  const [active, setActive] = useState("Projects");

  return (
    <Sidebar
      variant="outlined"
      header={<span style={{ fontWeight: 600 }}>Workspace</span>}
      footer={<span style={{ fontSize: "0.78rem", color: "#6b6b6b" }}>Free Plan</span>}
    >
      <Sidebar.Group>
        <Sidebar.Item icon="📁" active={active === "Projects"} onClick={() => setActive("Projects")}>
          Projects
        </Sidebar.Item>
        <Sidebar.Item icon="📋" active={active === "Tasks"} onClick={() => setActive("Tasks")}>
          Tasks
        </Sidebar.Item>
        <Sidebar.Item icon="📅" active={active === "Calendar"} onClick={() => setActive("Calendar")}>
          Calendar
        </Sidebar.Item>
      </Sidebar.Group>
      <Sidebar.Divider />
      <Sidebar.Group title="Teams">
        <Sidebar.Item icon="💻" active={active === "Engineering"} onClick={() => setActive("Engineering")}>
          Engineering
        </Sidebar.Item>
        <Sidebar.Item icon="🎨" active={active === "Design"} onClick={() => setActive("Design")}>
          Design
        </Sidebar.Item>
      </Sidebar.Group>
    </Sidebar>
  );
};

export const Outlined = {
  render: () => <OutlinedRender />,
};
