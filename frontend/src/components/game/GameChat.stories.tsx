import type { Meta, StoryObj } from '@storybook/react';
import GameChat from './GameChat';

export default {
  title: 'GameChat',
  component: GameChat,
  argTypes: {
    announce: { control: 'boolean' },
    nickname: { control: 'text' },
    correct: { control: 'boolean' },
  },
} as Meta;

type Story = StoryObj<typeof GameChat>;

export const Correct: Story = {};
