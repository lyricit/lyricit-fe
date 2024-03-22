'use client';

import { AvatarSelector } from '@/components/avatar';
import GeneralContainer from '@/components/common/GeneralContainer';
import { AvatarProvider, useAvatarStates } from '@/providers/AvatarProvider';
import { motion } from 'framer-motion';

const LoginForm = () => {
  const { skinColor, decoColor, faceType, decoType } = useAvatarStates();

  const handleSubmit = () => {
    console.log('skinColor: ', skinColor);
    console.log('decoColor: ', decoColor);
    console.log('faceType: ', faceType);
    console.log('decoType: ', decoType);
  };

  return (
    <form action={handleSubmit}>
      <GeneralContainer color="black" className="gap-5 p-8">
        <div>
          <AvatarSelector />
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <input
            type="text"
            className="w-56 rounded-[10px] py-2 ps-3"
            placeholder="닉네임을 입력하세요"
          />
          <motion.button
            initial={{
              scale: 1,
              color: '#262626',
              background:
                'linear-gradient(98deg, #F6F6F6 0.52%, #F6F6F6 102.44%)',
            }}
            whileHover={{
              scale: 1.05,
              color: '#F6F6F6',
              background:
                'linear-gradient(98deg, #F372B2 0.52%, #2CD3E1 102.44%)',
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-56 rounded-[10px] bg-white py-2 font-bold"
            type="submit"
          >
            입장하기
          </motion.button>
        </div>
      </GeneralContainer>
    </form>
  );
};

export default LoginForm;
