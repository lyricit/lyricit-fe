'use client';

import ColorSelector from '@/components/common/color/ColorSelector';
import { useAvatarActions, useAvatarStates } from '@/providers/AvatarProvider';
import useStore from '@/stores/useStore';
import { useUserStore } from '@/stores/user';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Avatar from './Avatar';
const AvatarSelector = () => {
  const {
    changeDecoType,
    changeFaceType,
    setDecoColor,
    setDecoType,
    setSkinColor,
    setFaceType,
  } = useAvatarActions();
  const { skinColor, decoColor, faceType, decoType } = useAvatarStates();

  const avatar = useStore(useUserStore, (state) => state.avatar);
  // userStore에 id가 ''이 아니라면 (유저 정보가 있다면) userStore의 avatar를 가져와서 초기값으로 설정

  useEffect(() => {
    if (avatar && avatar.skinColor !== '') {
      setSkinColor(avatar.skinColor);
      setDecoColor(avatar.decoColor);
      setFaceType(avatar.faceType);
      setDecoType(avatar.decoType);
    }
  }, [avatar, setSkinColor, setDecoColor, setFaceType, setDecoType]);

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
