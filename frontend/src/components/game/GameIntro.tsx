import Image from 'next/image';

export default function GameIntro() {
  return (
    <section className="flex h-full w-full items-center justify-center">
      <section className="flex items-center justify-center gap-5 rounded-[10px] bg-[#000000] bg-opacity-60 px-5 py-10 text-white">
        <Image
          src={'/singing-dog.png'}
          alt="singing-dog"
          width={80}
          height={80}
        />
        <div className="whitespace-nowrap">
          <p className="font-semibold">
            키워드가 들어가는 <span className="text-pink-400">가사</span>를
            입력하세요!
          </p>
          <p className="font-semibold">제한 시간이 지나면 라운드가 종료돼요.</p>
          <p className="mt-2 font-semibold text-xs text-yellow-400">띄어쓰기 포함 8자 이상 입력하세요!</p>
        </div>
      </section>
    </section>
  );
}
