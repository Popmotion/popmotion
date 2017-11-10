import { Easing } from '../../easing';

export type ValueMap = {
  [key: string]: string | number
};

export type ValueList = string|number[];

export type KeyframeProps = {
  values: number[] | string[] | ValueMap[] | ValueList[],
  times?: number[],
  ease?: Easing[],
  duration?: number,
  loop?: number,
  flip?: number,
  yoyo?: number
};
