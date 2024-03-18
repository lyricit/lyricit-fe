import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '.';

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    size: { control: 'number' },
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
} as Meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    size: 120,
    skinColor: '#ffb84c',
    decoColor: undefined,
    faceType: 'default',
    decoType: 'default',
  },
};
