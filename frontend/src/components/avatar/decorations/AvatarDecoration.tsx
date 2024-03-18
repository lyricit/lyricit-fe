import type { DecorationType } from '@/types/avatar';
import {
  DecorationBeanie,
  DecorationBeanieCat,
  DecorationBob,
  DecorationCap,
  DecorationGoggle,
  DecorationMask,
  DecorationMohican,
  DecorationMole,
} from '.';

const getDecorations = (color?: string): DecorationType => ({
  default: <></>,
  beanie: <DecorationBeanie color={color} />,
  beanieCat: <DecorationBeanieCat color={color} />,
  bob: <DecorationBob color={color} />,
  cap: <DecorationCap color={color} />,
  goggle: <DecorationGoggle color={color} />,
  mask: <DecorationMask color={color} />,
  mohican: <DecorationMohican color={color} />,
  mole: <DecorationMole color={color} />,
});

const AvatarDecoration = ({
  type = 'default',
  color,
}: { type: keyof DecorationType; color?: string }) => {
  const decorations: DecorationType = getDecorations(color);
  return <g id="deco">{decorations[type]}</g>;
};

export default AvatarDecoration;
