'use client';

import GameHeader from '@/components/game/GameHeader';
import GameIntro from '@/components/game/GameIntro';
import GameLyric from '@/components/game/GameLyric';
import GameProgressBar from '@/components/game/GameProgressBar';
import GameScore from '@/components/game/GameScore';
import GameTrack from '@/components/game/GameTrack';
import GameProfile from '@/components/profile/game/GameProfile';
import GameProfileList from '@/components/profile/game/GameProfileList';
import GameRound from '@/components/profile/game/GameRound';
import GameResultModal from '@/containers/modal/GameResultModal';
import { useGameActions, useGameStates } from '@/providers/GameProvider';
import { useStompClient } from '@/providers/StompProvider';
import { useUserStore } from '@/stores/user';
import type {
  GameChat,
  GameInfo,
  GameRoomInfo,
  GameRoomMember,
} from '@/types/game';
import {
  type QueryFilters,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef } from 'react';

const Page = ({ params }: { params: { id: string } }) => {
  const { client } = useStompClient();
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const userStore = useUserStore((state) => state);
  const { status, timer, highlight, speaker, score, history, result } =
    useGameStates();
  const { timer: timerAction } = useGameActions();
  const router = useRouter();

  const headerTime = useMemo(() => {
    return highlight.isRunning ? highlight.leftTime : timer.leftTime;
  }, [highlight, timer]);

  const { data: chats } = useQuery<GameChat[]>({
    queryKey: ['/sub/rooms', 'GAME_CHAT', params.id],
    queryFn: () =>
      queryClient.getQueryData<GameChat[]>([
        '/sub/rooms',
        'GAME_CHAT',
        params.id,
      ]) || [],
    enabled: !!client,
  });

  const { data: gameInfo } = useQuery<GameInfo>({
    queryKey: ['/sub/rooms', 'GAME_INFO', params.id],
    queryFn: () =>
      queryClient.getQueryData<GameInfo>([
        '/sub/rooms',
        'GAME_INFO',
        params.id,
      ]) || { currentRound: 0, keyword: '' },
    enabled: !!client,
  });

  const { data: roomInfo } = useQuery<GameRoomInfo>({
    queryKey: ['/sub/rooms', 'GAME_ROOM_INFO', params.id],
    queryFn: () =>
      queryClient.getQueryData<GameRoomInfo>([
        '/sub/rooms/',
        'GAME_INFO',
        params.id,
      ]) || {
        roomNumber: '0',
        name: '방 이름',
        roundLimit: 0,
        roundTime: 0,
        leaderId: '0',
      },
    enabled: !!client,
  });

  const { data: members } = useQuery<GameRoomMember[]>({
    queryKey: ['/sub/rooms', 'GAME_MEMBERS', params.id],
    queryFn: () =>
      queryClient.getQueryData<GameRoomMember[]>([
        '/sub/rooms',
        'GAME_MEMBERS',
        params.id,
      ]) || [],
    enabled: !!client,
  });

  const profiles = useMemo(() => {
    if (!members) return [[], []];

    return [members.slice(0, 3), members.slice(3, 6)];
  }, [members]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!roomInfo || !roomInfo.roundTime) return;
    timerAction.init(roomInfo?.roundTime);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    queryClient.resetQueries({
      queryKey: ['/sub/rooms', 'GAME_INFO', params.id],
    });
  }, []);

  const handleChat = (event: React.MouseEvent) => {
    event.preventDefault();
    if (!userStore || !client.connected) return;

    if (!inputRef.current) return;

    const payload = inputRef.current.value.trim();

    if (payload === '') return;

    client.publish({
      destination: '/pub/chat/game',
      body: JSON.stringify({
        memberId: userStore.id,
        roomNumber: params.id,
        nickname: userStore.nickname,
        content: payload,
      }),
    });

    inputRef.current.value = '';
    inputRef.current.focus();
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    chatRef.current?.lastElementChild?.scrollIntoView();
  }, [chats]);

  return (
    <div className="flex w-full items-center justify-between px-10 py-5">
      <div className="flex h-full flex-col items-center justify-center gap-5">
        <div className="w-full">
          <GameRound round={gameInfo?.currentRound || 0} />
        </div>
        <GameProfileList position="left" items={profiles[0]} />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex w-[525px] flex-col items-center justify-center">
          <section className="flex w-full flex-col bg-black bg-opacity-80 p-2">
            {/* 히스토리 */}
            <div className="flex h-[73px] w-full select-text gap-1 overflow-x-scroll rounded-[10px] px-2 pt-2">
              {history.map((item, index) => (
                <span
                  key={`${index}-${item.title}-${item.artist}`}
                  className="h-full flex-col whitespace-nowrap rounded-[10px] bg-neutral-500 p-2 text-white text-xs"
                >
                  <p>{item.title}</p>
                  <p>{item.artist}</p>
                </span>
              ))}
            </div>
            {/*  게임 화면 */}
            <div className="relative flex h-[281px] w-full flex-col gap-2.5 bg-[url('/game-background.jpg')] bg-bottom bg-cover">
              <div className="flex-col">
                <GameHeader
                  keyword={gameInfo?.keyword || ''}
                  limit={headerTime}
                  isHighlighted={highlight.isRunning}
                />
                {/* 라운드 progress bar */}
                <GameProgressBar
                  total={roomInfo?.roundTime || 999}
                  remaining={timer.leftTime}
                  color="yellow"
                />
                {status === 'highlight' && (
                  <GameProgressBar
                    total={highlight.timeLimit}
                    remaining={highlight.leftTime}
                    color="sky"
                  />
                )}
              </div>
              {/* <GameScore score={0} nickname={'itsmo'} isCorrect={true} /> */}
              {status === 'highlight' && (
                <div className="absolute bottom-0 left-0 w-full">
                  <GameLyric lyric={highlight.lyric} />
                  <GameTrack
                    title={highlight.title}
                    artist={highlight.artist}
                  />
                </div>
              )}
              {status === 'idle' && <GameIntro />}
              {status === 'correct' && (
                <GameScore
                  avatar={{
                    decoColor: speaker.decoColor,
                    decoType: speaker.decoType,
                    faceType: speaker.faceType,
                    skinColor: speaker.skinColor,
                  }}
                  score={score}
                  nickname={speaker.nickname}
                  isCorrect
                />
              )}
              {status === 'incorrect' && (
                <GameScore
                  avatar={{
                    decoColor: speaker.decoColor,
                    decoType: speaker.decoType,
                    faceType: speaker.faceType,
                    skinColor: speaker.skinColor,
                  }}
                  score={score}
                  nickname={speaker.nickname}
                  isCorrect={false}
                />
              )}
              {status === 'end' && (
                <GameResultModal
                  results={result}
                  onClick={() => {
                    router.push(`/room/${params.id}`);
                  }}
                />
              )}
            </div>
          </section>
          {/* 채팅 */}
          <div className="mt-2 flex h-[144px] w-full flex-col overflow-clip rounded-[10px] border-2 bg-white p-2.5">
            <div
              ref={chatRef}
              className="h-full w-full select-text flex-col overflow-auto px-2.5 text-sm"
            >
              {chats?.map((chat, index) => (
                <div key={`${chat.nickname}${index}`} className="block">
                  <span>{chat.nickname}: </span>
                  <span>{chat.content}</span>
                </div>
              ))}
            </div>
            <form className="flex h-[30px] items-center justify-center overflow-clip rounded-[5px] border border-neutral-500">
              <input
                ref={inputRef}
                type="text"
                className="shrink grow basis-0 self-stretch bg-white p-2.5"
              />
              <button
                onClick={handleChat}
                type="submit"
                className="h-full w-[60px] bg-neutral-300 text-center leading-none hover:bg-pink-400 hover:text-white"
              >
                전송
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex h-full flex-col items-center justify-center gap-5">
        <button
          type="button"
          className="flex h-20 w-full items-center justify-center rounded-[10px] bg-neutral-300 font-semibold text-2xl hover:bg-pink-400 hover:text-white"
        >
          나가기
        </button>
        <GameProfileList position="right" items={profiles[1]} />
      </div>
    </div>
  );
};

export default Page;
