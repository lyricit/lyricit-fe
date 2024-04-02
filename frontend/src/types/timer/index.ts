export type TimerStates = {
  leftTime: number;
  isRunning: boolean;
};

export type TimerActions = {
  handleStart: () => void;
  handlePause: () => void;
  handleReset: () => void;
  init: (time: number) => void;
};
