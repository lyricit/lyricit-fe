'use client';

import { useEffect, useRef, useState } from 'react';

const useTimer = () => {
  const initialState = useRef<number>(0);
  const [leftTime, setLeftTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const countRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (leftTime === 0) {
      clearInterval(countRef.current);
      setIsRunning(false);
    }
  }, [leftTime]);

  const handleStart = () => {
    countRef.current = setInterval(() => {
      setLeftTime((prevTime) =>
        Number.parseFloat((prevTime - 0.01).toFixed(2)),
      );
    }, 10);
    setIsRunning(true);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsRunning(false);
    setLeftTime(initialState.current);
  };

  const init = (time: number) => {
    initialState.current = time;
    setLeftTime(time);
    setIsRunning(false);
  };

  return {
    leftTime,
    isRunning,
    handleStart,
    handlePause,
    handleReset,
    init,
  };
};

export default useTimer;
