import { cn } from '@/utils';
import type { Metadata } from 'next';
import { Chab, LogoFont, Pretendard } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'LYRIC:IT',
  description: 'Play lyric-based games with your friends!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={cn(LogoFont.variable, Pretendard.variable, Chab.variable)}
    >
      <body className="select-none font-pretendard">{children}</body>
    </html>
  );
}
