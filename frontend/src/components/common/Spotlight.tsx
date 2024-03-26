'use client';

import { cn } from '@/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { type HTMLMotionProps, motion } from 'framer-motion';
import type { FC } from 'react';

const SpotlightVariants = cva(
  'absolute mix-blend-plus-lighter rounded-full blur-[75px] z-10',
  {
    variants: {
      variant: {
        pink: 'bg-primary/30',
        blue: 'bg-secondary/30',
        yellow: 'bg-tertiary/30',
      },
      size: {
        sm: 'w-[300px] h-[300px]',
        md: 'w-[450px] h-[450px]',
        lg: 'w-[600px] h-[600px]',
      },
    },
    defaultVariants: {
      variant: 'yellow',
      size: 'md',
    },
  },
);

type SpotlightProps = {
  path: number;
} & HTMLMotionProps<'div'> &
  VariantProps<typeof SpotlightVariants>;

const getOffsetPath = (path: number) => {
  const offsetPaths = [
    {
      className: 'path-1',
      scale: [1, 1.2, 1],
    },
    {
      className: 'path-2',
      scale: [1, 0.75, 1.2, 0.75, 1],
    },
    {
      className: 'path-3',
      scale: [1, 1.25, 0.75, 1.5, 0.8, 1],
    },
  ];

  return offsetPaths[path - 1] || offsetPaths[0];
};

const Spotlight: FC<SpotlightProps> = ({
  variant,
  size,
  className,
  path,
  ...props
}) => {
  const offsetPath = getOffsetPath(path);

  return (
    <motion.div
      initial={{ offsetDistance: '0%' }}
      animate={{ offsetDistance: '100%', scale: offsetPath.scale }}
      transition={{
        duration: 8,
        delay: 0,
        repeatDelay: 0,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'linear',
        type: 'tween',
      }}
      className={cn(
        SpotlightVariants({ variant, size }),
        offsetPath.className,
        className,
      )}
      {...props}
    />
  );
};

export default Spotlight;
