import type { Meta, StoryObj } from '@storybook/react';
import GameLyric from './GameLyric';

export default {
  title: 'GameLyric',
  component: GameLyric,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    lyric: {
      control: 'text',
    },
  },
} as Meta;

type Story = StoryObj<typeof GameLyric>;

export const Default: Story = {
  args: {
    lyric: '내 심장의 색깔은 black',
  },
};
