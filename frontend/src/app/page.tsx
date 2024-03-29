'use client';

import Spotlight from '@/components/common/Spotlight';
import LogoHero from '@/components/logo/LogoHero';
import LoginForm from '@/containers/auth/LoginForm';
import { AvatarProvider } from '@/providers/AvatarProvider';
import { consoleLogLogo } from '@/utils/console';
import Image from 'next/image';

export default function Home() {
  consoleLogLogo();

  return (
    <main className="container">
      <div className="-z-10 fixed inset-0 overflow-hidden">
        <Spotlight variant="blue" path={1} />
        <Spotlight variant="pink" path={2} />
        <Spotlight variant="yellow" path={3} />
        <div className="absolute h-full w-full bg-[radial-gradient(29.83%_60.95%_at_50%_39.05%,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.80)_73.64%,rgba(0,0,0,0.80)_100%)]">
          <Image
            src={'/index-background.jpg'}
            alt="background image"
            className="-z-20 object-cover object-top"
            fill
          />
        </div>
      </div>
      <div className="z-10 flex h-screen w-screen px-28">
        <div className="flex h-full w-full items-center justify-center pb-10">
          <LogoHero />
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <AvatarProvider>
            <LoginForm />
          </AvatarProvider>
        </div>
      </div>
    </main>
  );
}
