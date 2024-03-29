export default function GameRound({ round }: { round: number }) {
  return (
    <span className="flex h-20 w-full select-text items-center justify-center rounded-[10px] bg-pink-400 font-bold text-2xl text-white">
      ROUND {round}
    </span>
  );
}
