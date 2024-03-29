'use client';

import EmptyRoomProfile from '@/components/profile/room/EmptyRoomProfile';
import RoomProfile from '@/components/profile/room/RoomProfile';
import RoomHeader from '@/components/room/RoomHeader';
import { useStompClient } from '@/providers/StompProvider';
import { useRoomActions, useRoomStore } from '@/stores/room';
import { useUserStore } from '@/stores/user';
import {
  type QueryFilters,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import type { RoomInfoType } from '../../lobby/page';

type RoomInfo = {
  roomNumber?: string;
  name?: string;
  roundLimit?: number;
  roundTime?: number;
  isPublic?: boolean;
  leaderId?: string;
};

export type MemberType = {
  member: {
    memberId: string;
    nickname: string;
    decoType: string;
    faceType: string;
    decoColor: string;
    skinColor: string;
  };
  isReady: boolean;
};

type RoomDetail = RoomInfo & {
  members: Array<MemberType>;
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
  const userStore = useUserStore((state) => state);
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const [isEntered, setIsEntered] = useState(false);
  const storedPassword = useRoomStore((state) => state.password);
  const { invalidate } = useRoomActions;

  const { data: room } = useQuery<RoomInfo>({
    queryKey: ['/sub/rooms', 'INFO', params.id],
    queryFn: () =>
      queryClient.getQueryData<RoomInfo>(['/sub/rooms', 'INFO', params.id]) ||
      {},
    enabled: !!client,
  });

  const { data: members } = useQuery<MemberType[]>({
    queryKey: ['/sub/rooms', 'MEMBERS', params.id],
    queryFn: () =>
      queryClient.getQueryData<MemberType[]>([
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

      queryClient.setQueryData<MemberType[]>(
        ['/sub/rooms', 'MEMBERS', params.id],
        () => {
          return roomDetail.members;
        },
      );
    };

    fetchRoomInfo();
    setIsEntered(true);
  }, [params.id, userStore]);

  useEffect(() => {
    if (!client.connected || !isEntered) return;

    const sub = client.subscribe(`/sub/rooms/${params.id}`, (message) => {
      const { type, data: payload } = JSON.parse(message.body);

      switch (type) {
        case 'MEMBER_IN':
          queryClient.setQueryData<MemberType[]>(
            ['/sub/rooms', 'MEMBERS', params.id],
            (prev) => {
              return [...(prev ?? []), payload];
            },
          );
          break;
        case 'MEMBER_OUT':
          queryClient.setQueryData<MemberType[]>(
            ['/sub/rooms', 'MEMBERS', params.id],
            (prev) => {
              return (prev ?? []).filter(
                (member) => member.member.memberId !== payload.member.memberId,
              );
            },
          );
          break;
        case 'MEMBER_READY':
          queryClient.setQueryData<MemberType[]>(
            ['/sub/rooms', 'MEMBERS', params.id],
            (prev) => {
              return (prev ?? []).map((member) => {
                if (member.member.memberId === payload) {
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
              return { ...prev, leaderId: payload };
            },
          );
          // 리더 준비 상태 변경
          queryClient.setQueryData<MemberType[]>(
            ['/sub/rooms', 'MEMBERS', params.id],
            (prev) => {
              return (prev ?? []).map((member) => {
                if (member.member.memberId === payload) {
                  return { ...member, isReady: false };
                }
                return member;
              });
            },
          );
          break;
      }
    });

    return () => {
      if (sub) {
        sub.unsubscribe();
      }
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

  const handleChat = (event: React.MouseEvent) => {
    event.preventDefault();
    if (!userStore || !client.connected) return;

    if (!inputRef.current) return;

    const payload = inputRef.current.value.trim();

    if (payload === '') return;

    client.publish({
      destination: '/pub/chat/room',
      body: JSON.stringify({
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
      alert('히히 못가');
      return;
    }

    router.push('/lobby');
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    chatRef.current?.lastElementChild?.scrollIntoView();
  }, [chats]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 py-5">
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
      <div className="flex h-60 w-full items-start justify-start gap-5 px-10">
        {/* 채팅 컴포넌트 */}
        <section className="inline-flex h-full w-[920px] flex-col items-center justify-start overflow-clip rounded-[10px] bg-white pb-2.5">
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
          <form className="inline-flex h-[30px] w-[900px] items-center justify-center overflow-clip rounded-[5px] border border-neutral-500 bg-white">
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
        <div className="flex h-full w-[180px] flex-col items-start justify-center gap-5">
          <button
            onClick={handleReady}
            type="button"
            className="w-full flex-grow rounded-[10px] bg-white font-bold text-3xl"
          >
            READY
          </button>
          <button
            onClick={handleOut}
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
