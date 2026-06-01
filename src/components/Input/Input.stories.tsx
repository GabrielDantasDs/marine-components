import Input from ".";
import type { AutocompleteOption } from "./types";

export default {
  title: "MyComponents/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    format: {
      control: { type: "select" },
      options: ["text", "password", "phone", "zipcode", "age", "money", "cpf", "cnpj", "creditCard", "date", "ssn", "email"],
    },
    country: {
      control: { type: "select" },
      options: ["US", "BR", "UK", "DE", "FR", "JP", "CA", "AU", "PT", "ES", "MX", "AR"],
    },
    radius: {
      control: { type: "select" },
      options: ["regular", "rounded"],
    },
    shrink: {
      control: { type: "select" },
      options: ["none", "shrink", "shrinkAndHide"],
    },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    textarea: { control: "boolean" },
  },
  decorators: [
    (Story: any) => <div style={{ width: "360px" }}><Story /></div>,
  ],
};

export const Text = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    helperText: "Your full name",
  },
};

export const Password = {
  args: {
    label: "Password",
    format: "password",
  },
};

export const PhoneBR = {
  args: {
    label: "Phone (Brazil)",
    format: "phone",
    country: "BR",
  },
};

export const PhoneUS = {
  args: {
    label: "Phone (US)",
    format: "phone",
    country: "US",
  },
};

export const PhoneUK = {
  args: {
    label: "Phone (UK)",
    format: "phone",
    country: "UK",
  },
};

export const MoneyBR = {
  args: {
    label: "Amount (BRL)",
    format: "money",
    country: "BR",
  },
};

export const MoneyUS = {
  args: {
    label: "Amount (USD)",
    format: "money",
    country: "US",
  },
};

export const MoneyEUR = {
  args: {
    label: "Amount (EUR)",
    format: "money",
    country: "DE",
  },
};

export const CPF = {
  args: {
    label: "CPF",
    format: "cpf",
  },
};

export const CNPJ = {
  args: {
    label: "CNPJ",
    format: "cnpj",
  },
};

export const CreditCard = {
  args: {
    label: "Card Number",
    format: "creditCard",
    startIcon: "💳",
  },
};

export const DateInput = {
  args: {
    label: "Date",
    format: "date",
  },
};

export const SSN = {
  args: {
    label: "Social Security Number",
    format: "ssn",
  },
};

export const ZipCodeUS = {
  args: {
    label: "Zip Code (US)",
    format: "zipcode",
    country: "US",
  },
};

export const ZipCodeBR = {
  args: {
    label: "CEP (Brazil)",
    format: "zipcode",
    country: "BR",
  },
};

export const Age = {
  args: {
    label: "Age",
    format: "age",
  },
};

export const Email = {
  args: {
    label: "Email",
    format: "email",
    startIcon: "✉",
  },
};

export const TextArea = {
  args: {
    label: "Message",
    textarea: true,
    placeholder: "Write your message...",
    rows: 5,
  },
};

export const WithIcons = {
  args: {
    label: "Search",
    startIcon: "🔍",
    endIcon: "✕",
    placeholder: "Search...",
  },
};

export const WithError = {
  args: {
    label: "Email",
    format: "email",
    error: "Please enter a valid email address",
    defaultValue: "invalid-email",
  },
};

export const Disabled = {
  args: {
    label: "Disabled",
    disabled: true,
    defaultValue: "Cannot edit",
  },
};

export const Rounded = {
  args: {
    label: "Rounded Input",
    radius: "rounded",
    placeholder: "Rounded corners...",
  },
};

export const Shrink = {
  args: {
    label: "Email",
    shrink: "shrink",
    format: "email",
  },
};

export const ShrinkAndHide = {
  args: {
    label: "Username",
    shrink: "shrinkAndHide",
    helperText: "Label disappears when you type",
  },
};

const mockFetch = async (query: string): Promise<AutocompleteOption[]> => {
  const cities = [
    { label: "New York", value: "ny" },
    { label: "New Orleans", value: "no" },
    { label: "Newark", value: "nw" },
    { label: "Nashville", value: "ns" },
    { label: "Los Angeles", value: "la" },
    { label: "London", value: "ld" },
    { label: "Lisbon", value: "lb" },
    { label: "São Paulo", value: "sp" },
    { label: "San Francisco", value: "sf" },
    { label: "Seattle", value: "se" },
  ];
  return cities.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );
};

export const Autocomplete = {
  args: {
    label: "City",
    placeholder: "Type to search cities...",
    autocomplete: true,
    fetchOptions: mockFetch,
  },
};
