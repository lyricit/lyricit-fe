import type { DecorationKeys, FaceKeys } from '@/types/avatar';
import type { GameRoomMember } from '@/types/game';
import GameProfile from './GameProfile';

export default function GameProfileList({
  position,
  items,
}: { position: string; items: GameRoomMember[] }) {
  if (items.length < 3) {
    for (let i = 0; i < 3 - items.length; i++) {
      items.push({
        member: {
          memberId: '',
          nickname: '',
          decoType: 'default',
          faceType: 'default',
          decoColor: '#ffffff',
          skinColor: '#ffffff',
        },
        score: 0,
      });
    }
  }

  return (
    <div className="flex h-full grow flex-col justify-between">
      {items.map((profile, index) => (
        <GameProfile
          key={`${position}-${
            profile.member.nickname === '' ? 'empty' : profile.member.nickname
          }-${index}`}
          avatar={{
            faceType: profile.member.faceType as keyof typeof FaceKeys,
            decoType: profile.member.decoType as keyof typeof DecorationKeys,
            skinColor: profile.member.skinColor,
            decoColor: profile.member.decoColor,
          }}
          nickname={profile.member.nickname}
          score={profile.score}
        />
      ))}
    </div>
  );
}
