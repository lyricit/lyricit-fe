const Nickname = ({ nickname }: { nickname: string }) => {
  return (
    <div className="inline-flex w-[150px] flex-col items-center gap-2.5 rounded-[30px] border border-black bg-white px-3 py-2">
      <span className="h-4 text-center font-semibold text-black text-sm leading-none">
        {nickname}
      </span>
    </div>
  );
};

export default Nickname;
