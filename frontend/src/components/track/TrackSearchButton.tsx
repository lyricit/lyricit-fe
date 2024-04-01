export default function TrackSearchButton() {
  return (
    <button
      type="submit"
      className="flex w-[15%] items-center justify-center gap-2.5 rounded-[10px] bg-white from-pink-400 to-sky-400 shadow hover:bg-gradient-to-r hover:text-white"
    >
      <div className="text-center font-semibold text-lg leading-7">검색</div>
    </button>
  );
}
