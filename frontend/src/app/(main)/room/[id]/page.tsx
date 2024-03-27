import RoomProfile from '@/components/profile/room/RoomProfile';
import RoomHeader from '@/components/room/RoomHeader';

const Page = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 py-5">
      <div className="flex w-full items-center justify-center">
        <RoomHeader
          roundLimit={9}
          roundTime={120}
          isPublic={false}
          name={'아무나 들어와 ~ 비밀번호 1234'}
        />
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        <RoomProfile isMaster={true} isReady={true} />
        <RoomProfile isMaster={false} isReady={false} />
        <RoomProfile isMaster={false} isReady={true} />
        <RoomProfile isMaster={false} isReady={true} />
        <RoomProfile isMaster={false} isReady={true} />
        <RoomProfile isMaster={false} isReady={false} />
      </div>
      <div className="flex h-60 w-full items-start justify-start gap-5 px-10">
        {/* 채팅 컴포넌트 */}
        <section className="inline-flex h-full w-[920px] flex-col items-center justify-start overflow-clip rounded-[10px] bg-white pb-2.5">
          <div className="inline-flex h-full w-full select-text flex-col overflow-auto px-2.5">
            {/* 채팅 */}
          </div>
          <form className="inline-flex h-[30px] w-[900px] items-center justify-center overflow-clip rounded-[5px] border border-neutral-500 bg-white">
            <input
              type="text"
              className="shrink grow basis-0 self-stretch bg-white p-2.5"
            />
            <button
              type="submit"
              className="h-full w-[60px] bg-neutral-300 text-center leading-none"
            >
              전송
            </button>
          </form>
        </section>
        <div className="flex h-full w-[180px] flex-col items-start justify-center gap-5">
          <button
            type="button"
            className="w-full flex-grow rounded-[10px] bg-white font-bold text-3xl"
          >
            READY
          </button>
          <button
            type="button"
            className="h-10 w-full rounded-[10px] border-2 border-black border-opacity-20 bg-neutral-300 font-semibold"
          >
            나가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
