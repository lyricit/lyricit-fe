import type { MemberType } from '@/app/(main)/room/[id]/page';
import { Avatar } from '@/components/avatar';
import type { DecorationKeys, FaceKeys } from '@/types/avatar';
import Nickname from '../Nickname';

const RoomProfile = ({
  info,
  isMaster,
}: { info: MemberType; isMaster: boolean }) => {
  return (
    <section className="relative inline-flex h-[200px] w-[180px] flex-col items-center justify-start overflow-clip rounded-[10px] border-2 border-black bg-white pt-2">
      <Nickname nickname={info.member.nickname} />
      <Avatar
        faceType={info.member.faceType as keyof typeof FaceKeys}
        decoType={info.member.decoType as keyof typeof DecorationKeys}
        decoColor={info.member.decoColor}
        skinColor={info.member.skinColor}
      />
      <div className="absolute bottom-0 h-9 w-[178px]">
        {/* 방장이거나 준비완료, 준비완료 상태에서는 색상 변경*/}
        {isMaster ? (
          <div className="inline-flex h-full w-full items-center justify-center rounded-b-[8px] border-black bg-gradient-to-l from-rose-600 to-sky-400">
            <span className="relative z-0 text-center font-semibold text-sm text-stroke text-white leading-none after:text-stroke-black after:text-stroke-width-2 after:content-['방장']">
              {isMaster ? '방장' : null}
            </span>
          </div>
        ) : info.isReady ? (
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
