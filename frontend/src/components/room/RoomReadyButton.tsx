'use client';

import { cn } from '@/utils';
import { motion } from 'framer-motion';
import type { MouseEventHandler } from 'react';

export default function RoomReadyButton({
  onClick,
  isReady,
}: {
  onClick: MouseEventHandler;
  isReady: boolean;
}) {
  return (
    <motion.div
      className="h-full w-full flex-grow rounded-[10px] bg-white"
      whileHover={{
        background: 'linear-gradient(to right, #f266ab, #2cd3e1)',
      }}
      animate={{
        rotate: !isReady ? [0, 3, -3, 3, -3, 0] : 0,
        transition: {
          duration: 1,
          repeatDelay: 2,
          repeat: Number.POSITIVE_INFINITY,
        },
      }}
    >
      <button
        type="button"
        onClick={onClick}
        className={cn(
          'h-full w-full bg-gradient-to-r from-pink-400 to-sky-400 bg-clip-text font-bold text-3xl text-transparent hover:text-white',

          !isReady ? 'bg-clip-text' : 'bg-neutral-500',
        )}
      >
        READY
      </button>
    </motion.div>
  );
}
