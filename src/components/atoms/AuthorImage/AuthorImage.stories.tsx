import { StoryObj, Meta } from "@storybook/react";

import { AuthorImage } from "./AuthorImage";

const meta: Meta<typeof AuthorImage> = { component: AuthorImage };
export default meta;

type NewType = StoryObj<typeof AuthorImage>;

type Story = NewType;

export const Default: Story = {
  render: () => <AuthorImage />,
};
