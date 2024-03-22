'use client';

import { cva } from 'class-variance-authority';
import Image from 'next/image';

const LogoVariants = cva(
  'relative uppercase text-white font-logo -tracking-[0.3rem]',
  {
    variants: {
      type: {
        hero: 'text-[6.25rem] text-stroke-pink-5 after:animate-flickering after:content-["LYRIC:IT"]',
      },
    },
  },
);

const LogoHero = () => {
  return (
    <div className="relative h-[400px] w-[500px]">
      <Image
        src="/character.svg"
        width="400"
        height="400"
        alt="Character Image"
        priority={true}
        className="-z-10 relative mx-auto"
      />
      <div className="-translate-x-1/2 -tracking-[0.3rem] absolute bottom-1 left-2/4 transform font-logo text-[6.25rem] text-stroke-pink-5 text-white uppercase after:animate-flickering after:content-['LYRIC:IT']">
        LYRIC:IT
      </div>
    </div>
  );
};

export default LogoHero;
