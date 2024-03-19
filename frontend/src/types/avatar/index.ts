export const DecorationKeys = {
  default: 'default',
  beanie: 'beanie',
  beanieCat: 'beanieCat',
  bob: 'bob',
  cap: 'cap',
  goggle: 'goggle',
  mask: 'mask',
  mohican: 'mohican',
  mole: 'mole',
} as const;

export const FaceKeys = {
  default: 'default',
  blank: 'blank',
  boo: 'boo',
  cat: 'cat',
  disappointed: 'disappointed',
  nyah: 'nyah',
  smirk: 'smirk',
  surprised: 'surprised',
  unpleased: 'unpleased',
  w: 'w',
} as const;

export type DecorationType = {
  [K in keyof typeof DecorationKeys]: JSX.Element;
};

export type FaceType = {
  [K in keyof typeof FaceKeys]: JSX.Element;
};
