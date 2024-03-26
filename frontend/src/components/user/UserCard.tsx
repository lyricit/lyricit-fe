import { Avatar } from '../avatar';

const UserCard = ({
  nickname,
}: {
  nickname: string;
}) => {
  return (
    <section className="wrap inline-flex flex-col items-center justify-center rounded-[10px] bg-white">
      <div className="h-[26px] w-[150px] items-center justify-center rounded-t-lg border-black border-b-2 border-opacity-10 bg-neutral-300 text-center">
        <span className="font-semibold text-neutral-800 leading-none">
          내 정보
        </span>
      </div>
      <Avatar />
      <div className="h-[26px] w-[150px] items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap rounded-b-lg border-opacity-10 bg-amber-300 text-center">
        <span className="font-semibold text-sm leading-none">{nickname}</span>
      </div>
    </section>
  );
};

export default UserCard;
