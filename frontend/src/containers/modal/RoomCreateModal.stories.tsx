import type { Meta, StoryObj } from '@storybook/react';
import RoomCreateModal from './RoomCreateModal';

export default {
  title: 'RoomCreateModal',
  component: RoomCreateModal,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
  argTypes: {},
} as Meta;

type Story = StoryObj<typeof RoomCreateModal>;

export const Default: Story = {
  args: {},
};
