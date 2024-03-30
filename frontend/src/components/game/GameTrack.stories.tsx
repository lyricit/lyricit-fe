import type { Meta, StoryObj } from '@storybook/react';
import GameTrack from './GameTrack';

export default {
  title: 'GameTrack',
  component: GameTrack,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    title: { control: 'text' },
    artist: { control: 'text' },
  },
} as Meta;

type Story = StoryObj<typeof GameTrack>;

export const Default: Story = {
  args: {
    title: 'Black',
    artist: 'G-DRAGON',
  },
};
