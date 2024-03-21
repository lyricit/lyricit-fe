import { cn } from '@/utils';
import type { Metadata } from 'next';
import { LogoFont, Pretendard } from './fonts';
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
    <html lang="ko" className={cn(LogoFont.variable, Pretendard.variable)}>
      <body className="font-pretendard select-none">{children}</body>
    </html>
  );
}
