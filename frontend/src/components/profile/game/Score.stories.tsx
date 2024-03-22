import type { Meta, StoryObj } from '@storybook/react';
import Score from './Score';

export default {
  title: 'Score',
  component: Score,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
} as Meta;

type Story = StoryObj<typeof Score>;

export const Default: Story = {
  args: {
    score: 99999,
  },
};
