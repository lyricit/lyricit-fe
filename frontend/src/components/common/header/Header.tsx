import Link from 'next/link';

const Header = () => {
  return (
    <nav className="fixed top-0 z-50 flex w-full overflow-x-hidden border-primary border-b-4 bg-black/80 shadow-custom-pink">
      <div className="ml-5 flex items-center">
        <Link
          href="/"
          className="-tracking-[0.16rem] relative cursor-pointer font-logo text-[2rem] text-white hover:after:stroke-width-2 hover:after:text-primary hover:after:text-shadow-logo-sm hover:text-stroke hover:after:content-['LYRIC:IT']"
        >
          LYRIC:IT
        </Link>
      </div>
    </nav>
  );
};

export default Header;
