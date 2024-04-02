'use client';

import useTimer from '@/hooks/useTimer';
import type {
  GameActions,
  GameHistory,
  GameResult,
  GameStates,
  GameStatus,
  SpeakerType,
} from '@/types/game';
import type React from 'react';
import { createContext, useContext, useMemo, useState } from 'react';

const GameStatesContext = createContext<GameStates>({
  status: 'idle',
  timer: {
    leftTime: 0,
    isRunning: false,
  },
  highlight: {
    leftTime: 0,
    timeLimit: 0,
    isRunning: false,
    target: '',
    lyric: '',
    title: '',
    artist: '',
  },
  speaker: {
    memberId: '',
    nickname: '',
    decoType: 'default',
    faceType: 'default',
    decoColor: '#f266ab',
    skinColor: '#ffb254',
    score: 0,
  },
  score: 0,
  history: [],
  result: [],
});

const GameActionsContext = createContext<GameActions>({
  setStatus: () => {},
  timer: {
    handleStart: () => {},
    handlePause: () => {},
    handleReset: () => {},
    init: () => {},
  },
  highlight: {
    setTarget: () => {},
    setLyric: () => {},
    setTimeLimit: () => {},
    setArtist: () => {},
    setTitle: () => {},
    handleStart: () => {},
    handlePause: () => {},
    handleReset: () => {},
    init: () => {},
    resetHighlight: () => {},
  },
  speaker: {
    handleSpeaker: () => {},
    clearSpeaker: () => {},
  },
  history: {
    addHistory: () => {},
    clearHistory: () => {},
  },
  result: {
    setResult: () => {},
    clearResult: () => {},
  },
  setScore: () => {},
});

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const timer = useTimer();
  const highlightTimer = useTimer();
  const [target, setTarget] = useState<string>('');
  const [lyric, setLyric] = useState<string>('');
  const [timeLimit, setTimeLimit] = useState<number>(0);
  const [status, setStatus] = useState<GameStatus>('idle');
  const initialSpeakerState = useMemo<SpeakerType>(
    () => ({
      memberId: '',
      nickname: '',
      decoType: 'default',
      faceType: 'default',
      decoColor: '#f266ab',
      skinColor: '#ffb254',
      score: 0,
    }),
    [],
  );
  const [speaker, setSpeaker] = useState<SpeakerType>(initialSpeakerState);
  const [history, setHistory] = useState<GameHistory[]>([]);
  const [title, setTitle] = useState<string>('');
  const [artist, setArtist] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [result, setResult] = useState<GameResult[]>([]);

  const states = useMemo(
    () => ({
      status: status,
      timer: {
        leftTime: timer.leftTime,
        isRunning: timer.isRunning,
      },
      highlight: {
        leftTime: highlightTimer.leftTime,
        isRunning: highlightTimer.isRunning,
        target: target,
        lyric: lyric,
        timeLimit: timeLimit,
        title: title,
        artist: artist,
      },
      speaker: speaker,
      history: history,
      result: result,
      score: score,
    }),
    [
      timer.leftTime,
      timer.isRunning,
      highlightTimer.leftTime,
      highlightTimer.isRunning,
      target,
      lyric,
      timeLimit,
      status,
      speaker,
      history,
      title,
      artist,
      score,
      result,
    ],
  );

  const actions = useMemo(
    () => ({
      setStatus: (state: GameStatus) => setStatus(state),
      timer: {
        handleStart: timer.handleStart,
        handlePause: timer.handlePause,
        handleReset: timer.handleReset,
        init: timer.init,
      },
      highlight: {
        handleStart: highlightTimer.handleStart,
        handlePause: highlightTimer.handlePause,
        handleReset: highlightTimer.handleReset,
        init: highlightTimer.init,
        setTarget: (id: string) => setTarget(id),
        setLyric: (lyric: string) => setLyric(lyric),
        setTimeLimit: (time: number) => setTimeLimit(time),
        setTitle: (title: string) => setTitle(title),
        setArtist: (artist: string) => setArtist(artist),
        resetHighlight: () => {
          setTarget('');
          setLyric('');
          setTitle('');
          setArtist('');
          setScore(0);
          setSpeaker(initialSpeakerState);
          highlightTimer.handleReset();
        },
      },
      speaker: {
        handleSpeaker: (data: Partial<SpeakerType>) =>
          setSpeaker((prev) => {
            return {
              ...prev,
              ...data,
            };
          }),
        clearSpeaker: () => setSpeaker(initialSpeakerState),
      },
      history: {
        addHistory: (history: { title: string; artist: string }) =>
          setHistory((prev) => [...prev, history]),
        clearHistory: () => setHistory([]),
      },
      result: {
        setResult: (result: GameResult[]) => setResult(result),
        clearResult: () => setResult([]),
      },
      setScore: (score: number) => setScore(score),
    }),
    [
      timer.init,
      timer.handleStart,
      timer.handlePause,
      timer.handleReset,
      highlightTimer.init,
      highlightTimer.handleStart,
      highlightTimer.handlePause,
      highlightTimer.handleReset,
      initialSpeakerState,
    ],
  );

  return (
    <GameActionsContext.Provider value={actions}>
      <GameStatesContext.Provider value={states}>
        {children}
      </GameStatesContext.Provider>
    </GameActionsContext.Provider>
  );
};

export const useGameStates = () => {
  const context = useContext(GameStatesContext);
  if (context === null) {
    throw new Error('useGameStates must be used within a GameProvider');
  }
  return context;
};

export const useGameActions = () => {
  const context = useContext(GameActionsContext);
  if (context === null) {
    throw new Error('useGameActions must be used within a GameProvider');
  }
  return context;
};
