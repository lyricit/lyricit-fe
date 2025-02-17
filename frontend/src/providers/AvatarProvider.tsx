'use client';

import { DecorationKeys, FaceKeys } from '@/types/avatar';
import { createContext, useContext, useMemo, useState } from 'react';

const AvatarActionsContext = createContext<AvatarActions | undefined>(
  undefined,
);
const AvatarStatesContext = createContext<AvatarStates | undefined>(undefined);

export interface AvatarActions {
  changeFaceType: (direction: 'prev' | 'next') => void;
  changeDecoType: (direction: 'prev' | 'next') => void;
  setSkinColor: (color: string) => void;
  setDecoColor: (color: string) => void;
  setDecoType: (type: keyof typeof DecorationKeys) => void;
  setFaceType: (type: keyof typeof FaceKeys) => void;
}

export interface AvatarStates {
  skinColor: string;
  decoColor: string;
  faceType: keyof typeof FaceKeys;
  decoType: keyof typeof DecorationKeys;
}

export const AvatarProvider = ({ children }: { children: React.ReactNode }) => {
  const faceTypes = useMemo(() => Object.values(FaceKeys), []);
  const decorationTypes = useMemo(() => Object.values(DecorationKeys), []);

  const [skinColor, setSkinColor] = useState<string>('#ffb84c');
  const [decoColor, setDecoColor] = useState<string>('#f266ab');
  const [faceType, setFaceType] = useState<keyof typeof FaceKeys>('default');
  const [decoType, setDecoType] =
    useState<keyof typeof DecorationKeys>('default');

  const states = useMemo(
    () => ({
      skinColor,
      decoColor,
      faceType,
      decoType,
    }),
    [skinColor, decoColor, faceType, decoType],
  );

  const actions = useMemo(
    () => ({
      changeFaceType: (direction: 'prev' | 'next') => {
        const currentIndex = faceTypes.indexOf(faceType);
        let nextIndex: number;
        if (direction === 'next') {
          nextIndex = (currentIndex + 1) % faceTypes.length;
        } else {
          nextIndex = (currentIndex - 1 + faceTypes.length) % faceTypes.length;
        }
        setFaceType(faceTypes[nextIndex]);
      },
      changeDecoType: (direction: 'prev' | 'next') => {
        const currentIndex = decorationTypes.indexOf(decoType);
        let nextIndex: number;
        if (direction === 'next') {
          nextIndex = (currentIndex + 1) % decorationTypes.length;
        } else {
          nextIndex =
            (currentIndex - 1 + decorationTypes.length) %
            decorationTypes.length;
        }
        setDecoType(decorationTypes[nextIndex]);
      },
      setSkinColor,
      setDecoColor,
      setDecoType,
      setFaceType,
    }),
    [decoType, faceType, decorationTypes, faceTypes],
  );

  return (
    <AvatarActionsContext.Provider value={actions}>
      <AvatarStatesContext.Provider value={states}>
        {children}
      </AvatarStatesContext.Provider>
    </AvatarActionsContext.Provider>
  );
};

export const useAvatarStates = () => {
  const context = useContext(AvatarStatesContext);
  if (context === undefined) {
    throw new Error('useAvatarStates must be used within a AvatarProvider');
  }
  return context;
};

export const useAvatarActions = () => {
  const context = useContext(AvatarActionsContext);
  if (context === undefined) {
    throw new Error('useAvatarActions must be used within a AvatarProvider');
  }
  return context;
};
