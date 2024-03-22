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
    isReady: false,
  },
} as Meta;

type Story = StoryObj<typeof RoomProfile>;

export const Default: Story = {
  args: {
    isMaster: false,
    isReady: false,
  },
};

export const Ready: Story = {
  args: {
    isMaster: false,
    isReady: true,
  },
};

export const Master: Story = {
  args: {
    isMaster: true,
    isReady: true,
  },
};
