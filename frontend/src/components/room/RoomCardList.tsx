'use client';

import type { RoomProps } from '@/types/room';
import { useEffect, useMemo, useState } from 'react';
import RoomCard from './RoomCard';
export default function RoomCardList({ items }: { items?: RoomProps[] }) {
  const roomList: RoomProps[] = useMemo(() => {
    if (!items)
      return Array.from({ length: 8 }).map(() => ({
        status: 'empty',
      }));

    // 최소 8개의 카드가 렌더링되도록 함
    // items가 8개 미만인 경우 빈 카드를 추가
    if (items.length < 8) {
      const emptyCardCount = 8 - items.length;
      const emptyCardList: RoomProps[] = Array.from({
        length: emptyCardCount,
      }).map(() => ({
        status: 'empty',
      }));
      return [...items, ...emptyCardList];
    }

    return items;
  }, [items]);

  useEffect(() => {
    console.log(roomList);
  }, [roomList]);

  return (
    <div className="flex h-[385px] w-[755px] flex-wrap items-center justify-between">
      {roomList.map(
        ({ id, title, status, isOpen, current, limit }: RoomProps, index) => (
          <div
            key={id ? `room-${id}` : index}
            className="inline-flex items-center justify-between self-stretch"
          >
            <RoomCard
              id={id}
              title={title}
              status={status}
              isOpen={isOpen}
              current={current}
              limit={limit}
            />
          </div>
        ),
      )}
    </div>
  );
}
