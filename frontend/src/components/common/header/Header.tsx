import Link from 'next/link';

const Header = () => {
  return (
    <nav className="fixed top-0 z-50 w-full overflow-x-hidden border-primary border-b-4 bg-black/80 shadow-custom-pink">
      <ul className="flex justify-between">
        <li className="ml-5 flex items-center">
          <Link
            href="/"
            className="-tracking-[0.16rem] relative cursor-pointer font-logo text-[2rem] text-white hover:after:stroke-width-2 hover:after:text-primary hover:after:text-shadow-logo-sm hover:text-stroke hover:after:content-['LYRIC:IT']"
          >
            LYRIC:IT
          </Link>
        </li>
        <li className="mr-5 flex items-center gap-5">
          <Link
            href="/lobby"
            className="font-semibold text-base text-white hover:text-primary"
          >
            LOBBY
          </Link>
          <Link
            href="/dictionary"
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
