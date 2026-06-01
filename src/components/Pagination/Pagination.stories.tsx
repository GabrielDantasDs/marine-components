import React, { useState } from "react";
import Pagination from ".";

export default {
  title: "MyComponents/Pagination",
  component: Pagination,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    totalPages: { control: { type: "number" } },
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    variant: { control: { type: "select" }, options: ["filled", "outlined", "text"] },
    color: { control: { type: "select" }, options: ["primary", "secondary", "success", "danger"] },
    siblingCount: { control: { type: "number" } },
    showFirstLast: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  args: { totalPages: 10, defaultPage: 1 },
};

export const Controlled = {
  render: () => {
    const [page, setPage] = useState(5);
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, fontFamily: "Lexend, sans-serif" }}>
        <Pagination totalPages={20} page={page} onChange={setPage} />
        <span style={{ fontSize: "0.85rem", color: "#666" }}>Page {page} of 20</span>
      </div>
    );
  },
};

export const Variants = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Pagination totalPages={10} defaultPage={3} variant="filled" />
      <Pagination totalPages={10} defaultPage={3} variant="outlined" />
      <Pagination totalPages={10} defaultPage={3} variant="text" />
    </div>
  ),
};

export const Colors = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Pagination totalPages={10} defaultPage={3} color="primary" />
      <Pagination totalPages={10} defaultPage={3} color="secondary" />
      <Pagination totalPages={10} defaultPage={3} color="success" />
      <Pagination totalPages={10} defaultPage={3} color="danger" />
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
      <Pagination totalPages={10} defaultPage={3} size="sm" />
      <Pagination totalPages={10} defaultPage={3} size="md" />
      <Pagination totalPages={10} defaultPage={3} size="lg" />
    </div>
  ),
};

export const WithFirstLast = {
  args: { totalPages: 20, defaultPage: 10, showFirstLast: true },
};

export const ManyPages = {
  args: { totalPages: 100, defaultPage: 50, showFirstLast: true },
};

export const MoreSiblings = {
  args: { totalPages: 30, defaultPage: 15, siblingCount: 2 },
};

export const FewPages = {
  args: { totalPages: 3, defaultPage: 1 },
};

export const Disabled = {
  args: { totalPages: 10, defaultPage: 4, disabled: true },
};

export const OutlinedWithFirstLast = {
  args: { totalPages: 15, defaultPage: 8, variant: "outlined", showFirstLast: true },
};

export const CustomIcons = {
  args: {
    totalPages: 10,
    defaultPage: 5,
    showFirstLast: true,
    prevIcon: <span style={{ fontSize: "0.8rem" }}>←</span>,
    nextIcon: <span style={{ fontSize: "0.8rem" }}>→</span>,
    firstIcon: <span style={{ fontSize: "0.8rem" }}>⇤</span>,
    lastIcon: <span style={{ fontSize: "0.8rem" }}>⇥</span>,
  },
};

export const TextIcons = {
  args: {
    totalPages: 10,
    defaultPage: 3,
    prevIcon: <span style={{ fontFamily: "Lexend, sans-serif", fontSize: "0.75rem" }}>Prev</span>,
    nextIcon: <span style={{ fontFamily: "Lexend, sans-serif", fontSize: "0.75rem" }}>Next</span>,
  },
};
