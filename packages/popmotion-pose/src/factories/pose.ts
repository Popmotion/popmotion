import {
  value,
  chain,
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
  TransitionDefinition,
  CubicBezierArgs
} from '../types';
import defaultTransitions, { just } from '../inc/default-transitions';
import { animationLookup, easingLookup } from '../inc/lookups';
import { getValueType } from '../inc/value-types';
import { invariant } from 'hey-listen';
import * as easing from '@popmotion/easing';
import { Easing } from '@popmotion/easing';
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

const isCubicBezierArgs = (
  args: Easing[] | CubicBezierArgs
): args is CubicBezierArgs => typeof args[0] === 'number';

// At the moment this function just uses `type` as a key - in the future
// we could infer the animation type based on the properties being provided
const getAction = (
  v: Value,
  { type = 'tween', ease: definedEase, ...def }: TransitionDefinition,
  { from, to, velocity }: TransitionProps
) => {
  invariant(
    animationLookup[type] !== undefined,
    `Invalid transition type '${type}'. Valid transition types are: tween, spring, decay, physics and keyframes.`
  );

  let ease: Exclude<
    typeof definedEase,
    keyof typeof easingLookup | CubicBezierArgs
  >;

  // Convert ease definition into easing function
  if (type === 'tween') {
    if (typeof definedEase !== 'function') {
      if (typeof definedEase === 'string') {
        invariant(
          easingLookup[definedEase] !== undefined,
          `Invalid easing type '${definedEase}'. popmotion.io/pose/api/config`
        );

        ease = easingLookup[definedEase];
      } else if (Array.isArray(definedEase) && isCubicBezierArgs(definedEase)) {
        invariant(
          definedEase.length === 4,
          `Cubic bezier arrays must contain four numerical values.`
        );
        const [x1, y1, x2, y2] = definedEase;
        ease = easing.cubicBezier(x1, y1, x2, y2);
      }
    }
  }

  ease = ease || (definedEase as typeof ease);

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
}: PopmotionPoserFactoryConfig<P, TransitionDefinition>) =>
  poseFactory<Value, Action, ColdSubscription, P, TransitionDefinition>({
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

      val.raw.subscribe(addListenerToValue(key, elementStyler));

      return val;
    },

    convertValue: (raw, key, { elementStyler }) => {
      raw.subscribe(addListenerToValue(key, elementStyler));

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
      val: Value,
      def: TransitionDefinition | Action,
      props: TransitionProps
    ): Action => {
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
