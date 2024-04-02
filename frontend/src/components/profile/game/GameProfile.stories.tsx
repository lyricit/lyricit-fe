import type { Meta, StoryObj } from '@storybook/react';
import GameProfile from './GameProfile';

export default {
  title: 'GameProfile',
  component: GameProfile,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
  args: {
    nickname: { control: 'text' },
    score: { control: 'number' },
    avatar: { control: 'object' },
    isHighlighted: { control: 'boolean' },
  },
} as Meta;

type Story = StoryObj<typeof GameProfile>;

export const Default: Story = {
  args: {
    nickname: '일이삼사오육칠팔구십',
    score: 99999,
    avatar: {
      faceType: 'default',
      decoType: 'default',
      skinColor: '#ffffff',
      decoColor: 'black',
    },
    isHighlighted: false,
  },
};

export const Empty: Story = {
  args: {
    nickname: '',
    score: 0,
    avatar: {
      faceType: 'default',
      decoType: 'default',
      skinColor: '#ffffff',
      decoColor: 'black',
    },
    isHighlighted: false,
  },
};

export const Highlighted: Story = {
  args: {
    nickname: '일이삼사오육칠팔구십',
    score: 99999,
    avatar: {
      faceType: 'default',
      decoType: 'default',
      skinColor: '#ffffff',
      decoColor: 'black',
    },
    isHighlighted: true,
  },
};
