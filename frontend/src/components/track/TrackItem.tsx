import type { TrackProps } from '@/types';
import Image from 'next/image';

export default function TrackItem({ src, title, artist }: TrackProps) {
  return (
    <div>
      <div className="inline-flex w-[790px] items-center justify-start gap-2.5 border-white border-b p-5">
        <Image width={64} height={64} src={src} alt="Album Cover" />
        <div className="inline-flex shrink grow basis-0 flex-col items-start justify-center gap-2.5 p-2.5">
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
