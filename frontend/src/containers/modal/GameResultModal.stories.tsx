import type { Meta, StoryObj } from '@storybook/react';
import GameResultModal from './GameResultModal';

export default {
  title: 'GameResultModal',
  component: GameResultModal,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
  argTypes: {},
} as Meta;

type Story = StoryObj<typeof GameResultModal>;

export const Default: Story = {
  args: {},
};
