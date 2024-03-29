'use client';

import GeneralContainer from '@/components/common/GeneralContainer';
import Header from '@/components/common/header/Header';
import { StompProvider } from '@/providers/StompProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Image from 'next/image';
import { useEffect } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Number.POSITIVE_INFINITY,
    },
  },
});

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const preventClose = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };

    (() => {
      window.addEventListener('beforeunload', preventClose);
    })();

    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  return (
    <StompProvider>
      <QueryClientProvider client={queryClient}>
        <div className="-z-10 fixed inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[#000000]/50">
            <Image
              src={'/main-background.jpg'}
              alt="background image"
              className="-z-20 object-cover object-top"
              fill
            />
          </div>
        </div>
        <Header />
        <main className="flex h-screen w-screen flex-shrink items-center justify-center pt-[60px]">
          <GeneralContainer
            color="white"
            className="m-auto h-[567px] w-[1200px]"
          >
            {children}
          </GeneralContainer>
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StompProvider>
  );
}
