'use client';

import type { GameResult } from '@/types/game';
import type { MouseEventHandler } from 'react';
import ModalContainer from './ModalContainer';

const medal = ['🥇', '🥈', '🥉', '🏅', '🏅', '🏅'];

const GameResultModal = ({
  results,
  onClick,
}: { results: GameResult[]; onClick: MouseEventHandler }) => {
  return (
    <ModalContainer onClick={onClick}>
      <section
        onClick={(e) => e.stopPropagation()}
        className="h-[300px] w-[300px] rounded-[20px] border-2 border-black bg-clip bg-neutral-400 bg-opacity-10 p-5 backdrop-blur-sm backdrop-filter"
      >
        <span className="flex items-center justify-center bg-sky-400 px-5 font-chab text-2xl text-white">
          RESULTS
        </span>
        <div className="flex flex-col items-center justify-center gap-2 p-2 font-katuri">
          {results.map((result, index) => (
            <p
              key={result.memberId}
              className="flex items-center justify-start gap-5 self-stretch"
            >
              <span className="w-5">{medal[index]}</span>
              <span className="w-[120px]">{result.nickname}</span>
              <span>{result.score}</span>
            </p>
          ))}
        </div>
        <div className="flex w-full justify-end">
          <button
            type="button"
            onClick={onClick}
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
