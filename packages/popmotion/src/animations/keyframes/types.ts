import { Easing } from '@popmotion/easing';

export type ValueMap = {
  [key: string]: string | number;
};

export type ValueList = string | number[];

export type Values = number[] | string[] | ValueMap[] | ValueList[];

export type KeyframesProps = {
  values: Values;
  times?: number[];
  ease?: Easing | Easing[] | { [key: string]: Easing };
  easings?: Easing[];
  elapsed?: number;
  duration?: number;
  loop?: number;
  flip?: number;
  yoyo?: number;
};
