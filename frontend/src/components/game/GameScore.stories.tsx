import type { Meta, StoryObj } from '@storybook/react';
import GameScore from './GameScore';

export default {
  title: 'GameScore',
  component: GameScore,
  argTypes: {
    score: { control: { type: 'number', min: 0, max: 999999 } },
    nickname: { control: 'text' },
    isCorrect: { control: 'boolean' },
  },
} as Meta;

type Story = StoryObj<typeof GameScore>;

export const Correct: Story = {
  args: {
    score: 100,
    nickname: '일이삼사오육칠팔구십',
    isCorrect: true,
  },
};

export const Incorrect: Story = {
  args: {
    score: 0,
    nickname: '일이삼사오육칠팔구십',
    isCorrect: false,
  },
};
