type DecorationKeys =
  | 'default'
  | 'beanie'
  | 'beanieCat'
  | 'bob'
  | 'cap'
  | 'goggle'
  | 'mask'
  | 'mohican'
  | 'mole';

type FaceKeys =
  | 'default'
  | 'blank'
  | 'boo'
  | 'cat'
  | 'disappointed'
  | 'nyah'
  | 'smirk'
  | 'surprised'
  | 'unpleased'
  | 'w';

export type DecorationType = {
  [K in DecorationKeys]: JSX.Element;
};

export type FaceType = {
  [K in FaceKeys]: JSX.Element;
};
