import type { Meta } from '@storybook/react';
import type { StoryObj } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Header',
  component: Header,
  decorators: [
    (Story) => (
      <div className="p-0">
        <Story />
      </div>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof Header>;

export const Waiting: Story = {};
