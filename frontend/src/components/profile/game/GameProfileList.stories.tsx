import type { Meta, StoryObj } from '@storybook/react';
import GameProfileList from './GameProfileList';

export default {
  title: 'GameProfileList',
  component: GameProfileList,
  decorators: [(story) => <div>{story()}</div>],
  argTypes: {
    items: {},
  },
} as Meta;

type Story = StoryObj<typeof GameProfileList>;

export const Default: Story = {
  args: {
    items: [
      {
        member: {
          memberId: '',
          nickname: 'nickname 1',
          decoType: 'default',
          faceType: 'default',
          decoColor: '#000000',
          skinColor: '#ff00f0',
        },
        score: 16200,
      },
      {
        member: {
          memberId: '',
          nickname: 'nickname 2',
          decoType: 'default',
          faceType: 'default',
          decoColor: '#000000',
          skinColor: '#ff2546',
        },
        score: 22400,
      },
    ],
  },
};
