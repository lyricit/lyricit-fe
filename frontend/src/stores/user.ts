import type { AvatarType } from '@/types/avatar';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export type UserState = {
  id: string;
  nickname: string;
  avatar: AvatarType;
};

type Actions = {
  setAvatar: (avatar: AvatarType) => void;
  setNickname: (nickname: string) => void;
  setId: (id: string) => void;
};

const initialState: UserState = {
  id: '',
  nickname: '',
  avatar: {
    faceType: 'default',
    decoType: 'default',
    decoColor: '',
    skinColor: '',
  },
};

export const useUserStore = create<UserState>()(
  persist(
    immer(() => initialState),
    {
      name: 'user',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

const set = useUserStore.setState;

const setAvatar = (avatar: AvatarType) => {
  set((state) => {
    state.avatar = avatar;
  });
};

const setNickname = (nickname: string) => {
  set((state) => {
    state.nickname = nickname;
  });
};

const setId = (id: string) => {
  set((state) => {
    state.id = id;
  });
};

export const useUserActions: Actions = {
  setAvatar,
  setNickname,
  setId,
};
