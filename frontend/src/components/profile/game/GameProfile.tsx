import { Avatar } from '@/components/avatar';
import type { ProfileProps } from '@/types/profile';
import Score from './Score';
import { cn } from '@/utils';

const GameProfile = ({
  avatar,
  nickname,
  score,
  isHighlighted,
}: ProfileProps) => {
  return (
    <div
      className={cn(
        'flex h-[130px] w-[265px] items-center justify-evenly rounded-[10px] border-2 border-black bg-white',
        isHighlighted && 'border-emerald-500 drop-shadow-3xl',
      )}
    >
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
