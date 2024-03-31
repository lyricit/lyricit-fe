'use client';

import type { MouseEventHandler } from 'react';
import ModalContainer from './ModalContainer';

const GameResultModal = ({ onClick }: { onClick: MouseEventHandler }) => {
  return (
    <ModalContainer onClick={onClick}>
      <section className="h-[300px] w-[300px] rounded-[20px] border-2 border-black bg-clip bg-neutral-400 bg-opacity-10 p-5 backdrop-blur-sm backdrop-filter">
        <span className="flex items-center justify-center bg-sky-400 px-5 font-chab text-2xl text-white">
          RESULTS
        </span>
        <div className="flex flex-col items-center justify-center gap-2 p-2 font-chab">
          <p className="flex items-center justify-start gap-5 self-stretch">
            <span className="w-5">🥇</span>
            <span className="w-[120px]">heecircle</span>
            <span className="">27600</span>
          </p>
          <p className="flex items-center justify-start gap-5 self-stretch">
            <span className="w-5">🥈</span>
            <span className="w-[120px]">kimgiraffe</span>
            <span className="">22400</span>
          </p>
          <p className="flex items-center justify-start gap-5 self-stretch">
            <span className="w-5">🥉</span>
            <span className="w-[120px]">itsmo</span>
            <span className="">16200</span>
          </p>
          <p className="flex items-center justify-start gap-5 self-stretch">
            <span className="w-5">🏅</span>
            <span className="w-[120px]">동휘리릭</span>
            <span className="">12300</span>
          </p>
          <p className="flex items-center justify-start gap-5 self-stretch">
            <span className="w-5">🏅</span>
            <span className="w-[120px]">세동세</span>
            <span className="">9000</span>
          </p>
          <p className="flex items-center justify-start gap-5 self-stretch">
            <span className="w-5">🏅</span>
            <span className="w-[120px]">takealook</span>
            <span className="">300</span>
          </p>
        </div>
        <div className="flex w-full justify-end">
          <button
            type="button"
            className="rounded border border-neutral-800 bg-transparent px-4 py-1 font-semibold text-sm hover:bg-neutral-200"
          >
            확인
          </button>
        </div>
      </section>
    </ModalContainer>
  );
};

export default GameResultModal;
