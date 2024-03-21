import type { RoomProps } from '@/types/room';
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
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      className={`w-[360px] h-20 bg-white rounded-[10px] border-2  justify-start items-start inline-flex ${
        status === 'waiting' ? 'border-emerald-500' : 'border-rose-600'
      }`}
    >
      <div
        className={`w-[75px] rounded-l-md self-stretch flex-col justify-center items-center gap-2.5 inline-flex ${
          status === 'waiting' ? 'bg-emerald-500' : 'bg-rose-600'
        } `}
      >
        <div className="px-[5px] rounded-[10px] flex-col justify-center items-center gap-2.5 flex">
          <span className="absolute z-0 text-center text-transparent text-2xl font-medium leading-7 text-stroke-darker">
            {id.toString().padStart(3, '0')}
          </span>
          <span className="text-center z-10 text-white text-2xl font-medium leading-7">
            {id.toString().padStart(3, '0')}
          </span>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-2.5 rounded-[20px] flex-col justify-between items-start inline-flex">
        <div className="self-stretch grow shrink basis-0 px-2.5 justify-start items-center gap-2.5 inline-flex">
          <span className="grow shrink basis-0 text-neutral-800 text-base font-semibold leading-tight">
            {title}
          </span>
          <div>{isOpen === false ? <IoMdLock /> : null}</div>
        </div>
        <div className="self-stretch grow shrink basis-0 px-[10px] justify-between items-center inline-flex">
          <div>
            {status === 'waiting' ? (
              <span className="relative z-0 text-white text-center text-base font-normal font-chab uppercase tracking-tight status-text-stroke after:text-stroke-width-5 after:text-emerald-500 after:content-['waiting']">
                <span className="absolute top-0 left-0 -z-10 text-emerald-500 text-center text-base font-normal font-chab uppercase tracking-tight status-text-stroke after:text-stroke-width-2 after:text-emerald-500 after:content-['waiting']">
                  {status}
                </span>
                {status}
              </span>
            ) : (
              <span className="relative z-0 text-white text-center text-base font-normal font-chab uppercase tracking-tight status-text-stroke after:text-stroke-width-5 after:text-rose-600 after:content-['playing']">
                <span className="absolute top-0 left-0 -z-10 text-rose-600 text-center text-base font-normal font-chab uppercase tracking-tight status-text-stroke after:text-stroke-width-2 after:text-rose-600 after:content-['playing']">
                  {status}
                </span>
                {status}
              </span>
            )}
          </div>
          <div className="px-5 py-1 bg-neutral-300 rounded-[40px] flex-col justify-start items-center inline-flex">
            <span className="text-center text-neutral-800 text-xs font-semibold uppercase leading-none">
              {current} / {limit}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
