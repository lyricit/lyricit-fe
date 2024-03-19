import type { Meta, StoryObj } from '@storybook/react';
import RoomCardList from './RoomCardList';

export default {
  title: 'RoomCardList',
  component: RoomCardList,
  decorators: [(story) => <div>{story()}</div>],
  argTypes: {
    items: {},
  },
} as Meta;

type Story = StoryObj<typeof RoomCardList>;

export const Default: Story = {
  args: {
    items: [
      {
        id: 1,
        title: '방 제목',
        status: 'waiting',
        isOpen: true,
        current: 1,
        limit: 6,
      },
      {
        id: 2,
        title: '방 제목',
        status: 'playing',
        isOpen: false,
        current: 3,
        limit: 6,
      },
      {
        id: 3,
        title: '방 제목',
        status: 'waiting',
        isOpen: false,
        current: 1,
        limit: 6,
      },
      {
        id: 4,
        title: '방 제목',
        status: 'waiting',
        isOpen: true,
        current: 3,
        limit: 6,
      },
      {
        id: 5,
        title: '방 제목',
        status: 'waiting',
        isOpen: true,
        current: 2,
        limit: 6,
      },
      {
        id: 6,
        title: '방 제목',
        status: 'playing',
        isOpen: true,
        current: 3,
        limit: 6,
      },
      {
        id: 7,
        title: '방 제목',
        status: 'waiting',
        isOpen: true,
        current: 1,
        limit: 6,
      },
      {
        id: 8,
        title: '방 제목',
        status: 'playing',
        isOpen: true,
        current: 1,
        limit: 6,
      },
    ],
  },
};
