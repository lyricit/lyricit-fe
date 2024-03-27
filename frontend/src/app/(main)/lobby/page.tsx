'use client';

import RoomCardList from '@/components/room/RoomCardList';
import UserCard from '@/components/user/UserCard';
import VisitorCard from '@/components/visitor/VisitorCard';
import RoomCreateModal from '@/containers/modal/RoomCreateModal';
import { useStompClient } from '@/providers/StompProvider';
import useStore from '@/stores/useStore';
import { useUserStore } from '@/stores/user';
import type { RoomProps } from '@/types/room';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';

export type ChatData = {
  nickname: string;
  content: string;
  time: string;
};

export type UserInfo = {
  memberId: string;
  nickname: string;
};

const Page = () => {
  const [createRoom, toggleCreateRoom] = useState(false);
  const userStore = useStore(useUserStore, (state) => state);
  const { client } = useStompClient();
  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const { data: chats } = useQuery<ChatData[]>({
    queryKey: ['/sub/lounge', 'LOUNGE_MESSAGE'],
    queryFn: () =>
      queryClient.getQueryData<ChatData[]>(['/sub/lounge', 'LOUNGE_MESSAGE']) ||
      [],
    enabled: !!client,
  });

  const { data: users } = useQuery<UserInfo[]>({
    queryKey: ['/sub/lounge', 'USER_STATUS'],
    queryFn: () =>
      queryClient.getQueryData<UserInfo[]>(['/sub/lounge', 'USER_STATUS']) ||
      [],
    enabled: !!client,
  });

  const { data: rooms } = useQuery<RoomProps[]>({
    queryKey: ['/sub/lounge', 'ROOM'],
    queryFn: () =>
      queryClient.getQueryData<RoomProps[]>(['/sub/lounge', 'ROOM']) || [],
    enabled: !!client,
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    chatRef.current?.lastElementChild?.scrollIntoView();
  }, [chats]);

  useEffect(() => {
    if (!client.connected) return;

    const fetchUsers = async () => {
      const response = await fetch(
        'https://api-dev.lyricit.site/v1/members/online',
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      queryClient.setQueryData<UserInfo[]>(
        ['/sub/lounge', 'USER_STATUS'],
        () => {
          return data;
        },
      );
    };

    const fetchRooms = async () => {
      const response = await fetch('https://api-dev.lyricit.site/v1/rooms');
      const data = await response.json();

      const mappedData: RoomProps[] = data.map(
        (room: {
          roomNumber: string;
          name: string;
          isPlaying: boolean;
          isPublic: boolean;
          playerCount: number;
          playerLimit: number;
        }): RoomProps => {
          return {
            id: Number.parseInt(room.roomNumber),
            title: room.name,
            status: room.isPlaying ? 'playing' : 'waiting',
            isOpen: room.isPublic,
            current: room.playerCount as 1 | 2 | 3 | 4 | 5 | 6,
            limit: room.playerLimit as 2 | 3 | 4 | 5 | 6,
          };
        },
      );

      queryClient.setQueryData<RoomProps[]>(['/sub/lounge', 'ROOM'], () =>
        mappedData.sort((a, b) => (a.id ?? 0) - (b.id ?? 0)),
      );
    };

    fetchUsers();
    fetchRooms();

    const channel = '/sub/lounge';
    const sub = client.subscribe(channel, (event) => {
      const data = JSON.parse(event.body);
      const chatQueryKey = [channel, 'LOUNGE_MESSAGE'];
      const userEnterQueryKey = [channel, 'USER_STATUS'];
      const roomQueryKey = [channel, 'ROOM'];

      switch (data.type) {
        case 'LOUNGE_MESSAGE':
          queryClient.setQueryData<ChatData[]>(chatQueryKey, (previousData) => {
            const prev = previousData || []; // Initialize previousData as an empty array if it is undefined
            return [...prev, data.data];
          });
          break;
        case 'ONLINE':
          queryClient.setQueryData<UserInfo[]>(
            userEnterQueryKey,
            (previousData) => {
              const prev = previousData || []; // Initialize previousData as an empty array if it is undefined
              return [...prev, data.data];
            },
          );
          break;
        case 'OFFLINE':
          queryClient.setQueryData<UserInfo[]>(
            userEnterQueryKey,
            (previousData) => {
              return (previousData ?? []).filter(
                (user) => user.memberId !== data.data.memberId,
              );
            },
          );
          break;
        case 'ROOM_CREATED':
          queryClient.setQueryData<RoomProps[]>(
            roomQueryKey,
            (previousData) => {
              const prev = previousData || [];
              const next: RoomProps = {
                id: Number.parseInt(data.data.roomNumber),
                title: data.data.name,
                status: data.data.isPlaying ? 'playing' : 'waiting',
                isOpen: data.data.isPublic,
                current: data.data.playerCount,
                limit: data.data.playerLimit,
              };
              return [...prev, next];
            },
          );
          break;
        case 'ROOM_DELETED':
          queryClient.setQueryData<RoomProps[]>(
            roomQueryKey,
            (previousData) => {
              return (previousData ?? []).filter(
                (room) => room.id !== Number.parseInt(data.data),
              );
            },
          );
          break;
      }
    });

    return () => {
      if (sub) sub.unsubscribe();
    };
  }, [client, client?.connected, queryClient]);

  // const chats = useStompQuery<ChatData, unknown>(
  //   ['chat', 'lounge'],
  //   '/sub/lounge',
  //   (previousData, newComingData) => {
  //     if (newComingData.type !== 'LOUNGE_MESSAGE') return previousData;
  //     console.log(newComingData);
  //     return [...previousData, newComingData];
  //   },
  // );

  // const users = useStompQuery<UserInfo, unknown>(
  //   ['lounge', 'user'],
  //   '/sub/lounge',
  //   (previousData, newComingData) => {
  //     if (newComingData.type === 'ONLINE')
  //       return [...previousData, newComingData];
  //     if (newComingData.type === 'OFFLINE')
  //       return previousData.filter(
  //         (user) => user.data.memberId !== newComingData.data.memberId,
  //       );
  //   },
  // );

  const clickCreateRoom = () => toggleCreateRoom(!createRoom);

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    if (!userStore || !client.connected) return;

    if (!inputRef.current || inputRef.current?.value === '') return;

    client.publish({
      destination: '/pub/chat/lounge',
      body: JSON.stringify({
        nickname: userStore.nickname,
        content: inputRef.current.value,
      }),
    });

    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div className="flex w-full items-center justify-center gap-5 p-5">
      <div className="flex h-full flex-col items-center justify-start gap-6">
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
            onClick={clickCreateRoom}
            className="rounded-[10px] border-2 border-black border-opacity-20 bg-neutral-300 px-6 py-3 font-semibold leading-tight"
          >
            방 만들기
          </button>
        </div>
        <RoomCardList items={rooms} />
      </div>
      <div className="inline-flex h-full flex-col items-center justify-start gap-2.5">
        <section className="inline-flex items-start justify-center gap-5">
          <VisitorCard items={users} />
          <UserCard avatar={userStore?.avatar} nickname={userStore?.nickname} />
        </section>
        {/* 채팅 컴포넌트 */}
        <section className="inline-flex h-[337px] w-[320px] flex-col items-center justify-start overflow-clip rounded-[10px] bg-white pb-2.5">
          <div className="inline-flex h-[26px] w-[327px] items-center justify-center gap-2.5 border-black border-b-2 border-opacity-10 bg-neutral-300 py-1">
            <div className="text-semibold">채팅</div>
          </div>
          <div
            ref={chatRef}
            className="inline-flex h-full w-full select-text flex-col overflow-auto px-2.5"
          >
            {chats?.map((chat, index) => (
              <div key={`${chat.nickname}${index}`} className="block">
                <span>{chat.nickname}: </span>
                <span>{chat.content}</span>
              </div>
            ))}
          </div>
          <form className="inline-flex h-[30px] w-[300px] items-center justify-center overflow-clip rounded-[5px] border border-neutral-500 bg-white">
            <input
              ref={inputRef}
              className="shrink grow basis-0 self-stretch bg-white p-2.5"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="h-full w-[60px] bg-neutral-300 text-center leading-none"
            >
              전송
            </button>
          </form>
        </section>
      </div>
      {createRoom && <RoomCreateModal onClick={clickCreateRoom} />}
    </div>
  );
};

export default Page;
