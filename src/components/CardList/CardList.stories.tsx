import CardList from ".";
import Card from "../Card";

export default {
  title: "MyComponents/CardList",
  component: CardList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["vertical", "horizontal"],
    },
    radius: {
      control: { type: "select" },
      options: ["regular", "rounded"],
    },
    shadow: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
    },
    gap: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

const sampleCards = [
  { title: "First Item", children: "Description for the first card." },
  { title: "Second Item", children: "Description for the second card." },
  { title: "Third Item", children: "Description for the third card." },
];

export const Vertical = {
  args: {
    direction: "vertical",
    header: "Recent Items",
    children: sampleCards.map((card, i) => (
      <Card key={i} title={card.title} shadow="none" outlined>{card.children}</Card>
    )),
  },
};

export const Horizontal = {
  args: {
    direction: "horizontal",
    header: "Featured",
    children: sampleCards.map((card, i) => (
      <Card key={i} title={card.title} shadow="sm">{card.children}</Card>
    )),
  },
};

export const WithFooter = {
  args: {
    direction: "vertical",
    header: "Tasks",
    footer: "Showing 3 of 12 items",
    children: sampleCards.map((card, i) => (
      <Card key={i} title={card.title} shadow="none" outlined>{card.children}</Card>
    )),
  },
};

export const Rounded = {
  args: {
    direction: "vertical",
    radius: "rounded",
    shadow: "md",
    header: "Rounded List",
    children: sampleCards.map((card, i) => (
      <Card key={i} title={card.title} radius="rounded" shadow="none" outlined>{card.children}</Card>
    )),
  },
};

export const LargeShadow = {
  args: {
    direction: "horizontal",
    shadow: "lg",
    header: "Elevated List",
    children: sampleCards.map((card, i) => (
      <Card key={i} title={card.title} shadow="sm">{card.children}</Card>
    )),
  },
};

export const NoHeaderNoFooter = {
  args: {
    direction: "vertical",
    children: sampleCards.map((card, i) => (
      <Card key={i} title={card.title} shadow="none" outlined>{card.children}</Card>
    )),
  },
};
