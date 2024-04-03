'use client';

import EmptyRoomProfile from '@/components/profile/room/EmptyRoomProfile';
import RoomProfile from '@/components/profile/room/RoomProfile';
import RoomHeader from '@/components/room/RoomHeader';
import RoomReadyButton from '@/components/room/RoomReadyButton';
import RoomStartButton from '@/components/room/RoomStartButton';
import { useGameActions, useGameStates } from '@/providers/GameProvider';
import { useStompClient, useSubscriber } from '@/providers/StompProvider';
import { useRoomActions, useRoomStore } from '@/stores/room';
import { useUserStore } from '@/stores/user';
import type { GameInfo, GameRoomInfo, GameRoomMember } from '@/types/game';
import type { RoomMember } from '@/types/room';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { RoomInfoType } from '../../lobby/page';

type RoomInfo = {
  roomNumber: string;
  name: string;
  roundLimit: number;
  roundTime: number;
  isPublic: boolean;
  leaderId: string;
};

type RoomDetail = RoomInfo & {
  members: Array<RoomMember>;
};

type RoomChat = {
  roomNumber: string;
  nickname: string;
  content: string;
  time: string;
};

const Page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { client } = useStompClient();
  const subscriber = useSubscriber();
  const userStore = useUserStore((state) => state);
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const [isEntered, setIsEntered] = useState(false);
  const storedPassword = useRoomStore((state) => state.password);
  const { invalidate } = useRoomActions;
  const [isReady, setIsReady] = useState(false);
  const gameAction = useGameActions();
  const { highlight } = useGameStates();

  const { data: room } = useQuery<RoomInfo>({
    queryKey: ['/sub/rooms', 'INFO', params.id],
    queryFn: () =>
      queryClient.getQueryData<RoomInfo>(['/sub/rooms', 'INFO', params.id]) || {
        roomNumber: '999',
        name: '가나다라마바사아자차카타파하',
        roundLimit: 9,
        roundTime: 999,
        isPublic: true,
        leaderId: '',
      },
    enabled: !!client,
  });

  const { data: members } = useQuery<RoomMember[]>({
    queryKey: ['/sub/rooms', 'MEMBERS', params.id],
    queryFn: () =>
      queryClient.getQueryData<RoomMember[]>([
        '/sub/rooms',
        'MEMBERS',
        params.id,
      ]) || [],
    enabled: !!client,
  });

  const { data: chats } = useQuery<RoomChat[]>({
    queryKey: ['/sub/rooms', 'CHAT', params.id],
    queryFn: () =>
      queryClient.getQueryData<RoomChat[]>(['/sub/rooms', 'CHAT', params.id]) ||
      [],
    enabled: !!client,
  });

  const isAllReady = useMemo(() => {
    return members?.every((member) => member.isReady);
  }, [members]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!userStore) {
      alert('잘못된 접근입니다.');
      router.push('/lobby');
    }

    const fetchRoomInfo = async () => {
      const response = await fetch(
        `https://api-dev.lyricit.site/v1/rooms/${params.id}`,
      );

      if (!response.ok) {
        alert('방 정보를 불러오는데 실패했습니다.');
        router.push('/lobby');
        return;
      }

      const roomInfo: RoomInfoType = await response.json();
      let password = storedPassword;

      if (!roomInfo.isPublic && storedPassword === '') {
        password = prompt('비밀번호를 입력해주세요.') || '';
      }

      const enterResponse = await fetch(
        `https://api-dev.lyricit.site/v1/rooms/${params.id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            memberId: userStore.id,
          },
          body: JSON.stringify({ password }),
        },
      );

      if (!enterResponse.ok) {
        alert('방에 입장하는데 실패했습니다.');
        router.push('/lobby');
      }

      const roomDetail: RoomDetail = await enterResponse.json();

      queryClient.setQueryData<RoomInfo>(
        ['/sub/rooms', 'INFO', params.id],
        () => {
          return {
            roomNumber: roomDetail.roomNumber,
            name: roomDetail.name,
            roundLimit: roomDetail.roundLimit,
            roundTime: roomDetail.roundTime,
            isPublic: roomDetail.isPublic,
            leaderId: roomDetail.leaderId,
          };
        },
      );

      if (roomDetail.leaderId === userStore.id) {
        setIsReady(true);
      }

      queryClient.setQueryData<RoomMember[]>(
        ['/sub/rooms', 'MEMBERS', params.id],
        () => {
          return roomDetail.members;
        },
      );
    };

    fetchRoomInfo();
    setIsEntered(true);
  }, [params.id, userStore]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!client.connected || !isEntered) return;

    if (!subscriber.getSubscriber('room')) {
      const sub = client.subscribe(`/sub/rooms/${params.id}`, (message) => {
        const { type, data: payload } = JSON.parse(message.body);

        console.log(`MESSAGE RECEIVED: ${type}`);
        console.log(payload);
        console.log('-------------------------');

        switch (type) {
          case 'MEMBER_IN':
            queryClient.setQueryData<RoomMember[]>(
              ['/sub/rooms', 'MEMBERS', params.id],
              (prev) => {
                return [...(prev ?? []), payload];
              },
            );
            break;
          case 'MEMBER_OUT':
            queryClient.setQueryData<RoomMember[]>(
              ['/sub/rooms', 'MEMBERS', params.id],
              (prev) => {
                return (prev ?? []).filter(
                  (member) =>
                    member.member.memberId !== payload.member.memberId,
                );
              },
            );
            queryClient.setQueryData<GameRoomMember[]>(
              ['/sub/rooms', 'GAME_MEMBERS', params.id],
              (prev) => {
                return (prev ?? []).filter(
                  (member) =>
                    member.member.memberId !== payload.member.memberId,
                );
              },
            );
            break;
          case 'MEMBER_READY':
            queryClient.setQueryData<RoomMember[]>(
              ['/sub/rooms', 'MEMBERS', params.id],
              (prev) => {
                return (prev ?? []).map((member) => {
                  if (member.member.memberId === payload) {
                    if (member.member.memberId === userStore.id) {
                      setIsReady(!isReady);
                    }
                    return { ...member, isReady: !member.isReady };
                  }
                  return member;
                });
              },
            );
            break;
          case 'ROOM_MESSAGE':
            queryClient.setQueryData<RoomChat[]>(
              ['/sub/rooms', 'CHAT', params.id],
              (prev) => {
                return [...(prev ?? []), payload];
              },
            );
            break;
          case 'LEADER_CHANGED':
            // 리더 변경
            queryClient.setQueryData<RoomInfo>(
              ['/sub/rooms', 'INFO', params.id],
              (prev) => {
                return { ...(prev as RoomInfo), leaderId: payload };
              },
            );
            // 리더 준비 상태 변경
            queryClient.setQueryData<RoomMember[]>(
              ['/sub/rooms', 'MEMBERS', params.id],
              (prev) => {
                return (prev ?? []).map((member) => {
                  if (member.member.memberId === payload) {
                    return { ...member, isReady: true };
                  }
                  return member;
                });
              },
            );
            break;
          case 'GAME_STARTED':
            setGameRoomData();
            gameAction.setStatus('idle');
            gameAction.highlight.resetHighlight();
            gameAction.history.clearHistory();
            gameAction.result.clearResult();
            gameAction.timer.handleReset();
            router.push(`/game/${params.id}`);
            break;
          case 'ROUND_STARTED':
            gameAction.setStatus('idle');
            queryClient.setQueryData<GameInfo>(
              ['/sub/rooms', 'GAME_INFO', params.id],
              () => {
                return payload;
              },
            );
            gameAction.timer.handleStart();
            break;
          case 'ROUND_ENDED':
            gameAction.setStatus('idle');
            gameAction.timer.handleReset();
            gameAction.highlight.resetHighlight();
            break;
          case 'GAME_MESSAGE':
            queryClient.setQueryData<RoomChat[]>(
              ['/sub/rooms', 'GAME_CHAT', params.id],
              (prev) => {
                return [...(prev ?? []), payload];
              },
            );
            break;
          case 'HIGHLIGHT':
            queryClient.setQueryData<GameRoomMember[]>(
              ['/sub/rooms', 'GAME_MEMBERS', params.id],
              (prev) => {
                return (prev ?? []).map((member) => {
                  if (member.member.memberId === payload.memberId) {
                    return {
                      ...member,
                      isHighlighted: true,
                    };
                  }
                  return member;
                });
              },
            );
            gameAction.setStatus('highlight');
            gameAction.highlight.init(payload.timeLimit);
            gameAction.highlight.setTarget(payload.memberId);
            gameAction.highlight.setLyric(payload.lyric);
            gameAction.highlight.setTimeLimit(payload.timeLimit);
            gameAction.highlight.handleStart();
            break;
          case 'HIGHLIGHT_CANCELLED':
            queryClient.setQueryData<GameRoomMember[]>(
              ['/sub/rooms', 'GAME_MEMBERS', params.id],
              (prev) => {
                console.log(`reset Highlight ${highlight.target}`);
                return (prev ?? []).map((member) => {
                  return {
                    ...member,
                    isHighlighted: false,
                  };
                });
              },
            );
            gameAction.setStatus('idle');
            gameAction.highlight.resetHighlight();
            break;
          case 'HIGHLIGHT_TITLE':
            gameAction.highlight.setTitle(payload);
            break;
          case 'HIGHLIGHT_ARTIST':
            gameAction.highlight.setArtist(payload);
            break;
          case 'CORRECT_ANSWER':
            gameAction.setStatus('correct');
            gameAction.speaker.handleSpeaker({
              ...payload.member,
              score: payload.totalScore,
            });
            gameAction.history.addHistory({
              title: payload.answerTitle,
              artist: payload.answerArtist,
            });
            gameAction.setScore(payload.score);
            queryClient.setQueryData<GameRoomMember[]>(
              ['/sub/rooms', 'GAME_MEMBERS', params.id],
              (prev) => {
                return (prev ?? []).map((member) => {
                  if (member.member.memberId === payload.member.memberId) {
                    return {
                      ...member,
                      score: payload.totalScore,
                    };
                  }
                  return member;
                });
              },
            );
            break;
          case 'INCORRECT_ANSWER':
            gameAction.setStatus('incorrect');
            gameAction.setScore(0);
            gameAction.speaker.handleSpeaker({ ...payload });
            break;
          case 'GAME_ENDED':
            gameAction.setStatus('end');
            gameAction.result.setResult(payload);
            break;
        }
      });

      subscriber.setSubscriber('room', sub);
    }

    return () => {
      console.log('moving out');
      queryClient.resetQueries({ queryKey: ['/sub/rooms', 'INFO', params.id] });
      queryClient.resetQueries({ queryKey: ['/sub/rooms', 'CHAT', params.id] });
      queryClient.resetQueries({
        queryKey: ['/sub/rooms', 'MEMBERS', params.id],
      });
      invalidate();
    };
  }, [
    client,
    client?.connected,
    queryClient,
    params.id,
    isEntered,
    invalidate,
  ]);

  const handleReady = async () => {
    const response = await fetch(
      `https://api-dev.lyricit.site/v1/rooms/${params.id}/ready`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          memberId: userStore.id,
        },
      },
    );

    if (!response.ok) {
      alert('준비 상태를 변경하는데 실패했습니다.');
      return;
    }
  };

  const handleStart = async () => {
    if (!isAllReady) {
      alert('모든 유저가 준비 상태여야 시작할 수 있습니다.');
      return;
    }

    const response = await fetch(
      `https://api-dev.lyricit.site/v1/rooms/${params.id}/start`,
      {
        method: 'POST',
        headers: {
          memberId: userStore.id,
        },
      },
    );

    if (!response.ok) {
      console.log(response.text());
      alert('게임을 시작하는데 실패했습니다.');
      return;
    }

    setGameRoomData();
    router.push(`/game/${params.id}`);
  };

  const setGameRoomData = () => {
    console.log('setting game data..');
    console.log(room);
    console.log(members);

    queryClient.setQueryData<GameRoomInfo>(
      ['/sub/rooms', 'GAME_ROOM_INFO', params.id],
      () => queryClient.getQueryData(['/sub/rooms', 'INFO', params.id]),
    );

    queryClient.setQueryData<GameRoomMember[]>(
      ['/sub/rooms', 'GAME_MEMBERS', params.id],
      () => {
        const roomMembers = queryClient.getQueryData<RoomMember[]>([
          '/sub/rooms',
          'MEMBERS',
          params.id,
        ]);

        return roomMembers?.map(({ isReady, ...member }) => ({
          ...member,
          score: 0,
          isHighlighted: false,
        }));
      },
    );

    queryClient.resetQueries({
      queryKey: ['/sub/rooms', 'GAME_CHAT', params.id],
    });
  };

  const handleChat = (event: React.MouseEvent) => {
    event.preventDefault();
    if (!userStore || !client.connected) return;

    if (!inputRef.current) return;

    const payload = inputRef.current.value.trim();

    if (payload === '') return;

    client.publish({
      destination: '/pub/chat/room',
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

  const handleOut = async () => {
    const response = await fetch(
      `https://api-dev.lyricit.site/v1/rooms/${params.id}`,
      {
        method: 'DELETE',
        headers: {
          memberId: userStore.id,
        },
      },
    );

    if (!response.ok) {
      console.log(response);
      alert('히히 못가');
      return;
    }

    subscriber.getSubscriber('room')?.unsubscribe();
    subscriber.removeSubscriber('room');

    router.push('/lobby');
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    chatRef.current?.lastElementChild?.scrollIntoView();
  }, [chats]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-between gap-5 py-5">
      <div className="flex w-full items-center justify-center">
        <RoomHeader
          roundLimit={room?.roundLimit || 0}
          roundTime={room?.roundTime || 999}
          isPublic={room?.isPublic || false}
          name={room?.name || ''}
        />
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        {members?.map((member) => {
          return (
            <RoomProfile
              key={member.member.memberId}
              info={member}
              isMaster={room?.leaderId === member?.member.memberId}
            />
          );
        })}
        {Array.from({ length: 6 - (members?.length || 0) }).map((_, index) => (
          <EmptyRoomProfile
            key={`empty-${
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              index
            }`}
          />
        ))}
      </div>
      <div className="flex w-full flex-shrink items-start justify-start gap-5 px-10">
        {/* 채팅 컴포넌트 */}
        <section className="flex h-[230px] w-[920px] flex-col items-center justify-start overflow-clip rounded-[10px] bg-white p-5">
          <div
            ref={chatRef}
            className="h-full w-full select-text flex-col overflow-y-scroll"
          >
            {chats?.map((chat, index) => (
              <div key={`${chat.nickname}${index}`} className="block">
                <span>{chat.nickname}: </span>
                <span>{chat.content}</span>
              </div>
            ))}
          </div>
          <form className="inline-flex h-[30px] w-full items-center justify-center overflow-clip rounded-[5px] border border-neutral-500 bg-white">
            <input
              ref={inputRef}
              type="text"
              maxLength={100}
              className="shrink grow basis-0 self-stretch bg-white p-2.5"
            />
            <button
              onClick={handleChat}
              type="submit"
              className="h-full w-[60px] bg-neutral-300 text-center leading-none"
            >
              전송
            </button>
          </form>
        </section>
        <div className="flex h-full w-[180px] flex-col items-start justify-between gap-5">
          {userStore.id === room?.leaderId ? (
            <RoomStartButton
              onClick={handleStart}
              isReady={isAllReady ?? false}
            />
          ) : (
            <RoomReadyButton onClick={handleReady} isReady={isReady ?? false} />
          )}
          <button
            onClick={handleOut}
            type="button"
            className="h-1/3 w-full rounded-[10px] border-2 border-black border-opacity-20 bg-neutral-300 font-semibold"
          >
            나가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
