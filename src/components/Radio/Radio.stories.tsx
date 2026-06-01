import Radio from ".";

export default {
  title: "MyComponents/Radio",
  component: Radio,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    defaultValue: "a",
    children: [
      <Radio.Item key="a" value="a" label="Option A" />,
      <Radio.Item key="b" value="b" label="Option B" />,
      <Radio.Item key="c" value="c" label="Option C" />,
    ],
  },
};

export const Success = {
  args: {
    defaultValue: "yes",
    children: [
      <Radio.Item key="y" value="yes" label="Yes" color="success" />,
      <Radio.Item key="n" value="no" label="No" color="success" />,
    ],
  },
};

export const Danger = {
  args: {
    defaultValue: "delete",
    children: [
      <Radio.Item key="d" value="delete" label="Delete" color="danger" />,
      <Radio.Item key="k" value="keep" label="Keep" color="danger" />,
    ],
  },
};

export const Small = {
  args: {
    defaultValue: "a",
    children: [
      <Radio.Item key="a" value="a" label="Small A" size="sm" />,
      <Radio.Item key="b" value="b" label="Small B" size="sm" />,
    ],
  },
};

export const Large = {
  args: {
    defaultValue: "a",
    children: [
      <Radio.Item key="a" value="a" label="Large A" size="lg" />,
      <Radio.Item key="b" value="b" label="Large B" size="lg" />,
    ],
  },
};

export const WithDisabled = {
  args: {
    defaultValue: "a",
    children: [
      <Radio.Item key="a" value="a" label="Available" />,
      <Radio.Item key="b" value="b" label="Disabled" disabled />,
      <Radio.Item key="c" value="c" label="Also Available" />,
    ],
  },
};
