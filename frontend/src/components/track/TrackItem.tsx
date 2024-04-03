import type { TrackProps } from '@/types';
import Image from 'next/image';

export default function TrackItem({ id, imageUrl, title, artist }: TrackProps) {
  return (
    <div>
      <div className="flex items-center gap-2.5 p-5">
        <Image width={64} height={64} src={imageUrl} alt="Album Cover" />
        <div className="inline-flex flex-col items-start justify-center gap-2.5 p-2.5">
          <h1 className="self-stretch font-semibold text-base text-neutral-100 leading-tight">
            {title}
          </h1>
          <p className="self-stretch font-normal text-neutral-200 text-sm leading-none">
            {artist}
          </p>
        </div>
      </div>
    </div>
  );
}
