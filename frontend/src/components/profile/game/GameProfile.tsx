import { Avatar } from '@/components/avatar';
import type { AvatarType } from '@/types/avatar';
import Nickname from '../Nickname';
import Score from './Score';

const GameProfile = ({
  avatar,
  nickname,
  score,
}: { avatar: AvatarType; nickname: string; score: number }) => {
  return (
    <div className="flex h-[130px] w-[265px] items-center justify-evenly rounded-[10px] border-2 border-black bg-white">
      <div>
        {nickname === '' ? null : (
          <Avatar
            size={100}
            faceType={avatar.faceType}
            decoType={avatar.decoType}
            skinColor={avatar.skinColor}
            decoColor={avatar.decoColor}
          />
        )}
      </div>
      <div className="mr-2 flex h-[120px] flex-col items-center justify-center gap-2.5">
        <span className="font-semibold">{nickname}</span>
        {nickname === '' ? null : <Score score={score} />}
      </div>
    </div>
  );
};

export default GameProfile;
