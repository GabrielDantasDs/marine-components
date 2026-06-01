import { useState } from "react";
import Navbar from ".";

export default {
  title: "MyComponents/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["fixed", "sticky", "static"],
    },
    variant: {
      control: { type: "select" },
      options: ["default", "elevated", "outlined", "transparent"],
    },
    fullWidth: { control: "boolean" },
  },
};

const DefaultRender = () => {
  const [active, setActive] = useState("Home");
  const items = ["Home", "Products", "About", "Contact"];
  return (
    <Navbar title="Marine" endContent={<span style={{ fontSize: "0.85rem", color: "#6b6b6b" }}>Sign In</span>}>
      <Navbar.Group>
        {items.map((item) => (
          <Navbar.Item key={item} active={active === item} onClick={() => setActive(item)}>
            {item}
          </Navbar.Item>
        ))}
      </Navbar.Group>
    </Navbar>
  );
};

export const Default = {
  render: () => <DefaultRender />,
};

const ElevatedRender = () => {
  const [active, setActive] = useState("Overview");
  const items = ["Overview", "Analytics", "Settings"];
  return (
    <Navbar title="Dashboard" variant="elevated">
      <Navbar.Group>
        {items.map((item) => (
          <Navbar.Item key={item} active={active === item} onClick={() => setActive(item)}>
            {item}
          </Navbar.Item>
        ))}
      </Navbar.Group>
    </Navbar>
  );
};

export const Elevated = {
  render: () => <ElevatedRender />,
};

const OutlinedRender = () => {
  const [active, setActive] = useState("Features");
  const items = ["Features", "Pricing", "Docs"];
  return (
    <Navbar title="App" variant="outlined">
      <Navbar.Group>
        {items.map((item) => (
          <Navbar.Item key={item} active={active === item} onClick={() => setActive(item)}>
            {item}
          </Navbar.Item>
        ))}
      </Navbar.Group>
    </Navbar>
  );
};

export const Outlined = {
  render: () => <OutlinedRender />,
};

export const Transparent = {
  args: {
    title: "Brand",
    variant: "transparent",
    children: (
      <Navbar.Group>
        <Navbar.Item active>Home</Navbar.Item>
        <Navbar.Item>Blog</Navbar.Item>
      </Navbar.Group>
    ),
  },
  decorators: [
    (Story: any) => (
      <div style={{ background: "linear-gradient(135deg, #f5f7fa, #e8ecf0)", minHeight: "100px" }}>
        <Story />
      </div>
    ),
  ],
};

export const WithLogo = {
  args: {
    logo: <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#4a90d9" }} />,
    title: "Marine UI",
    children: (
      <Navbar.Group>
        <Navbar.Item active>Components</Navbar.Item>
        <Navbar.Item>Templates</Navbar.Item>
        <Navbar.Item>Docs</Navbar.Item>
      </Navbar.Group>
    ),
    endContent: (
      <Navbar.Group gap="sm">
        <span style={{ fontSize: "0.85rem", color: "#4a90d9", cursor: "pointer" }}>Login</span>
      </Navbar.Group>
    ),
  },
};

export const FullWidth = {
  args: {
    title: "Wide",
    variant: "elevated",
    fullWidth: true,
    children: (
      <Navbar.Group>
        <Navbar.Item active>Home</Navbar.Item>
        <Navbar.Item>About</Navbar.Item>
      </Navbar.Group>
    ),
  },
};
