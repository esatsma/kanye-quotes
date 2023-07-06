import { StoryObj, Meta } from "@storybook/react";

import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = { component: Loader };
export default meta;

type NewType = StoryObj<typeof Loader>;

type Story = NewType;

export const Default: Story = {
  render: () => <Loader />,
};
