'use client';

import { cn } from '@/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import type { FC, HTMLProps } from 'react';

const GeneralContainerVariants = cva(
  'flex bg-opacity-30 border-2 backdrop-blur-[20px] rounded-3xl flex-grow',
  {
    variants: {
      color: {
        white: 'bg-white border-white/80',
        black: 'bg-black border-black/80',
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
