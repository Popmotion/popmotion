import {
  spring,
  tween,
  decay,
  keyframes,
  physics,
  value,
  chain,
  easing,
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

const animationLookup = new Map<
  string,
  (props: { [key: string]: any }) => Action
>([
  ['tween', tween],
  ['spring', spring],
  ['decay', decay],
  ['keyframes', keyframes],
  ['physics', physics]
]);

const {
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

const easingLookup = new Map<string, (v: number) => number>([
  ['easeIn', easeIn],
  ['easeOut', easeOut],
  ['easeInOut', easeInOut],
  ['circIn', circIn],
  ['circOut', circOut],
  ['circInOut', circInOut],
  ['backIn', backIn],
  ['backOut', backOut],
  ['backInOut', backInOut],
  ['anticipate', anticipate]
]);

// At the moment this function just uses `type` as a key - in the future
// we could infer the animation type based on the properties being provided
const getAction = (
  v: Value,
  { type = 'tween', ease, ...def }: AnimationDef,
  { from, to, velocity }: TransitionProps
) => {
  invariant(
    animationLookup.has(type),
    `Invalid transition type '${type}'. Valid transition types are: tween, spring, decay, physics and keyframes.`
  );

  // Convert ease definition into easing function
  if (type === 'tween') {
    const typeOfEase = typeof ease;
    if (typeOfEase !== 'function') {
      if (typeOfEase === 'string') {
        invariant(
          easingLookup.has(ease),
          `Invalid easing type '${ease}'. popmotion.io/pose/api/transition`
        );

        ease = easingLookup.get(ease);
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

  return animationLookup.get(type)({
    from,
    to,
    velocity,
    ease,
    ...def
  });
};

const isAction = (action: any): action is Action =>
  typeof action.start !== 'undefined';

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

    convertTransitionDefinition: (
      val,
      def: AnimationDef | Action,
      props: TransitionProps
    ) => {
      if (isAction(def)) return def;

      const { delay, min, max, round, ...remainingDef } = def;
      const action = getAction(val, remainingDef, props);
      const outputPipe: Function[] = [];

      if (delay) addActionDelay(delay, action);
      if (min !== undefined) outputPipe.push((v: number) => Math.max(v, min));
      if (max !== undefined) outputPipe.push((v: number) => Math.min(v, max));
      if (round) outputPipe.push(Math.round);

      return outputPipe.length ? action.pipe(...outputPipe) : action;
    },

    addActionDelay,
    defaultTransitions,
    transformPose,
    readValueFromSource,
    extendAPI
  });

export default pose;
