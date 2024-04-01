'use client';

import { cn } from '@/utils';
import { motion } from 'framer-motion';

export default function RoomStartButton({
  isReady,
}: {
  isReady: boolean;
}) {
  return (
    <motion.div
      className="h-full w-full flex-grow rounded-[10px] bg-white"
      // ready to start 경우에만 hover 애니메이션

      whileHover={
        isReady
          ? {
              background: 'linear-gradient(to right, #f266ab, #2cd3e1)',
            }
          : {}
      }
      // ready to start 아닌 경우에만 회전 애니메이션

      animate={{
        rotate: isReady ? [0, 3, -3, 3, -3, 0] : 0,
        transition: {
          duration: 1,
          repeatDelay: 2,
          repeat: Number.POSITIVE_INFINITY,
        },
      }}
    >
      <button
        type="button"
        className={cn(
          'h-full w-full bg-gradient-to-r from-pink-400 to-sky-400 bg-clip-text font-bold text-3xl text-transparent',

          isReady
            ? 'bg-clip-text hover:text-white'
            : 'cursor-not-allowed bg-neutral-500',
        )}
      >
        START
      </button>
    </motion.div>
  );
}
