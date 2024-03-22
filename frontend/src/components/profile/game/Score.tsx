const Score = ({ score }: { score: number }) => {
  return (
    <div className="inline-flex h-[42px] w-[102px] items-center justify-center gap-2.5 rounded-[30px] px-2.5 py-[5px]">
      <div className="text-center font-semibold text-[29px] text-black leading-loose">
        {score}
      </div>
    </div>
  );
};

export default Score;
