import type { Meta, StoryObj } from '@storybook/react';
import GameSignal from './GameSignal';

export default {
  title: 'GameSignal',
  component: GameSignal,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    signal: { control: 'text' },
  },
} as Meta;

type Story = StoryObj<typeof GameSignal>;

export const Ready: Story = {
  args: {
    signal: 'READY...',
  },
};

export const Start: Story = {
  args: {
    signal: 'START!',
  },
};
