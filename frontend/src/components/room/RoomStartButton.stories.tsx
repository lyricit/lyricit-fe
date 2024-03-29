import type { Meta, StoryObj } from '@storybook/react';
import RoomStartButton from './RoomStartButton';

export default {
  title: 'RoomStartButton',
  component: RoomStartButton,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
  argTypes: {
    isReady: { control: 'boolean' },
  },
} as Meta;

type Story = StoryObj<typeof RoomStartButton>;

export const Start: Story = {
  args: {
    isReady: true,
  },
};

export const Waiting: Story = {
  args: {
    isReady: false,
  },
};
