import type { Meta, StoryObj } from '@storybook/react';
import GameRound from './GameRound';

export default {
  title: 'GameRound',
  component: GameRound,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
  argTypes: {
    round: {
      control: {
        type: 'number',
        min: 1,
        max: 9,
      },
    },
  },
} as Meta;

type Story = StoryObj<typeof GameRound>;

export const Default: Story = {
  args: {
    round: 1,
  },
};
