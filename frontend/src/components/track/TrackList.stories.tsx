import type { Meta, StoryObj } from '@storybook/react';
import TrackList from './TrackList';

export default {
  title: 'TrackList',
  component: TrackList,
  decorators: [(story) => <div>{story()}</div>],
  argTypes: {
    items: {},
  },
} as Meta;

type Story = StoryObj<typeof TrackList>;

export const Default: Story = {
  args: {
    items: [
      {
        src: 'https://cdnimg.melon.co.kr/cm2/album/images/110/34/298/11034298_20220822101843_500.jpg?d34a229786bda1750cf7718abdc6b869/melon/resize/282/quality/80/optimize',
        title: 'After LIKE',
        artist: 'IVE (아이브)',
      },
      {
        src: 'https://cdnimg.melon.co.kr/cm2/album/images/107/78/556/10778556_20211116105621_500.jpg?7388a25c12a4273eb8820ddc7d7a4648/melon/resize/282/quality/80/optimize',
        title: '오르트구름',
        artist: '윤하',
      },
      {
        src: 'https://cdnimg.melon.co.kr/cm2/album/images/112/34/678/11234678_20230502162327_500.jpg?YUV444-90/melon/resize/282',
        title: '이브, 프시케 그리고 푸른 수염의 아내',
        artist: 'LE SSERAFIM(르세라핌)',
      },
    ],
  },
};
