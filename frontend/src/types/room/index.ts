export type RoomProps = {
  id: number;
  title: string;
  status: 'waiting' | 'playing';
  isOpen: boolean;
  current: 1 | 2 | 3 | 4 | 5 | 6;
  limit: 2 | 3 | 4 | 5 | 6;
};
