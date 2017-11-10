import { Easing } from '../../easing';

export type ValueMap = {
  [key: string]: string | number
};

export type ValueList = string|number[];

export type Values = number[] | string[] | ValueMap[] | ValueList[];

export type KeyframeProps = {
  values: Values,
  times?: number[],
  ease?: Easing[],
  duration?: number,
  loop?: number,
  flip?: number,
  yoyo?: number
};
