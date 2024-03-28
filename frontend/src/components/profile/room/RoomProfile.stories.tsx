import type { Meta, StoryObj } from '@storybook/react';
import RoomProfile from './RoomProfile';

export default {
  title: 'RoomProfile',
  component: RoomProfile,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
  args: {
    isMaster: false,
    info: {
      member: {
        memberId: '',
        nickname: 'nickname',
        faceType: 'default',
        decoType: 'default',
        decoColor: '#2f3d57',
        skinColor: '#ff9f00',
      },
      isReady: false,
    },
  },
} as Meta;

type Story = StoryObj<typeof RoomProfile>;

export const Default: Story = {
  args: {
    isMaster: false,
    info: {
      member: {
        memberId: '',
        nickname: 'nickname',
        faceType: 'default',
        decoType: 'default',
        decoColor: '#2f3d57',
        skinColor: '#ff9f00',
      },
      isReady: false,
    },
  },
};

export const Ready: Story = {
  args: {
    isMaster: false,
    info: {
      member: {
        memberId: '',
        nickname: 'nickname',
        faceType: 'default',
        decoType: 'default',
        decoColor: '#2f3d57',
        skinColor: '#ff9f00',
      },
      isReady: true,
    },
  },
};

export const Master: Story = {
  args: {
    isMaster: true,
    info: {
      member: {
        memberId: '',
        nickname: 'nickname',
        faceType: 'default',
        decoType: 'default',
        decoColor: '#2f3d57',
        skinColor: '#ff9f00',
      },
      isReady: false,
    },
  },
};
