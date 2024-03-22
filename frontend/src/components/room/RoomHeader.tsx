import { IoMdLock } from 'react-icons/io';
const RoomHeader = ({
  roundLimit,
  roundTime,
  isPublic,
  name,
}: {
  roundLimit: number;
  roundTime: number;
  isPublic: boolean;
  name: string;
}) => {
  return (
    <div className="inline-flex h-[51px] w-[1121px] items-start justify-start gap-2.5 rounded-[10px] bg-black bg-opacity-40 p-2.5">
      <div className="flex w-25 items-center justify-center gap-2.5 self-stretch rounded-[10px] bg-neutral-300 px-5 py-[5px]">
        <div className="text-center font-semibold text-base text-white leading-tight">
          {roundLimit}라운드
        </div>
      </div>
      <div className="flex w-25 items-center justify-center gap-2.5 self-stretch rounded-[10px] bg-neutral-300 px-5 py-[5px]">
        <div className="text-center font-semibold text-base text-white leading-tight">
          {roundTime}초
        </div>
      </div>
      <div className="inline-flex h-[31px] shrink grow basis-0 flex-col items-center justify-center gap-2.5">
        <div className="inline-flex h-[31px] w-64 items-center justify-center gap-2.5 rounded-[10px] px-5 py-[5px]">
          <div className="flex items-center justify-center gap-2.5">
            <div className="flex items-center justify-center" />
          </div>
          {isPublic ? null : <IoMdLock color="white" />}
          <div className="text-center font-semibold text-base text-white leading-tight">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomHeader;
