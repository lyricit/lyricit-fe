import type { Meta, StoryObj } from '@storybook/react';
import RoomHeader from './RoomHeader';

export default {
  title: 'RoomHeader',
  component: RoomHeader,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
  argTypes: {
    roundLimit: {
      control: {
        type: 'number',
        min: 3,
        max: 10,
      },
    },
    roundTime: {
      control: {
        type: 'number',
        min: 60,
        max: 240,
        step: 30,
      },
    },
    isPublic: { control: 'boolean' },
    name: { control: 'text' },
  },
} as Meta;

type Story = StoryObj<typeof RoomHeader>;

export const Default: Story = {
  args: {
    roundLimit: 3,
    roundTime: 30,
    isPublic: true,
    name: '공개 방 이름',
  },
};

export const Private: Story = {
  args: {
    roundLimit: 3,
    roundTime: 30,
    isPublic: false,
    name: '비공개 방 이름',
  },
};
