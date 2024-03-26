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
      { memberId: '1', nickname: '빨간딸기1234' },
      { memberId: '2', nickname: '파란딸기1234' },
      { memberId: '3', nickname: '초록딸기1234' },
      { memberId: '4', nickname: '노란딸기1234' },
      { memberId: '5', nickname: '보라딸기1234' },
      { memberId: '6', nickname: '주황딸기1234' },
      { memberId: '7', nickname: '검정딸기1234' },
      { memberId: '8', nickname: '하얀딸기1234' },
      { memberId: '9', nickname: '갈색딸기1234' },
      { memberId: '10', nickname: '분홍딸기1234' },
      { memberId: '11', nickname: '연두딸기1234' },
      { memberId: '12', nickname: '하늘딸기1234' },
      { memberId: '13', nickname: '남색딸기1234' },
    ],
  },
};
