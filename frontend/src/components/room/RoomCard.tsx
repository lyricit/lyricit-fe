import type { RoomProps } from '@/types/room';
import { cn } from '@/utils';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { IoMdLock } from 'react-icons/io';

export default function RoomCard({
  id,
  title,
  status,
  isOpen,
  current,
  limit,
}: RoomProps) {
  return (
    // empty 인 경우 id, title, status, isOpen, current, limit 모두 빈 값으로 렌더링

    <div>
      {status === 'empty' ? (
        <div className="inline-flex h-20 w-[360px] items-start justify-start overflow-clip rounded-[10px] border-2 border-neutral-200 bg-white">
          <div className="inline-flex w-[75px] flex-col items-center justify-center gap-2.5 self-stretch rounded-1-md bg-neutral-200" />
        </div>
      ) : (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          className={cn(
            'inline-flex h-20 w-[360px] items-start justify-start rounded-[10px] border-2 bg-white',
            status === 'waiting' ? 'border-emerald-500' : 'border-rose-600',
          )}
        >
          <div
            className={cn(
              'inline-flex w-[75px] flex-col items-center justify-center gap-2.5 self-stretch rounded-l-md',
              status === 'waiting' ? 'bg-emerald-500' : 'bg-rose-600',
            )}
          >
            <div className="flex flex-col items-center justify-center gap-2.5 rounded-[10px] px-[5px]">
              <span className="absolute z-0 text-center font-medium text-2xl text-stroke-darker text-transparent leading-7">
                {id.toString().padStart(3, '0')}
              </span>
              <span className="z-10 text-center font-medium text-2xl text-white leading-7">
                {id.toString().padStart(3, '0')}
              </span>
            </div>
          </div>
          <div className="inline-flex shrink grow basis-0 flex-col items-start justify-between self-stretch rounded-[20px] p-2.5">
            <div className="inline-flex shrink grow basis-0 items-center justify-start gap-2.5 self-stretch px-2.5">
              <span className="shrink grow basis-0 font-semibold text-base text-neutral-800 leading-tight">
                {title}
              </span>
              <div>{isOpen === false ? <IoMdLock /> : null}</div>
            </div>
            <div className="inline-flex shrink grow basis-0 items-center justify-between self-stretch px-[10px]">
              <div>
                {status === 'waiting' ? (
                  <span className="relative z-0 text-center font-chab font-normal text-base text-stroke text-white uppercase tracking-tight after:text-emerald-500 after:text-stroke-width-5 after:content-['waiting']">
                    <span className="-z-10 absolute top-0 left-0 text-center font-chab font-normal text-base text-emerald-500 text-stroke uppercase tracking-tight after:text-emerald-500 after:text-stroke-width-2 after:content-['waiting']">
                      {status}
                    </span>
                    {status}
                  </span>
                ) : (
                  <span className="relative z-0 text-center font-chab font-normal text-base text-stroke text-white uppercase tracking-tight after:text-rose-600 after:text-stroke-width-5 after:content-['playing']">
                    <span className="-z-10 absolute top-0 left-0 text-center font-chab font-normal text-base text-rose-600 text-stroke uppercase tracking-tight after:text-rose-600 after:text-stroke-width-2 after:content-['playing']">
                      {status}
                    </span>
                    {status}
                  </span>
                )}
              </div>
              <div className="inline-flex flex-col items-center justify-start rounded-[40px] bg-neutral-300 px-5 py-1">
                <span className="text-center font-semibold text-neutral-800 text-xs uppercase leading-none">
                  {current} / {limit}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
