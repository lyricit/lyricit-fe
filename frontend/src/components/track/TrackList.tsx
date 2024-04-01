import type { TrackProps } from '@/types';
import TrackItem from './TrackItem';

export default function TrackList({
  items,
  showDetailPage,
}: { items: TrackProps[]; showDetailPage: (idx: string) => void }) {
  return (
    <>
      {items.map(({ id, imageUrl, title, artist }: TrackProps) => (
        <div
          onClick={() => {
            showDetailPage(id);
          }}
        >
          <TrackItem
            id={id}
            imageUrl={imageUrl}
            title={title}
            artist={artist}
            key={`${title} - ${artist}`}
          />
        </div>
      ))}
    </>
  );
}
