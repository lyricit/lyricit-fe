import type { Meta, StoryObj } from '@storybook/react';
import UserCard from './UserCard';

export default {
  title: 'UserCard',
  component: UserCard,
  argTypes: {
    nickname: { control: 'text' },
  },
} as Meta;

type Story = StoryObj<typeof UserCard>;

export const Default: Story = {
  args: {
    nickname: '일이삼사오육칠팔구십',
  },
};
