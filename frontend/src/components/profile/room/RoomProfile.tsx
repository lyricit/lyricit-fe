import { Avatar } from '@/components/avatar';
import Nickname from '../Nickname';
const RoomProfile = ({
  isMaster,
  isReady,
}: { isMaster: boolean; isReady: boolean }) => {
  return (
    <section className="relative inline-flex h-[200px] w-[180px] flex-col items-center justify-start overflow-clip rounded-[10px] border-2 border-black bg-white pt-2">
      <Nickname nickname={'일이삼사오육칠팔구십'} />
      <Avatar />
      <div className="absolute bottom-0 h-9 w-[178px]">
        {/* 방장이거나 준비완료, 준비완료 상태에서는 색상 변경*/}
        {isMaster ? (
          <div className="inline-flex h-full w-full items-center justify-center rounded-b-[8px] border-black bg-gradient-to-l from-rose-600 to-sky-400">
            <span className="relative z-0 text-center font-semibold text-sm text-stroke text-white leading-none after:text-stroke-black after:text-stroke-width-2 after:content-['방장']">
              {isMaster ? '방장' : null}
            </span>
          </div>
        ) : isReady ? (
          <div className="inline-flex h-full w-full items-center justify-center rounded-b-[8px] border-black bg-amber-300">
            <span className="relative z-0 text-center font-semibold text-sm text-stroke text-white leading-none after:text-stroke-black after:text-stroke-width-2 after:content-['준비완료']">
              준비완료
            </span>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default RoomProfile;
