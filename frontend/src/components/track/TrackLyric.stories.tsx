import type { Meta, StoryObj } from '@storybook/react';
import TrackLyric from './TrackLyric';

export default {
  title: 'TrackLyric',
  component: TrackLyric,
  argTypes: {
    lyric: { control: 'text' },
    keyword: { control: 'text' },
  },
} as Meta;

type Story = StoryObj<typeof TrackLyric>;

export const Default: Story = {
  args: {
    lyric: `또 모르지 내 마음이
저 날씨처럼 바뀔지
날 나조차 다 알 수 없으니
그게 뭐가 중요하니
지금 네게 완전히
푹 빠졌단 게 중요한 거지
아마 꿈만 같겠지만
분명 꿈이 아니야
달리 설명할 수 없는
이건 사랑일 거야
방금 내가 말한 감정
감히 의심하지 마
그냥 좋다는 게 아냐
What's after 'LIKE'?
You and I
It's more than 'LIKE'
L 다음 또 O 다음 난 yeah
You and I
It's more than 'LIKE'
What's after 'LIKE'?
What's after 'LIKE'?
조심해 두 심장에 핀
새파란 이 불꽃이
저 태양보다 뜨거울 테니
난 저 위로 또 아래로
내 그래프는 폭이 커
Yeah that's me
두 번 세 번 피곤하게
자꾸 질문하지 마
내 장점이 뭔지 알아?
바로 솔직한 거야
방금 내가 말한 감정
감히 의심하지 마
그냥 좋다는 게 아냐
What's after 'LIKE'?
You and I
It's more than 'LIKE'
L 다음 또 O 다음 난 yeah
You and I
It's more than 'LIKE'
What's after 'LIKE'?
What's after 'LIKE'?
What after like 내 맘에 strike
지금 느낀 짜릿함은 마치 tike
LO 다음에 I 그 다음에 VE
여긴 너와 내 space
아무도 막지 못해
나를 보면 눈 깜빡할
시간 조차도 아까울 걸
드디어 만나 반가워
LOVE 사이 놓일 I
(What's after 'LIKE'?)
You and I
It's more than 'LIKE'
E 앞 또 V 앞 난 yeah
You and I
It's more than 'LIKE'
What's after 'LIKE'?
You and I
It's more than 'LIKE'
L 다음 또 O 다음 난 yeah
You and I
It's more than 'LIKE'
What's after 'LIKE'?
What's after 'LIKE'?`,
    keyword: '심장',
  },
};
