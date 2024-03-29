'use client';

import { AvatarSelector } from '@/components/avatar';
import GeneralContainer from '@/components/common/GeneralContainer';
import { useAvatarStates } from '@/providers/AvatarProvider';
import useStore from '@/stores/useStore';
import { useUserActions, useUserStore } from '@/stores/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type LoginUser = z.infer<typeof formSchema> & {
  memberId: string;
  skinColor: string;
  decoColor: string;
  faceType: string;
  decoType: string;
};

type LoginResponse = {
  memberId: string;
};

const formSchema = z.object({
  nickname: z
    .string()
    .min(2, '닉네임은 2글자부터 가능해요.')
    .max(10, '닉네임은 최대 10글자까지 가능해요.'),
});

const LoginForm = () => {
  const router = useRouter();
  const avatar = useAvatarStates();
  const userAction = useUserActions;
  const userStore = useStore(useUserStore, (state) => state);
  const [nickname, setNickname] = useState<string | undefined>(undefined);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (userStore?.nickname) {
      setNickname(userStore.nickname);
      form.setValue('nickname', userStore.nickname);
    }
  }, [userStore?.nickname, form.setValue]);

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!userAction || !userStore || !values.nickname) return;

    const nickname = values.nickname.trim();

    const user: LoginUser = {
      memberId: userStore.id,
      nickname,
      ...avatar,
    };

    await login(user);
  };

  const login = async (user: LoginUser) => {
    try {
      const response = await fetch(
        'https://api-dev.lyricit.site/v1/members/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        },
      );

      if (response.ok) {
        const data: LoginResponse = await response.json();
        console.log(data);
        userAction.setId(data.memberId);
        userAction.setAvatar(avatar);
        userAction.setNickname(user.nickname);
        router.push('/lobby');
      } else {
        throw new Error('로그인에 실패했습니다.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <GeneralContainer color="black" className="gap-5 p-8">
        <div>
          <AvatarSelector />
        </div>
        <div className="flex flex-col items-center justify-center">
          <input
            type="text"
            className="w-56 rounded-[10px] py-2 ps-3"
            placeholder="닉네임을 입력하세요"
            defaultValue={nickname}
            {...form.register('nickname')}
          />
          <div className="flex h-6 w-full items-center justify-start ps-2">
            {form.formState.errors.nickname && (
              <p className="text-red-500 text-xs">
                {form.formState.errors.nickname.message}
              </p>
            )}
          </div>
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
