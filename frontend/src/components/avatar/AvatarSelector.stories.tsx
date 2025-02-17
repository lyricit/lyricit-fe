import { AvatarProvider } from '@/providers/AvatarProvider';
import type { Meta, StoryObj } from '@storybook/react';
import AvatarSelector from './AvatarSelector';

export default {
  title: 'AvatarSelector',
  component: AvatarSelector,
  decorators: [
    (Story) => (
      <AvatarProvider>
        <Story />
      </AvatarProvider>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof AvatarSelector>;

export const Default: Story = {};
