import type { ChangeEvent, FormEvent } from 'react';

export default function TrackSearchBox({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      className="mr-3 flex h-[46px] w-[60%] shrink grow basis-0 items-center justify-start rounded-[20px] bg-white px-10 py-[9px] focus:outline-none"
      placeholder={placeholder}
      name="search"
      onChange={onChange}
    />
  );
}
