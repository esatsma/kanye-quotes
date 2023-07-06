import { StoryObj, Meta } from "@storybook/react";

import { QuoteIcon } from "./QuoteIcon";

const meta: Meta<typeof QuoteIcon> = { component: QuoteIcon };
export default meta;

type NewType = StoryObj<typeof QuoteIcon>;

type Story = NewType;

export const Default: Story = {
  render: () => <QuoteIcon />,
};
