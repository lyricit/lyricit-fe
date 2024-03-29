import type { Meta, StoryObj } from '@storybook/react';
import RoomReadyButton from './RoomReadyButton';

export default {
  title: 'RoomReadyButton',
  component: RoomReadyButton,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
  argTypes: {
    isReady: { control: 'boolean' },
  },
} as Meta;

type Story = StoryObj<typeof RoomReadyButton>;

export const Ready: Story = {
  args: {
    isReady: true,
  },
};

export const NotReady: Story = {
  args: {
    isReady: false,
  },
};
