import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      red: colors.red,
      yellow: colors.yellow,
      pink: {
        '50': '#fdf2f8',
        '100': '#fce7f2',
        '200': '#fbcfe7',
        '300': '#f8a9d2',
        '400': '#f266ab',
        '500': '#eb4994',
        '600': '#da2872',
        '700': '#bd1958',
        '800': '#9c1849',
        '900': '#821940',
        '950': '#4f0822',
      },
      amber: {
        '50': '#fffaed',
        '100': '#fff4d4',
        '200': '#ffe4a8',
        '300': '#ffd071',
        '400': '#ffb84c',
        '500': '#fe9611',
        '600': '#ef7b07',
        '700': '#c65c08',
        '800': '#9d490f',
        '900': '#7e3d10',
        '950': '#441c06',
      },
      sky: {
        '50': '#edfefe',
        '100': '#d2fafb',
        '200': '#aaf3f7',
        '300': '#70e8f0',
        '400': '#2cd3e1',
        '500': '#13b7c7',
        '600': '#1393a7',
        '700': '#167588',
        '800': '#1b606f',
        '900': '#1b505e',
        '950': '#0c3440',
      },
      neutral: {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#262626',
      },
      emerald: {
        '50': '#eafff6',
        '100': '#cdfee8',
        '200': '#a0fad6',
        '300': '#63f2c1',
        '400': '#25e2a8',
        '500': '#00dfa2',
        '600': '#00a477',
        '700': '#008364',
        '800': '#006750',
        '900': '#005543',
        '950': '#003027',
      },
      rose: {
        '50': '#ffeff3',
        '100': '#ffe0e8',
        '200': '#ffc6d7',
        '300': '#ff97b5',
        '400': '#ff5d8f',
        '500': '#ff246e',
        '600': '#ff0060',
        '700': '#d70051',
        '800': '#b4004c',
        '900': '#990248',
        '950': '#570022',
      },
      violet: {
        '50': '#fbf6fe',
        '100': '#f5e9fe',
        '200': '#eed7fd',
        '300': '#e0b8fa',
        '400': '#cd8bf5',
        '500': '#b95eee',
        '600': '#a53de0',
        '700': '#8f2cc4',
        '800': '#7829a0',
        '900': '#6b258c',
        '950': '#440c5f',
      },
      black: '#262626',
      white: '#f6f6f6',
      primary: 'rgb(var(--color-primary))',
      secondary: 'rgb(var(--color-secondary))',
      tertiary: 'rgb(var(--color-tertiary))',
    },
    extend: {
      fontFamily: {
        logo: ['var(--font-logo)'],
        pretendard: ['var(--font-pretendard)'],
        chab: ['var(--font-chab)'],
        kotra: ['var(--font-kotra)'],
        katuri: ['var(--font-katuri)'],
      },
      textShadow: {
        logo: {
          lg: '0px 0px 20px currentColor, 0px 0px 50px currentColor, 0px 0px 100px currentColor, 0px 0px 100px currentColor',
        },
      },
      keyframes: {
        flicker: {
          '0%': {
            'text-shadow': 'none',
            '-webkit-text-stroke-color':
              'color-mix(in srgb, currentColor 50%, transparent)',
          },
          '2%': {
            'text-shadow':
              '0px 0px 20px currentColor, 0px 0px 50px currentColor, 0px 0px 100px currentColor, 0px 0px 100px currentColor',
            '-webkit-text-stroke-color': 'currentColor',
          },
          '4%': {
            'text-shadow': 'none',
            '-webkit-text-stroke-color':
              'color-mix(in srgb, currentColor 50%, transparent)',
          },
          '6%': {
            'text-shadow':
              '0px 0px 20px currentColor, 0px 0px 50px currentColor, 0px 0px 100px currentColor, 0px 0px 100px currentColor',
            '-webkit-text-stroke-color': 'currentColor',
          },
          '8%': {
            'text-shadow': 'none',
            '-webkit-text-stroke-color':
              'color-mix(in srgb, currentColor 50%, transparent)',
          },
          '10%': {
            'text-shadow':
              '0px 0px 20px currentColor, 0px 0px 50px currentColor, 0px 0px 100px currentColor, 0px 0px 100px currentColor',
            '-webkit-text-stroke-color': 'currentColor',
          },
          '14%': {
            'text-shadow': 'none',
            '-webkit-text-stroke-color':
              'color-mix(in srgb, currentColor 50%, transparent)',
          },
          '20%': {
            'text-shadow':
              '0px 0px 20px currentColor, 0px 0px 50px currentColor, 0px 0px 100px currentColor, 0px 0px 100px currentColor',
            '-webkit-text-stroke-color': 'currentColor',
          },
          '88%': {
            'text-shadow':
              '0px 0px 20px currentColor, 0px 0px 50px currentColor, 0px 0px 100px currentColor, 0px 0px 100px currentColor',
            '-webkit-text-stroke-color': 'currentColor',
          },
          '100%': {
            'text-shadow':
              '0px 0px 20px currentColor, 0px 0px 50px currentColor, 0px 0px 100px currentColor, 0px 0px 100px currentColor',
            '-webkit-text-stroke-color': 'currentColor',
          },
        },
        blink: {
          '50%': {
            opacity: '0',
          },
        },
      },
      animation: {
        flickering: 'flicker 8s 1s forwards',
        blinking: 'blink 1.5s step-end infinite',
      },
      boxShadow: {
        'custom-pink': '0px 0px 40px 0px rgba(242, 102, 171, 0.50)',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
};
export default config;
