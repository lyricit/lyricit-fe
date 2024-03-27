import type { UserInfo } from '@/app/(main)/lobby/page';

const VisitorCard = ({ items }: { items?: UserInfo[] }) => {
  return (
    <div className="inline-flex h-[172px] w-[150px] flex-col justify-start gap-2 rounded-[10px] bg-white">
      <div className="inline-flex w-[150px] items-center justify-center gap-2.5 rounded-t-[10px] border-black border-b-2 border-opacity-10 bg-neutral-300 py-[5px]">
        <div className="text-center font-semibold text-neutral-800 leading-none">
          접속자 정보
        </div>
      </div>
      {/* 스크롤 가능하도록 변경*/}
      <ul className="flex h-full flex-col gap-1 overflow-y-auto px-3 pb-3">
        {items?.map((item, index) => (
          <li
            key={`${item.nickname}${index}`}
            className="overflow-x-hidden text-ellipsis whitespace-nowrap font-semibold text-neutral-800 text-xs"
          >
            {item.nickname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisitorCard;
