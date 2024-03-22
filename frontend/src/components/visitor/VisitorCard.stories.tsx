import type { Meta, StoryObj } from '@storybook/react';
import VisitorCard from './VisitorCard';

export default {
  title: 'VisitorCard',
  component: VisitorCard,
  decorators: [(story) => <div>{story()}</div>],
  argTypes: {
    items: {},
  },
} as Meta;

type Story = StoryObj<typeof VisitorCard>;

export const Default: Story = {
  args: {
    items: [
      '빨간딸기1234',
      '파란딸기1234',
      '초록딸기1234',
      '노란딸기1234',
      '보라딸기1234',
      '주황딸기1234',
      '검정딸기1234',
      '하얀딸기1234',
      '갈색딸기1234',
      '분홍딸기1234',
      '연두딸기1234',
      '하늘딸기1234',
      '남색딸기1234',
    ],
  },
};
