import type { ProfileProps } from '@/types/profile';
import GameProfile from './GameProfile';

export default function GameProfileList({ items }: { items: ProfileProps[] }) {
  if (items.length < 6) {
    for (let i = 0; i < 6 - items.length; i++) {
      items.push({
        nickname: '',
        score: 0,
        avatar: {
          faceType: 'default',
          decoType: 'default',
          skinColor: '#ffffff',
          decoColor: 'black',
        },
      });
    }
  }

  const profiles = [items.slice(0, 3), items.slice(3, 6)];
  return (
    <div>
      {profiles[0].map((profile, index) => (
        <GameProfile
          key={`${profile.nickname}-${index}`}
          avatar={profile.avatar}
          nickname={profile.nickname}
          score={profile.score}
        />
      ))}
    </div>
  );
}
