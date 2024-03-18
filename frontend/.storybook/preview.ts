import type { Preview } from '@storybook/react';
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'light',
          value: '#f6f6f6',
        },
        {
          name: 'dark',
          value: '#262626',
        },
      ],
    },
  },
};

export default preview;
