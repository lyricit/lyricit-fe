'use client';

import { cn } from '@/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import type { FC, HTMLProps } from 'react';

const GeneralContainerVariants = cva(
  'relative flex bg-opacity-30 border-2 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-[1] before:backdrop-blur-[20px] rounded-3xl flex-shrink',
  {
    variants: {
      color: {
        white: 'bg-white border-white/30',
        black: 'bg-black border-black/30',
      },
    },
    defaultVariants: {
      color: 'white',
    },
  },
);

type GeneralContainerProps = {} & HTMLProps<'div'> &
  VariantProps<typeof GeneralContainerVariants>;

const GeneralContainer: FC<GeneralContainerProps> = ({
  color,
  children,
  ...props
}) => {
  return (
    <section
      className={cn(GeneralContainerVariants({ color }), props.className)}
    >
      {children}
    </section>
  );
};

export default GeneralContainer;
