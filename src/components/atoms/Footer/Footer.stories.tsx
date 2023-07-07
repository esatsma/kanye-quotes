import { StoryObj, Meta } from "@storybook/react";

import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = { component: Footer };
export default meta;

type NewType = StoryObj<typeof Footer>;

type Story = NewType;

export const Default: Story = {
  render: () => <Footer />,
};
