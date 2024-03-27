'use client';

import type { MouseEventHandler } from 'react';

const ModalContainer = ({
  onClick,
  children,
}: {
  onClick: MouseEventHandler;
  children: React.ReactNode;
}) => {
  return (
    <div
      onClick={onClick}
      className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-white bg-opacity-30 backdrop-blur-md"
    >
      {children}
    </div>
  );
};

export default ModalContainer;
