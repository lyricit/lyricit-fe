import { cn } from '@/utils';
import { type VariantProps, cva } from 'class-variance-authority';

const ProgressBarVariants = cva('', {
  variants: {
    color: {
      yellow: 'bg-yellow-400',
      sky: 'bg-sky-400',
    },
  },
  defaultVariants: {
    color: 'yellow',
  },
});

type ProgressBarProps = {
  remaining: number;
  total: number;
} & VariantProps<typeof ProgressBarVariants>;

export default function GameProgressBar({
  remaining,
  total,
  color,
}: ProgressBarProps) {
  return (
    <div className="flex h-1 w-full bg-transparent">
      <div
        className={cn('h-1', ProgressBarVariants({ color }))}
        style={{ width: `${(remaining / total) * 100}%` }}
      />
    </div>
  );
}
