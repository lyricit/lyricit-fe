import type { Meta, StoryObj } from '@storybook/react';
import GameHeader from './GameHeader';

export default {
  title: 'GameHeader',
  component: GameHeader,
  argTypes: {
    keyword: { control: 'text' },
    limit: {
      control: {
        type: 'range',
        min: 0,
        max: 300,
        step: 1,
      },
      defaultValue: 180,
    },
  },
} as Meta;

type Story = StoryObj<typeof GameHeader>;

export const Default: Story = {
  args: {
    keyword: '심장',
    limit: 180,
  },
};
