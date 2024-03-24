import type { Meta, StoryObj } from '@storybook/react';
import Banner from './Banner';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  // title: 'Example/Button',
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
  },
};
