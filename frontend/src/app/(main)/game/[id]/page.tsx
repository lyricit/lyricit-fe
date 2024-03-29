import GameProgressBar from '@/components/game/GameProgressBar';
import GameScore from '@/components/game/GameScore';
import GameProfile from '@/components/profile/game/GameProfile';
import GameRound from '@/components/profile/game/GameRound';
import type { AvatarType } from '@/types/avatar';
import { IoMdStopwatch } from 'react-icons/io';

const dummy = [
  {
    id: '412b439f-5a68-5d83-9f48-a4fb8a2f51eb',
    nickname: '가나다라마바사아자차',
    score: 16200,
    avatar: {
      faceType: 'default',
      decoType: 'cap',
      skinColor: '#ffe6f0',
      decoColor: '#ff4d6d',
    },
  },
  {
    id: '281fa989-d2af-5108-b3c9-64135a03a37f',
    nickname: '가나다라마바사아자차',
    score: 16200,
    avatar: {
      faceType: 'default',
      decoType: 'goggle',
      skinColor: '#aab675',
      decoColor: '#b317bb',
    },
  },
  {
    id: '7fa742c2-dc0a-563e-9036-c1f06c9a1a20',
    nickname: '가나다라마바사아자차',
    score: 16200,
    avatar: {
      faceType: 'default',
      decoType: 'mohican',
      skinColor: '#fcffa1',
      decoColor: '#099ec8',
    },
  },
  {
    id: 'f777d354-b934-52c5-86d8-db06e7e05cdb',
    nickname: '가나다라마바사아자차',
    score: 16200,
    avatar: {
      faceType: 'default',
      decoType: 'cap',
      skinColor: '#ffe6f0',
      decoColor: '#ff4d6d',
    },
  },
  {
    id: 'a4132dae-ff60-5495-9290-bbe291b80847',
    nickname: '가나다라마바사아자차',
    score: 16200,
    avatar: {
      faceType: 'default',
      decoType: 'goggle',
      skinColor: '#aab675',
      decoColor: '#b317bb',
    },
  },
  {
    id: '01dec175-18cd-5fb1-a67f-ed7b65ae222c',
    nickname: '가나다라마바사아자차',
    score: 16200,
    avatar: {
      faceType: 'default',
      decoType: 'mohican',
      skinColor: '#fcffa1',
      decoColor: '#099ec8',
    },
  },
];

// 위의 dummy를 3개씩 2개의 배열로 나눈다
const profiles = [dummy.slice(0, 3), dummy.slice(3, 6)];

const Page = () => {
  return (
    <div className="flex w-full items-center justify-between gap-5 p-10">
      <div className="flex flex-col items-center justify-center gap-5">
        <GameRound round={1} />
        {profiles[0].map((profile, index) => (
          <GameProfile
            key={profile.id}
            avatar={profile.avatar as AvatarType}
            nickname={profile.nickname}
            score={profile.score}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <div className="flex w-[525px] flex-col items-center justify-center">
          {/* 히스토리 */}
          <div className="flex w-full select-text gap-1 overflow-x-scroll rounded-[10px] px-2 pt-2">
            <span className="h-full flex-col whitespace-nowrap rounded-[10px] bg-neutral-500 p-2 text-white text-xs">
              <p>제목이 들어갈 영역</p>
              <p>가수가 들어갈 영역</p>
            </span>
            <span className="h-full flex-col whitespace-nowrap rounded-[10px] bg-neutral-500 p-2 text-white text-xs">
              <p>제목이 들어갈 영역</p>
              <p>가수가 들어갈 영역</p>
            </span>
            <span className="h-full flex-col whitespace-nowrap rounded-[10px] bg-neutral-500 p-2 text-white text-xs">
              <p>제목이 들어갈 영역</p>
              <p>가수가 들어갈 영역</p>
            </span>
            <span className="h-full flex-col whitespace-nowrap rounded-[10px] bg-neutral-500 p-2 text-white text-xs">
              <p>제목이 들어갈 영역</p>
              <p>가수가 들어갈 영역</p>
            </span>
            <span className="h-full flex-col whitespace-nowrap rounded-[10px] bg-neutral-500 p-2 text-white text-xs">
              <p>제목이 들어갈 영역</p>
              <p>가수가 들어갈 영역</p>
            </span>
          </div>
          {/*  게임 화면 */}
          <div className="flex h-[281px] w-full flex-col gap-2.5 bg-[url('/game-background.jpg')] bg-bottom bg-cover">
            <div className="flex-col">
              <div className="flex w-full items-start justify-center bg-[#000000] bg-opacity-60 ps-2.5">
                <div className="flex h-10 w-full items-center justify-start">
                  <span className="font-semibold text-white leading-tight">
                    키워드
                  </span>
                </div>
                <div className="flex h-10 w-full items-center justify-center">
                  <span className="font-bold text-lg text-sky-400 leading-normal">
                    키워드 영역
                  </span>
                </div>
                <div className="flex h-10 w-full items-center justify-end pe-2">
                  <IoMdStopwatch
                    size="20px"
                    style={{ paddingRight: 1 }}
                    color="white"
                  />
                  {/* 라운드 제한시간 */}
                  <span className="font-semibold text-yellow-400 leading-tight">
                    180초
                  </span>
                </div>
              </div>
              {/* 라운드 progress bar */}
              <GameProgressBar total={180} remaining={30} color="yellow" />
              <GameProgressBar total={10} remaining={8} color="sky" />
            </div>
            <GameScore score={0} nickname={'itsmo'} isCorrect={true} />
            {/* <section className="flex h-full w-full items-center justify-center">
              <section className="flex items-center justify-center gap-5 rounded-[10px] bg-[#000000] bg-opacity-60 px-5 py-10 text-white">
                <Image
                  src={'/singing-dog.png'}
                  alt="singing-dog"
                  width={80}
                  height={80}
                />
                <div className="whitespace-nowrap">
                  <p className="font-semibold">
                    키워드가 들어가는{' '}
                    <span className="text-pink-400">가사</span>를 입력하세요!
                  </p>
                  <p className="font-semibold">
                    제한 시간이 지나면 라운드가 종료돼요.
                  </p>
                </div>
              </section>
            </section> */}
          </div>
          {/* 채팅 */}
          <div className="mt-2 flex h-[144px] w-full flex-col overflow-clip rounded-[10px] border-2 bg-white p-2.5">
            <div className="h-full w-full select-text flex-col overflow-auto px-2.5 text-sm">
              <div className="block">
                <span>닉네임: </span>
                <span>내용</span>
              </div>
              <div className="block">
                <span>닉네임: </span>
                <span>내용</span>
              </div>
              <div className="block">
                <span>닉네임: </span>
                <span>내용</span>
              </div>
              <div className="block">
                <span>닉네임: </span>
                <span>내용</span>
              </div>
            </div>
            <form className="flex h-[30px] items-center justify-center overflow-clip rounded-[5px] border border-neutral-500">
              <input
                type="text"
                className="shrink grow basis-0 self-stretch bg-white p-2.5"
              />
              <button
                type="submit"
                className="h-full w-[60px] bg-neutral-300 text-center leading-none hover:bg-pink-400 hover:text-white"
              >
                전송
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <button
          type="button"
          className="flex h-10 w-full items-center justify-center rounded-[10px] bg-neutral-300 font-semibold text-2xl hover:bg-pink-400 hover:text-white"
        >
          나가기
        </button>
        {profiles[1].map((profile, index) => (
          <GameProfile
            key={profile.id}
            avatar={profile.avatar as AvatarType}
            nickname={profile.nickname}
            score={profile.score}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
