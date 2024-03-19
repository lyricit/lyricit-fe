import type { RoomProps } from '@/types/room';
import RoomCard from './RoomCard';
export default function RoomCardList({ items }: { items: RoomProps[] }) {
  return (
    <div className="w-[755px] h-[385px] justify-between items-center flex flex-wrap">
      {items.map(({ id, title, status, isOpen, current, limit }: RoomProps) => (
        <div className="self-stretch justify-between items-center inline-flex">
          <RoomCard
            id={id}
            title={title}
            status={status}
            isOpen={isOpen}
            current={current}
            limit={limit}
            key={`${id} - ${title}`}
          />
        </div>
      ))}
    </div>
  );
}
