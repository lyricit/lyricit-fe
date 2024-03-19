import localFont from 'next/font/local';

export const LogoFont = localFont({
  src: '../../public/fonts/Library3AM.woff2',
  display: 'swap',
  variable: '--font-logo',
});

export const Pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

export const Chab = localFont({
  src: '../../public/fonts/chab.ttf',
  display: 'swap',
  variable: '--font-chab',
});
