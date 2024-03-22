const VisitorCard = ({ items }: { items: string[] }) => {
  return (
    <div className="inline-flex h-[180px] w-[158px] flex-col justify-start gap-2 rounded-[10px] bg-white">
      <div className="inline-flex w-[158px] items-center justify-center gap-2.5 rounded-t-[10px] border-black border-b-2 border-opacity-10 bg-neutral-300 py-[5px]">
        <div className="text-center font-semibold text-neutral-800 text-xs leading-none">
          접속자 정보
        </div>
      </div>
      {/* 스크롤 가능하도록 변경*/}
      <div className="mr-1 inline-flex flex-col items-start justify-start gap-1 overflow-y-auto px-3">
        {items.map((item) => (
          <div className="text-center font-semibold text-neutral-800 text-xs leading-none">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitorCard;
