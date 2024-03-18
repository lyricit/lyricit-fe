import type { TrackProps } from '@/types';
import Image from 'next/image';

export default function TrackItem({ src, title, artist }: TrackProps) {
  return (
    <div>
      <div className="w-[790px] p-5 justify-start border-b border-white items-center gap-2.5 inline-flex">
        <Image width={64} height={64} src={src} alt="Album Cover" />
        <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-start gap-2.5 inline-flex">
          <h1 className="self-stretch text-neutral-100 text-base font-semibold leading-tight">
            {title}
          </h1>
          <p className="self-stretch text-neutral-200 text-sm font-normal leading-none">
            {artist}
          </p>
        </div>
      </div>
    </div>
  );
}
