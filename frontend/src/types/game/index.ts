import type { AvatarType } from '../avatar';
import type { TimerActions, TimerStates } from '../timer';

export type GameActions = {
  setStatus: (state: 'idle' | 'highlight' | 'correct' | 'incorrect') => void;
  timer: TimerActions;
  highlight: TimerActions & {
    setTarget: (id: string) => void;
    setLyric: (lyric: string) => void;
    setTimeLimit: (time: number) => void;
    setTitle: (title: string) => void;
    setArtist: (artist: string) => void;
    resetHighlight: () => void;
  };
  speaker: {
    handleSpeaker: (data: Partial<SpeakerType>) => void;
    clearSpeaker: () => void;
  };
  history: {
    addHistory: (history: { title: string; artist: string }) => void;
    clearHistory: () => void;
  };
  setScore: (score: number) => void;
};

export type GameStates = {
  status: 'idle' | 'highlight' | 'correct' | 'incorrect';
  timer: TimerStates;
  highlight: TimerStates & {
    target: string;
    lyric: string;
    title: string;
    artist: string;
    timeLimit: number;
  };
  speaker: SpeakerType;
  history: GameHistory[];
  score: number;
};

export type SpeakerType = AvatarType & {
  memberId: string;
  nickname: string;
  score: number;
};

export type GameHistory = {
  title: string;
  artist: string;
};

export type GameRoomInfo = {
  roomNumber: string;
  name: string;
  roundLimit: number;
  roundTime: number;
  leaderId: string;
};

export type GameRoomMember = {
  member: {
    memberId: string;
    nickname: string;
    decoType: string;
    faceType: string;
    decoColor: string;
    skinColor: string;
  };
  score: number;
};

export type GameInfo = {
  currentRound: number;
  keyword: string;
};

export type GameChat = {
  nickname: string;
  content: string;
};
