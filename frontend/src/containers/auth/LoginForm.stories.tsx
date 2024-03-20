import { AvatarProvider } from '@/providers/AvatarProvider';
import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';

export default {
  title: 'LoginForm',
  component: LoginForm,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
  decorators: [
    (Story) => (
      <AvatarProvider>
        <div className="flex flex-grow">
          <Story />
        </div>
      </AvatarProvider>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};
