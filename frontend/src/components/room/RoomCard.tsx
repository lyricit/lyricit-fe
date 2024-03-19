import type { RoomProps } from '@/types/room';
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
          <div className="text-center text-white text-2xl font-medium font-['Pretendard Variable'] leading-7">
            {id}
          </div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch p-2.5 rounded-[20px] flex-col justify-between items-start inline-flex">
        <div className="self-stretch grow shrink basis-0 px-2.5 justify-start items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 text-neutral-800 text-base font-semibold font-['Pretendard Variable'] leading-tight">
            {title}
          </div>
          <div>{isOpen === false ? <IoMdLock /> : null}</div>
        </div>
        <div className="self-stretch grow shrink basis-0 px-[5px] py-2.5 justify-between items-center inline-flex">
          <div className="px-[5px] flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-base font-normal font-['LOTTERIA CHAB'] uppercase tracking-tight">
              {status}
            </div>
          </div>
          <div className="px-5 py-1 bg-neutral-300 rounded-[40px] flex-col justify-start items-center inline-flex">
            <div className="text-center text-neutral-800 text-xs font-semibold font-['Pretendard Variable'] uppercase leading-none">
              {current} / {limit}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
