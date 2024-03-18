import type { TrackProps } from '@/types';
import TrackItem from './TrackItem';

export default function TrackList({ items }: { items: TrackProps[] }) {
  return (
    <>
      {items.map(({ src, title, artist }: TrackProps) => (
        <TrackItem
          src={src}
          title={title}
          artist={artist}
          key={`${title} - ${artist}`}
        />
      ))}
    </>
  );
}
