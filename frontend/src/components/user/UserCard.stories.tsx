import type { Meta, StoryObj } from '@storybook/react';
import UserCard from './UserCard';

export default {
  title: 'UserCard',
  component: UserCard,
  argTypes: {
    nickname: { control: 'text' },
    avatar: {
      skinColor: { control: 'color' },
      decoColor: { control: 'color' },
      faceType: {
        control: 'select',
        options: [
          'default',
          'blank',
          'boo',
          'cat',
          'disappointed',
          'nyah',
          'smirk',
          'surprised',
          'unpleased',
          'w',
        ],
      },
      decoType: {
        control: 'select',
        options: [
          'default',
          'beanie',
          'beanieCat',
          'bob',
          'cap',
          'goggle',
          'mask',
          'mohican',
          'mole',
        ],
      },
    },
  },
} as Meta;

type Story = StoryObj<typeof UserCard>;

export const Default: Story = {
  args: {
    nickname: '일이삼사오육칠팔구십',
    avatar: {
      skinColor: '#ffb84c',
      decoColor: '#f266ab',
      faceType: 'default',
      decoType: 'default',
    },
  },
};
