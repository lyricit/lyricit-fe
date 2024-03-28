'use client';

import { cn } from '@/utils';
import { Exo } from 'next/font/google';
import { Avatar } from '../avatar';
import Nickname from '../profile/Nickname';

const exo = Exo({
  weight: '700',
  subsets: ['latin'],
});
export default function GameScore({
  score,
  nickname,
  isCorrect,
}: { score: number; nickname: string; isCorrect: boolean }) {
  return (
    <section
      className={cn(
        'flex items-center justify-center bg-opacity-40',
        isCorrect ? 'bg-yellow-600' : 'bg-violet-800',
      )}
    >
      <div
        className={cn(
          'relative flex grow items-center justify-center gap-10 overflow-hidden bg-opacity-60 p-5',
          isCorrect ? 'bg-yellow-400' : 'bg-violet-600',
        )}
      >
        <div className="z-10 flex flex-col items-center justify-center">
          <Avatar />
          <Nickname nickname={nickname} />
        </div>
        <div
          className={cn(
            'absolute top-[-60px] right-1/2 flex h-[331px] w-[331px] translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-b opacity-50',
            isCorrect
              ? 'from-amber-500 via-white to-amber-500'
              : 'from-violet-500 via-white to-violet-500',
          )}
        >
          <div
            className={cn(
              'flex h-[245px] w-[245px] items-center justify-center rounded-full bg-gradient-to-b opacity-100',
              isCorrect
                ? 'from-amber-300 via-white to-amber-300'
                : 'from-violet-300 via-white to-violet-300',
            )}
          >
            <div
              className={cn(
                'flex h-[185px] w-[185px] items-center justify-center rounded-full bg-gradient-to-b opacity-100',
                isCorrect
                  ? 'from-amber-100 via-white to-amber-100'
                  : 'from-violet-100 via-white to-violet-100',
              )}
            />
          </div>
        </div>
        <div
          className={cn(
            'flex flex-col items-center justify-center gap-2.5',
            exo.className,
          )}
        >
          <div className="relative z-10 text-5xl text-white">
            <span className="z-10">SCORE</span>
            <span
              className={cn(
                '-z-[1] absolute top-0 left-0 stroke-width-5 text-stroke',
                isCorrect ? 'text-stroke-yellow' : 'text-stroke-violet',
              )}
            >
              SCORE
            </span>
          </div>
          <div className="relative z-10 animate-blinking text-6xl">
            <span className="z-10 bg-gradient-to-b from-pink-400 to-sky-400 bg-clip-text text-transparent">
              {score}
            </span>
            <span className="-z-[1] absolute top-0 left-0 stroke-width-5 text-stroke text-stroke-white text-transparent">
              {score}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center font-kotra text-2xl text-white">
          <div className="relative z-10">
            <span className="z-10">
              {isCorrect ? '진심으로 감동 감동' : '너~~어 노래에'}
            </span>
            <span
              className={cn(
                '-z-[1] absolute top-0 left-0 stroke-width-5 text-stroke',
                isCorrect ? 'text-stroke-yellow' : 'text-stroke-violet',
              )}
            >
              {isCorrect ? '진심으로 감동 감동' : '너~~어 노래에'}
            </span>
          </div>
          <div className="relative z-10">
            <span className="z-10">
              {isCorrect ? '나랑 듀엣 어때요?' : '조금만 더 집!중!'}
            </span>
            <span
              className={cn(
                '-z-[1] absolute top-0 left-0 stroke-width-5 text-stroke',
                isCorrect ? 'text-stroke-yellow' : 'text-stroke-violet',
              )}
            >
              {isCorrect ? '나랑 듀엣 어때요?' : '조금만 더 집!중!'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
