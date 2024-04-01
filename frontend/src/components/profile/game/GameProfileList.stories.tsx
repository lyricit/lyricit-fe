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
        nickname: 'itsmo',
        score: 16200,
        avatar: {
          faceType: 'default',
          decoType: 'cap',
          skinColor: '#ffffff',
          decoColor: '#000000',
        },
      },
      {
        nickname: 'kimgiraffe',
        score: 22400,
        avatar: {
          faceType: 'default',
          decoType: 'mask',
          skinColor: '#ffe100',
          decoColor: '#ffffff',
        },
      },
    ],
  },
};
