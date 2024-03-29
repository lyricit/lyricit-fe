import type { Meta, StoryObj } from '@storybook/react';
import GameProgressBar from './GameProgressBar';

export default {
  title: 'GameProgressBar',
  component: GameProgressBar,
  argTypes: {
    total: { control: { type: 'number', min: 0, max: 240 } },
    remaining: { control: { type: 'number', min: 0, max: 240 } },
    color: { control: 'radio', options: ['yellow', 'sky'] },
  },
} as Meta;

type Story = StoryObj<typeof GameProgressBar>;

export const Round: Story = {
  args: {
    total: 240,
    remaining: 200,
    color: 'yellow',
  },
};

export const Player: Story = {
  args: {
    total: 10,
    remaining: 8,
    color: 'sky',
  },
};
