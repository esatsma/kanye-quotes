import { StoryObj, Meta } from "@storybook/react";

import { QuoteCard } from "./QuoteCard";

const meta: Meta<typeof QuoteCard> = { component: QuoteCard };
export default meta;
QuoteCard;
type NewType = StoryObj<typeof QuoteCard>;

type Story = NewType;

export const Default: Story = {
  render: (args) => <QuoteCard {...args} />,
};
