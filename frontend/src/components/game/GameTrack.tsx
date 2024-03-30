export default function GameTrack({
  title,
  artist,
}: { title: string; artist: string }) {
  return (
    <div className="w-full flex-col items-center justify-start gap-2.5 bg-[#000000] bg-opacity-60 p-2.5">
      <p className="flex gap-2 font-semibold text-[#05ff00]">
        제목<span className="text-white"> {title}</span>
      </p>
      <p className="flex gap-2 font-semibold text-[#05ff00]">
        가수<span className="text-white"> {artist}</span>
      </p>
    </div>
  );
}
