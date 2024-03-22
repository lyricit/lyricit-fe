import type { Meta, StoryObj } from '@storybook/react';
import Nickname from './Nickname';

export default {
  title: 'Nickname',
  component: Nickname,
} as Meta;

type Story = StoryObj<typeof Nickname>;

export const Default: Story = {
  args: {
    nickname: '일이삼사오육칠팔구십',
  },
};
