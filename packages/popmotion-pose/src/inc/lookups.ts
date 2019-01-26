import {
  spring,
  tween,
  decay,
  keyframes,
  physics,
  Action
} from 'popmotion';
import * as easing from '@popmotion/easing';

export const animationLookup: {
  [key: string]: (props: { [key: string]: any }) => Action;
} = {
  tween,
  spring,
  decay,
  keyframes,
  physics
};

export const easingLookup = {
  linear: easing.linear,
  easeIn: easing.easeIn,
  easeOut: easing.easeOut,
  easeInOut: easing.easeInOut,
  circIn: easing.circIn,
  circOut: easing.circOut,
  circInOut: easing.circInOut,
  backIn: easing.backIn,
  backOut: easing.backOut,
  backInOut: easing.backInOut,
  anticipate: easing.anticipate,
};
