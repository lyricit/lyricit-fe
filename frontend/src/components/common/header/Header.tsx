'use client';

import { useSubscriber } from '@/providers/StompProvider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const path = usePathname();
  const subscriber = useSubscriber();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (path !== '/lobby' && path !== '/dictionary') {
      const confirmLeave = window.confirm('정말 이동하시겠습니까?');
      if (!confirmLeave) {
        event.preventDefault();
        return;
      }
      subscriber.getSubscriber('room')?.unsubscribe();
      subscriber.removeSubscriber('room');
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full overflow-x-hidden border-primary border-b-4 bg-black/80 shadow-custom-pink">
      <ul className="flex justify-between">
        <li className="ml-5 flex items-center">
          <Link
            href="/"
            onClick={handleClick}
            className="-tracking-[0.16rem] relative cursor-pointer font-logo text-[2rem] text-white hover:after:stroke-width-2 hover:after:text-primary hover:after:text-shadow-logo-sm hover:text-stroke hover:after:content-['LYRIC:IT']"
          >
            LYRIC:IT
          </Link>
        </li>
        <li className="mr-5 flex items-center gap-5">
          <Link
            href="/lobby"
            onClick={handleClick}
            className="font-semibold text-base text-white hover:text-primary"
          >
            LOBBY
          </Link>
          <Link
            href="/dictionary"
            onClick={handleClick}
            className="font-semibold text-base text-white hover:text-primary"
          >
            DICTIONARY
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
