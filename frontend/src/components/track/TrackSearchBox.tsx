export default function TrackSearchBox({
  placeholder,
}: {
  placeholder: string;
}) {
  return (
    <input
      className="grow shrink basis-0 h-[46px] px-10 py-[9px] bg-white rounded-[20px] justify-start items-center flex focus:outline-none"
      placeholder={placeholder}
    />
  );
}
