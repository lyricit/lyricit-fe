'use client';

import ColorSelector from '@/components/common/color/ColorSelector';
import { DecorationKeys, FaceKeys } from '@/types/avatar';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Avatar from './Avatar';

const AvatarSelector = () => {
  const faceTypes = Object.values(FaceKeys);
  const decorationTypes = Object.values(DecorationKeys);
  const [skinColor, setSkinColor] = useState<string | undefined>('#ffb84c');
  const [decoColor, setDecoColor] = useState<string | undefined>('#f266ab');
  const [faceType, setFaceType] = useState<keyof typeof FaceKeys>('default');
  const [decoType, setDecoType] =
    useState<keyof typeof DecorationKeys>('default');

  const handleFaceTypeChange = (direction: 'prev' | 'next') => {
    const currentIndex = faceTypes.indexOf(faceType);
    console.log('currentIndex', currentIndex);
    let nextIndex: number;
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % faceTypes.length;
    } else {
      nextIndex = (currentIndex - 1 + faceTypes.length) % faceTypes.length;
    }
    setFaceType(faceTypes[nextIndex]);
  };

  const handleDecoTypeChange = (direction: 'prev' | 'next') => {
    const currentIndex = decorationTypes.indexOf(decoType);
    console.log('currentIndex', currentIndex);
    let nextIndex: number;
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % decorationTypes.length;
    } else {
      nextIndex =
        (currentIndex - 1 + decorationTypes.length) % decorationTypes.length;
    }
    setDecoType(decorationTypes[nextIndex]);
  };

  return (
    <section className="flex">
      <div className="flex flex-col">
        <div className="flex">
          <div className="flex flex-col flex-grow items-center justify-center w-10 gap-2">
            <motion.button
              className="text-white text-2xl inline"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => handleDecoTypeChange('prev')}
            >
              ◀
            </motion.button>
            <motion.button
              className="text-white text-2xl inline"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => handleFaceTypeChange('prev')}
            >
              ◀
            </motion.button>
          </div>
          <Avatar
            skinColor={skinColor}
            decoColor={decoColor}
            faceType={faceType}
            decoType={decoType}
          />
          <div className="flex flex-col flex-grow items-center justify-center w-10 gap-2">
            <motion.button
              className="text-white text-2xl inline"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => handleDecoTypeChange('next')}
            >
              ▶
            </motion.button>
            <motion.button
              className="text-white text-2xl inline"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => handleFaceTypeChange('next')}
            >
              ▶
            </motion.button>
          </div>
        </div>
        <div className="flex justify-evenly">
          <ColorSelector
            label="skin"
            color={skinColor}
            onChange={setSkinColor}
          />
          <ColorSelector
            label="deco"
            color={decoColor}
            onChange={setDecoColor}
          />
        </div>
      </div>
    </section>
  );
};

export default AvatarSelector;
