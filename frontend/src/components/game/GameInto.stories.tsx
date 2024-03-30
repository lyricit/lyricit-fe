import type { Meta, StoryObj } from '@storybook/react';
import GameIntro from './GameIntro';

export default {
  title: 'GameIntro',
  component: GameIntro,
} as Meta;

type Story = StoryObj<typeof GameIntro>;

export const Default: Story = {
  args: {},
};
