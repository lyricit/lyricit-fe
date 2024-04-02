import { cn } from '@/utils';
import { IoMdStopwatch } from 'react-icons/io';

export default function GameHeader({
  keyword,
  limit,
  isHighlighted,
}: { keyword: string; limit: number; isHighlighted: boolean }) {
  return (
    <div className="flex w-full items-start justify-center bg-[#000000] bg-opacity-60 ps-2.5">
      <div className="flex h-10 w-full items-center justify-start">
        <span className="font-semibold text-white leading-tight">키워드</span>
      </div>
      <div className="flex h-10 w-full items-center justify-center">
        <span className="font-bold text-lg text-sky-400 leading-normal">
          {keyword}
        </span>
      </div>
      <div className="flex h-10 w-full items-center justify-end pe-2">
        <IoMdStopwatch size="20px" style={{ paddingRight: 1 }} color="white" />
        {/* 라운드 제한시간 */}
        <span
          className={cn(
            'font-semibold tabular-nums leading-tight tracking-tight',
            isHighlighted ? 'text-secondary' : 'text-tertiary',
          )}
        >
          {limit.toFixed(2)}초
        </span>
      </div>
    </div>
  );
}
