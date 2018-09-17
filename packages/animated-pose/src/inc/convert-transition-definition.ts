import { Animated } from 'react-native';
import {
  linear,
  easeIn,
  easeOut,
  easeInOut,
  cubicBezier,
  circIn,
  circOut,
  circInOut,
  backIn,
  backOut,
  backInOut,
  anticipate
} from '@popmotion/easing';
import { invariant } from 'hey-listen';
const { spring, timing, loop: loopTransition, sequence } = Animated;

export type EasingFunction = (v: number) => number;
export type EasingDefinition =
  | string
  | [number, number, number, number]
  | EasingFunction;

export type TransitionConfigBase = {
  toValue: number;
  useNativeDriver: boolean;
  isInteraction?: boolean;
};

export type TweenConfig = TransitionConfigBase & {
  delay?: number;
  duration?: number;
  ease?: EasingDefinition;
  toValue: number;
  isInteraction: boolean;
  useNativeDriver: boolean;
};

export type SpringConfig = TransitionConfigBase & {
  stiffness?: number;
  damping?: number;
  mass?: number;
  velocity?: number;
  overshootClamping?: boolean;
  restSpeed?: number;
  restDelta?: number;
};

export type KeyframesConfig = TransitionConfigBase & {
  values: number[];
  duration?: number;
  easings?: EasingDefinition[] | EasingDefinition;
  times?: number[];
};

export type TransitionConfig = (
  | TweenConfig
  | SpringConfig
  | KeyframesConfig) & {
  type?: 'tween' | 'spring' | 'keyframes';
  loop?: number;
};

type TransitionFactoryMap = {
  [key: string]: (
    value: Animated.Value,
    props: TweenConfig | SpringConfig
  ) => Animated.CompositeAnimation;
};

const easingLookup: { [key: string]: (num: number) => number } = {
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

const convertEasing = (easing: EasingDefinition = easeOut) => {
  if (typeof easing === 'string') {
    invariant(
      easingLookup[easing] !== undefined,
      `Invalid easing type '${easing}'. popmotion.io/pose/api/config`
    );

    return easingLookup[easing];
  } else if (Array.isArray(easing)) {
    invariant(
      easing.length === 4,
      'Cubic bezier arrays must contain four numerical values.'
    );

    const [x1, y1, x2, y2] = easing;
    return cubicBezier(x1, y1, x2, y2);
  }

  return easing;
};

const defaultEasings = (num: number, defaultEasing: EasingDefinition) =>
  Array.from(new Array(num), () => defaultEasing || 'easeOut');

const defaultTimings = (num: number) =>
  Array.from(new Array(num), (_, i) => (i !== 0 ? i / (num - 1) : 0));

const createTransition: TransitionFactoryMap = {
  spring: (value, { restDelta, restSpeed, ...props }: SpringConfig) =>
    spring(value, {
      restDisplacementThreshold: restDelta,
      restSpeedThreshold: restSpeed,
      ...props
    }),
  tween: (value, { ease, ...props }: TweenConfig) =>
    timing(value, {
      easing: convertEasing(ease),
      ...props
    }),
  keyframes: (
    value,
    { values, easings, duration = 300, times, ...props }: KeyframesConfig
  ) => {
    const numValues = values.length;
    const calculatedEasings = Array.isArray(easings)
      ? easings
      : defaultEasings(numValues, easings);
    const calculatedTimings = times || defaultTimings(numValues);

    return sequence(
      values.reduce((animations, toValue, i) => {
        if (toValue !== undefined) {
          const iPrev = i - 1;
          const animation = createTransition.tween(value, {
            ...props,
            duration:
              i !== 0
                ? (calculatedTimings[i] - calculatedTimings[iPrev]) * duration
                : 0,
            ease: calculatedEasings[iPrev],
            delay: i === 1 ? calculatedTimings[0] * duration : 0,
            toValue
          });

          animations.push(animation);
        }

        return animations;
      }, [])
    );
  }
};

export default (
  value: Animated.Value,
  { type = 'tween', loop = 0, ...props }: TransitionConfig
) => {
  invariant(
    createTransition[type] !== undefined,
    `Invalid animation type '${type}' defined. Valid types are: 'tween', 'spring'`
  );

  let transition = createTransition[type](value, props);

  if (loop) {
    transition = loopTransition(transition, { iterations: loop });
  }

  return transition;
};
