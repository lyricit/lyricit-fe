export default function GameLyric({ lyric }: { lyric: string }) {
  return (
    <div className="flex items-center justify-center p-10">
      <div className="relative z-10">
        <span className="font-katuri text-4xl text-white">{lyric}</span>
        <span className="-z-[1] absolute top-0 left-0 stroke-width-5 font-katuri text-4xl text-stroke text-stroke-blue text-transparent">
          {lyric}
        </span>
      </div>
    </div>
  );
}
