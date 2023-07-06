import { StoryObj, Meta } from "@storybook/react";

import { QuoteAuthor } from "./QuoteAuthor";

const meta: Meta<typeof QuoteAuthor> = { component: QuoteAuthor };
export default meta;

type NewType = StoryObj<typeof QuoteAuthor>;

type Story = NewType;

export const Default: Story = {
  render: () => <QuoteAuthor />,
};
