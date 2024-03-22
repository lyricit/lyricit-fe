export default function TrackSearchBox({
  placeholder,
}: {
  placeholder: string;
}) {
  return (
    <input
      className="flex h-[46px] shrink grow basis-0 items-center justify-start rounded-[20px] bg-white px-10 py-[9px] focus:outline-none"
      placeholder={placeholder}
    />
  );
}
