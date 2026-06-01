import React from "react";
import Breadcrumbs from ".";

const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 8l6-5.5L14 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.5 9v4.5h3.25V11h2.5v2.5h3.25V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FolderIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 4.5h4.5l1.5 1.5H14v7H2V4.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
  </svg>
);

export default {
  title: "MyComponents/Breadcrumbs",
  component: Breadcrumbs,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    maxItems: { control: { type: "number" } },
  },
};

export const Default = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Electronics", href: "/products/electronics" },
      { label: "Laptops" },
    ],
  },
};

export const WithIcons = {
  args: {
    items: [
      { label: "Home", href: "/", icon: <HomeIcon /> },
      { label: "Documents", href: "/docs", icon: <FolderIcon /> },
      { label: "Reports", href: "/docs/reports", icon: <FolderIcon /> },
      { label: "Q4 Report" },
    ],
  },
};

export const Collapsed = {
  args: {
    maxItems: 3,
    items: [
      { label: "Home", href: "/" },
      { label: "Category", href: "/category" },
      { label: "Subcategory", href: "/category/sub" },
      { label: "Section", href: "/category/sub/section" },
      { label: "Item", href: "/category/sub/section/item" },
      { label: "Detail" },
    ],
  },
};

export const CustomSeparator = {
  args: {
    separator: "→",
    items: [
      { label: "Home", href: "/" },
      { label: "Settings", href: "/settings" },
      { label: "Profile" },
    ],
  },
};

export const SlashSeparator = {
  args: {
    separator: "/",
    items: [
      { label: "Home", href: "/" },
      { label: "Users", href: "/users" },
      { label: "John Doe" },
    ],
  },
};

export const Sizes = {
  render: () => {
    const items = [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Current" },
    ];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Breadcrumbs items={items} size="sm" />
        <Breadcrumbs items={items} size="md" />
        <Breadcrumbs items={items} size="lg" />
      </div>
    );
  },
};

export const TwoItems = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Dashboard" },
    ],
  },
};

export const WithOnNavigate = {
  args: {
    items: [
      { label: "Home" },
      { label: "Products" },
      { label: "Detail" },
    ],
    onNavigate: (item: any, index: number) => alert(`Navigated to "${item.label}" (index ${index})`),
  },
};
