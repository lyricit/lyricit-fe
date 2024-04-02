import type { AvatarType } from '../avatar';

export type ProfileProps = {
  avatar: AvatarType;
  nickname: string;
  score: number;
  isHighlighted?: boolean;
};
