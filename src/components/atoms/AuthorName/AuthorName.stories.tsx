import { StoryObj, Meta } from "@storybook/react";

import { AuthorName } from "./AuthorName";

const meta: Meta<typeof AuthorName> = { component: AuthorName };
export default meta;

type NewType = StoryObj<typeof AuthorName>;

type Story = NewType;

export const Default: Story = {
  render: () => <AuthorName />,
};
