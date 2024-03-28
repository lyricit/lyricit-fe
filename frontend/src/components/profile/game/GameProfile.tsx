import { Avatar } from '@/components/avatar';
import Nickname from '../Nickname';
import Score from './Score';

const GameProfile = ({
  nickname,
  score,
}: { nickname: string; score: number }) => {
  return (
    <div className="inline-flex h-[130px] items-center justify-center rounded-[10px] border-2 border-black bg-white pr-2">
      <div>
        <Avatar />
      </div>
      <div className="inline-flex h-[120px] flex-col items-center justify-center gap-2.5">
        <Nickname nickname={nickname} />
        <Score score={score} />
      </div>
    </div>
  );
};

export default GameProfile;
