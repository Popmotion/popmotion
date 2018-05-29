import {
  spring,
  tween,
  decay,
  keyframes,
  physics,
  value,
  chain,
  delay as delayAction
} from 'popmotion';
import poseFactory from 'pose-core';
import { Action } from 'popmotion/action';
import { ColdSubscription } from 'popmotion/action/types';
import {
  Value,
  TransitionProps,
  Transformer,
  PopmotionPoserFactoryConfig,
  AnimationDef
} from '../types';
import { Poser } from 'pose-core';
import defaultTransitions, { just } from '../inc/default-transitions';
import { number, degrees, percent, px, ValueType } from 'style-value-types';
import { invariant } from 'hey-listen';
export { Poser };

const valueTypeTests = [number, degrees, percent, px];
const testValueType = (v: any) => (type: ValueType) => type.test(v);

const createPassiveValue = (
  init: any,
  parent: Value,
  transform: Transformer
) => {
  const raw = value(init).pipe(transform);
  parent.raw.subscribe(raw);

  return { raw };
};

const createValue = (init: any) => {
  const type = valueTypeTests.find(testValueType(init));
  const raw = value(type === number ? type.parse(init) : init);

  return { raw, type };
};

const addActionDelay = (delay = 0, transition: Action) =>
  chain(delayAction(delay), transition);

const animationLookup = new Map<string, Action>([
  ['tween', tween],
  ['spring', spring],
  ['decay', decay],
  ['keyframes', keyframes],
  ['physics', physics]
]);
// At the moment this function just uses `type` as a key - in the future
// we could infer the animation type based on the properties being provided
const getAction = (
  v: Value,
  { type, ...def }: AnimationDef,
  { from, to, velocity }: TransitionProps
) => {
  invariant(
    animationLookup.has(type),
    `You specified invalid transition type '${type}'. Valid transition types are: tween, spring, decay, physics and keyframes.`
  );

  return animationLookup.get(type)({
    from,
    to,
    velocity,
    ...def
  });
};

const pose = <P>({
  transformPose,
  addListenerToValue,
  extendAPI,
  readValueFromSource
}: PopmotionPoserFactoryConfig<P>) =>
  poseFactory<Value, Action, ColdSubscription, P>({
    bindOnChange: (values, onChange) => key => {
      if (!values.has(key)) return;

      const { raw } = values.get(key);
      raw.subscribe(onChange[key]);
    },

    readValue: ({ raw }) => raw.get(),

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
        type: valueTypeTests.find(testValueType(raw.get()))
      };
    },

    getTransitionProps: ({ raw, type }, to) => ({
      from: type ? type.parse(raw.get()) : raw.get(),
      velocity: raw.getVelocity(),
      to: type ? type.parse(to) : to,
      type
    }),

    resolveTarget: ({ type }, to) => (type ? type.parse(to) : to),

    selectValueToRead: ({ raw }) => raw,

    startAction: ({ raw, type }, action, complete) => {
      const reaction = {
        update: (v: any) => raw.update(v),
        complete
      };

      return type
        ? action.pipe(type.transform).start(reaction)
        : action.start(reaction);
    },

    stopAction: action => action.stop(),

    getInstantTransition: (_, { to }) => just(to),

    convertTransitionDefinition: (val, def: AnimationDef, props) => {
      if (typeof def.start === 'function') return def;

      const { delay, min, max, round, ...remainingDef } = def;
      const action = getAction(val, remainingDef, props);
      const outputPipe: Function[] = [];

      if (delay) addActionDelay(delay, action);
      if (min !== undefined) outputPipe.push((v: number) => Math.max(v, min));
      if (max !== undefined) outputPipe.push((v: number) => Math.min(v, max));
      if (round) outputPipe.push(Math.round);

      return outputPipe.length ? action.push(...outputPipe) : action;
    },

    addActionDelay,
    defaultTransitions,
    transformPose,
    readValueFromSource,
    extendAPI
  });

export default pose;
