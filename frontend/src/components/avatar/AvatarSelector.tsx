'use client';

import ColorSelector from '@/components/common/color/ColorSelector';
import { useAvatarActions, useAvatarStates } from '@/providers/AvatarProvider';
import { motion } from 'framer-motion';
import Avatar from './Avatar';

const AvatarSelector = () => {
  const { changeDecoType, changeFaceType, changeSkinColor, changeDecoColor } =
    useAvatarActions();
  const { skinColor, decoColor, faceType, decoType } = useAvatarStates();

  return (
    <section className="flex">
      <div className="flex flex-col">
        <div className="flex gap-3">
          <div className="flex w-10 flex-grow flex-col items-center justify-center gap-2">
            <motion.button
              type="button"
              className="inline text-2xl text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => changeDecoType('prev')}
            >
              ◀
            </motion.button>
            <motion.button
              type="button"
              className="inline text-2xl text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => changeFaceType('prev')}
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
          <div className="flex w-10 flex-grow flex-col items-center justify-center gap-2">
            <motion.button
              type="button"
              className="inline text-2xl text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => changeDecoType('next')}
            >
              ▶
            </motion.button>
            <motion.button
              type="button"
              className="inline text-2xl text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => changeFaceType('next')}
            >
              ▶
            </motion.button>
          </div>
        </div>
        <div className="flex justify-evenly">
          <ColorSelector
            label="skin"
            color={skinColor}
            onChange={changeSkinColor}
          />
          <ColorSelector
            label="deco"
            color={decoColor}
            onChange={changeDecoColor}
          />
        </div>
      </div>
    </section>
  );
};

export default AvatarSelector;
