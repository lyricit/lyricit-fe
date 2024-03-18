import type { FaceType } from '@/types/avatar';
import {
  FaceBlank,
  FaceBoo,
  FaceCat,
  FaceDefault,
  FaceDisappointed,
  FaceNyah,
  FaceSmirk,
  FaceSurprised,
  FaceUnpleased,
  FaceW,
} from './index';

const faces: FaceType = {
  default: <FaceDefault />,
  blank: <FaceBlank />,
  boo: <FaceBoo />,
  cat: <FaceCat />,
  disappointed: <FaceDisappointed />,
  nyah: <FaceNyah />,
  smirk: <FaceSmirk />,
  surprised: <FaceSurprised />,
  unpleased: <FaceUnpleased />,
  w: <FaceW />,
};

const AvatarFace = ({ type = 'default' }: { type: keyof FaceType }) => (
  <g id="face">{faces[type]}</g>
);

export default AvatarFace;
