import { Value } from '../../reactions/value';
import { Action } from '../../action';
import { Easing } from '@popmotion/easing';

export type AnimationDefinition = {
  track: string,
  from?: Value,
  to?: Value,
  duration?: number,
  ease?: Easing,
  at?: number
};

export type Instruction = number | string | AnimationDefinition | Array<AnimationDefinition | number>;

export type Tracks = {
  [key: string]: AnimationDefinition[]
};

export type TrackActions = {
  [key: string]: Action
};
