import type { Meta, StoryObj } from '@storybook/react';
import TrackItem from './TrackItem';

export default {
  title: 'TrackItem',
  component: TrackItem,
  argTypes: {
    src: { control: 'text' },
    title: { control: 'text' },
    artist: { control: 'text' },
  },
} as Meta;

type Story = StoryObj<typeof TrackItem>;

export const Default: Story = {
  args: {
    src: 'https://cdnimg.melon.co.kr/cm2/album/images/110/34/298/11034298_20220822101843_500.jpg?d34a229786bda1750cf7718abdc6b869/melon/resize/282/quality/80/optimize',
    title: 'After LIKE',
    artist: 'IVE (아이브)',
  },
};
