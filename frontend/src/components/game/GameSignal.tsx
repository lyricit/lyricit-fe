export default function GameIntro({ signal }: { signal: string }) {
  return (
    <section className="flex h-full w-full items-center justify-center">
      <section className="flex h-full w-full items-center justify-center gap-5 rounded-[10px] bg-[#000000] bg-opacity-60 px-5 py-10 text-white">
        <div className="whitespace-nowrap text-4xl text-primary">
          <p className="font-semibold">{signal}</p>
        </div>
      </section>
    </section>
  );
}
