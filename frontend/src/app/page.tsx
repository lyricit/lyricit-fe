import LogoHero from '@/components/LogoHero';
import Spotlight from '@/components/Spotlight';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative">
      <div className="w-screen h-screen absolute inset-0 -z-10 overflow-hidden">
        <Spotlight variant="blue" path={1} />
        <Spotlight variant="pink" path={2} />
        <Spotlight variant="yellow" path={3} />
        <div className="w-full h-full bg-[radial-gradient(29.83%_60.95%_at_50%_39.05%,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.80)_73.64%,rgba(0,0,0,0.80)_100%)]">
          <Image
            src={'/index-background.jpg'}
            alt="background image"
            className="object-top object-cover -z-20"
            fill
          />
        </div>
      </div>
      <div className="z-10 flex w-screen h-screen px-28">
        <div className="h-full w-full flex items-center justify-center pb-10">
          <LogoHero />
        </div>
        <div className="h-full w-full flex items-center justify-center">
          {/* TODO: 프로필 설정 및 로그인 박스 */}
        </div>
      </div>
    </main>
  );
}
