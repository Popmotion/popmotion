import {
  spring,
  tween,
  decay,
  keyframes,
  physics,
  easing,
  Action
} from 'popmotion';

export const animationLookup: {
  [key: string]: (props: { [key: string]: any }) => Action;
} = {
  tween,
  spring,
  decay,
  keyframes,
  physics
};

const {
  linear,
  easeIn,
  easeOut,
  easeInOut,
  circIn,
  circOut,
  circInOut,
  backIn,
  backOut,
  backInOut,
  anticipate
} = easing;

export const easingLookup = {
  linear,
  easeIn,
  easeOut,
  easeInOut,
  circIn,
  circOut,
  circInOut,
  backIn,
  backOut,
  backInOut,
  anticipate
};
