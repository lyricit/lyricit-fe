import type { Preview } from '@storybook/react';
import React from 'react';
import {
  Chab,
  Katuri,
  KotraHope,
  LogoFont,
  Pretendard,
} from '../src/app/fonts';
import '../src/app/globals.css';
import { cn } from '../src/utils';

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
  decorators: [
    (Story) => (
      <div
        className={cn(
          Pretendard.variable,
          LogoFont.variable,
          Chab.variable,
          KotraHope.variable,
          Katuri.variable,
          'font-pretendard',
        )}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
