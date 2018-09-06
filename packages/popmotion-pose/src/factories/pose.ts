import {
  spring,
  tween,
  decay,
  keyframes,
  physics,
  value,
  chain,
  easing,
  delay as delayAction,
  Action,
  ColdSubscription
} from 'popmotion';
import poseFactory, { Poser } from 'pose-core';
import {
  Value,
  TransitionProps,
  Transformer,
  PopmotionPoserFactoryConfig,
  AnimationDef
} from '../types';
import defaultTransitions, { just } from '../inc/default-transitions';
import { getValueType } from '../inc/value-types';
import { invariant } from 'hey-listen';
export { Poser };

const createPassiveValue = (
  init: any,
  parent: Value,
  transform: Transformer
) => {
  const raw = value(transform(init));
  parent.raw.subscribe((v: any) => raw.update(transform(v)));

  return { raw };
};

const createValue = (init: any) => {
  const type = getValueType(init);
  const raw = value(init);

  return { raw, type };
};

const addActionDelay = (delay = 0, transition: Action) =>
  chain(delayAction(delay), transition);

const animationLookup: {
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

// At the moment this function just uses `type` as a key - in the future
// we could infer the animation type based on the properties being provided
const getAction = (
  v: Value,
  { type = 'tween', ease, ...def }: AnimationDef,
  { from, to, velocity }: TransitionProps
) => {
  invariant(
    animationLookup[type] !== undefined,
    `Invalid transition type '${type}'. Valid transition types are: tween, spring, decay, physics and keyframes.`
  );

  // Convert ease definition into easing function
  if (type === 'tween') {
    const typeOfEase = typeof ease;
    if (typeOfEase !== 'function') {
      if (typeOfEase === 'string') {
        invariant(
          easingLookup[ease] !== undefined,
          `Invalid easing type '${ease}'. popmotion.io/pose/api/config`
        );

        ease = easingLookup[ease];
      } else if (Array.isArray(ease)) {
        invariant(
          ease.length === 4,
          `Cubic bezier arrays must contain four numerical values.`
        );

        const [x1, y1, x2, y2] = ease;
        ease = easing.cubicBezier(x1, y1, x2, y2);
      }
    }
  }

  const baseProps =
    type !== 'keyframes'
      ? {
          from,
          to,
          velocity,
          ease
        }
      : { ease };

  return animationLookup[type]({ ...baseProps, ...def });
};

const isAction = (action: any): action is Action =>
  typeof action.start !== 'undefined';

const pose = <P>({
  transformPose,
  addListenerToValue,
  extendAPI,
  readValueFromSource,
  posePriority,
  setValueNative
}: PopmotionPoserFactoryConfig<P>) =>
  poseFactory<Value, Action, ColdSubscription, P>({
    bindOnChange: (values, onChange) => key => {
      if (!values.has(key)) return;

      const { raw } = values.get(key);
      raw.subscribe(onChange[key]);
    },

    readValue: ({ raw }) => raw.get(),

    setValue: ({ raw }, to) => raw.update(to),

    createValue: (
      init,
      key,
      { elementStyler },
      { passiveParent, passiveProps } = {}
    ) => {
      const val = passiveParent
        ? createPassiveValue(init, passiveParent, passiveProps)
        : createValue(init);

      if (addListenerToValue) {
        val.raw.subscribe(addListenerToValue(key, elementStyler));
      }

      return val;
    },

    convertValue: (raw, key, { elementStyler }) => {
      if (addListenerToValue) {
        raw.subscribe(addListenerToValue(key, elementStyler));
      }

      return {
        raw,
        type: getValueType(raw.get())
      };
    },

    getTransitionProps: ({ raw, type }, to) => ({
      from: raw.get(),
      velocity: raw.getVelocity(),
      to,
      type
    }),

    resolveTarget: (_, to) => to,

    selectValueToRead: ({ raw }) => raw,

    startAction: ({ raw }, action, complete) => {
      const reaction = {
        update: (v: any) => raw.update(v),
        complete
      };

      return action.start(reaction);
    },

    stopAction: action => action.stop(),

    getInstantTransition: (_, { to }) => just(to),

    convertTransitionDefinition: (
      val,
      def: AnimationDef | Action,
      props: TransitionProps
    ) => {
      if (isAction(def)) return def;

      const { delay, min, max, round, ...remainingDef } = def;
      let action = getAction(val, remainingDef, props);
      const outputPipe: Function[] = [];

      if (delay) action = addActionDelay(delay, action);
      if (min !== undefined) outputPipe.push((v: number) => Math.max(v, min));
      if (max !== undefined) outputPipe.push((v: number) => Math.min(v, max));
      if (round) outputPipe.push(Math.round);

      return outputPipe.length ? action.pipe(...outputPipe) : action;
    },

    setValueNative,
    addActionDelay,
    defaultTransitions,
    transformPose,
    readValueFromSource,
    posePriority,
    extendAPI
  });

export default pose;
