import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type RoomState = {
  password: string;
};

type Actions = {
  setPassword: (password: string) => void;
  invalidate: () => void;
};

const initialState: RoomState = {
  password: '',
};

export const useRoomStore = create<RoomState>()(
  immer(() => ({
    ...initialState,
  })),
);

const set = useRoomStore.setState;

const setPassword = (password: string) => {
  set((state) => {
    state.password = password;
  });
};

const invalidate = () => {
  set(() => initialState);
};

export const useRoomActions: Actions = {
  setPassword,
  invalidate,
};
