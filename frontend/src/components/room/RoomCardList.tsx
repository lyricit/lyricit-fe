import type { RoomProps } from '@/types/room';
import RoomCard from './RoomCard';
export default function RoomCardList({ items }: { items: RoomProps[] }) {
  return (
    <div className="flex h-[385px] w-[755px] flex-wrap items-center justify-between">
      {items.map(({ id, title, status, isOpen, current, limit }: RoomProps) => (
        <div className="inline-flex items-center justify-between self-stretch">
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
