import { StoryObj, Meta } from "@storybook/react";

import { Header } from "./Header";

const meta: Meta<typeof Header> = { component: Header };
export default meta;

type NewType = StoryObj<typeof Header>;

type Story = NewType;

export const Default: Story = {
  render: () => <Header />,
};
