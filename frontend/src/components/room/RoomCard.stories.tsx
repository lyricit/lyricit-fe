import type { Meta, StoryObj } from '@storybook/react';
import RoomCard from './RoomCard';

export default {
  title: 'RoomCard',
  component: RoomCard,
  argTypes: {
    id: { control: 'number' },
    title: { control: 'text' },
    status: { control: 'select', options: ['waiting', 'playing'] },
    isOpen: { control: 'boolean' },
    current: { control: { type: 'number', min: 1, max: 6 } },
    limit: { control: { type: 'number', min: 2, max: 6 } },
  },
} as Meta;

type Story = StoryObj<typeof RoomCard>;

export const Waiting: Story = {
  args: {
    id: 123,
    title: '방 제목',
    status: 'waiting',
    isOpen: true,
    current: 1,
    limit: 6,
  },
};

export const Playing: Story = {
  args: {
    id: 123,
    title: '방 제목',
    status: 'playing',
    isOpen: true,
    current: 1,
    limit: 6,
  },
};
