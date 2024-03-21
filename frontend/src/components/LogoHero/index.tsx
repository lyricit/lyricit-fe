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
    <div className="relative w-[500px] h-[400px]">
      <Image
        src="/character.svg"
        width="400"
        height="400"
        alt="Character Image"
        priority={true}
        className="relative -z-10 mx-auto"
      />
      <div
        className="absolute left-2/4 transform -translate-x-1/2 bottom-1 uppercase text-white text-[6.25rem] font-logo -tracking-[0.3rem]
    text-stroke-pink-5 after:animate-flickering after:content-['LYRIC:IT']"
      >
        LYRIC:IT
      </div>
    </div>
  );
};

export default LogoHero;
