import RoomCardList from '@/components/room/RoomCardList';
import UserCard from '@/components/user/UserCard';
import VisitorCard from '@/components/visitor/VisitorCard';
import type { RoomProps } from '@/types/room';
import Image from 'next/image';

export default function Page() {
  const getRoomList: () => RoomProps[] = () => [
    {
      id: 1,
      title: '방 제목 1',
      status: 'waiting',
      isOpen: true,
      current: 1,
      limit: 4,
    },
    {
      id: 2,
      title: '방 제목 2',
      status: 'waiting',
      isOpen: true,
      current: 2,
      limit: 4,
    },
    {
      id: 3,
      title: '방 제목 3',
      status: 'waiting',
      isOpen: true,
      current: 3,
      limit: 4,
    },
    {
      id: 4,
      title: '방 제목 4',
      status: 'waiting',
      isOpen: true,
      current: 4,
      limit: 4,
    },
  ];

  return (
    <div>
      <Image
        src={'/main-background.jpg'}
        alt="background image"
        className="-z-20 object-cover object-top"
        fill
      />
      <div>
        <div className="inline-flex h-[567px] w-[1200px] flex-row items-start justify-start rounded-[20px] bg-white bg-opacity-30 p-5 backdrop-blur-[20px]">
          <div className="flex h-[567px] w-[795px] flex-col items-center justify-start gap-6">
            <div className="inline-flex w-full items-end justify-between px-3">
              <div className="inline-flex gap-2.5">
                <button
                  type="button"
                  className="items-start justify-center rounded-[5px] border-2 border-black border-opacity-20 bg-pink-400 px-5 py-1.5 font-semibold text-white"
                >
                  번호순
                </button>
                <button
                  type="button"
                  className="items-start justify-center rounded-[5px] border-2 border-black border-opacity-20 bg-neutral-300 px-5 py-1.5 font-semibold"
                >
                  빈방순
                </button>
              </div>
              <button
                type="button"
                className="rounded-[10px] border-2 border-black border-opacity-20 bg-neutral-300 px-6 py-3 font-semibold leading-tight"
              >
                방 만들기
              </button>
            </div>
            <RoomCardList items={getRoomList()} />
          </div>
          <div className="inline-flex h-[567px] w-[387px] flex-col items-center justify-start gap-2.5">
            <div className="inline-flex items-start justify-center gap-5">
              <VisitorCard
                items={[
                  '빨간딸기1234',
                  '파란딸기1234',
                  '초록딸기1234',
                  '노란딸기1234',
                  '보라딸기1234',
                  '주황딸기1234',
                  '검정딸기1234',
                  '하얀딸기1234',
                  '갈색딸기1234',
                  '분홍딸기1234',
                  '연두딸기1234',
                  '하늘딸기1234,',
                  '남색딸기1234',
                ]}
              />
              <UserCard nickname="일이삼사오육칠팔구십" />
            </div>
            {/* 채팅 컴포넌트 */}
            <div className="inline-flex h-[337px] w-[320px] flex-col items-center justify-start overflow-clip rounded-[10px] bg-white pb-2.5">
              <div className="inline-flex h-26px w-[327px] items-center justify-center gap-2.5 border-black border-b-2 border-opacity-10 bg-neutral-300 py-1">
                <div className="text-semibold">채팅</div>
              </div>
              <div className="inline-flex h-full w-full items-end p-2.5">
                여기에 채팅 기록이 표시됩니다.
              </div>
              <form className="inline-flex h-[30px] w-[300px] items-center justify-center rounded-[5px] border border-neutral-500 bg-white">
                <input className="shrink grow basis-0 self-stretch bg-white p-2.5" />
                <div className="flex w-[60px] justify-center gap-2.5 self-stretch border-1-2 bg-neutral-300">
                  <button type="submit" className="text-center leading-none">
                    전송
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
