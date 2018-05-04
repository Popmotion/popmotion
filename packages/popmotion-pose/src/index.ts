import poseFactory from '../../pose-core/lib';
import { Action } from 'popmotion/action';
import value, { ValueReaction } from 'popmotion/reactions/value';
import { ColdSubscription } from 'popmotion/action/types';
import { PopmotionPoser, Value, Transformer } from './types';
import chain from 'popmotion/compositors/chain';
import delayAction from 'popmotion/compositors/delay';
import defaultTransitions, { just } from './inc/default-transitions';
import { number, degrees, percent, px, ValueType } from 'style-value-types';

// TODO:
// - Add FLIP methods
// - Add draggable
// - Add DOM stylers
// - Add Dimensions
// - Use the pre-transition hook to add dimensions

const valueTypeTests = [number, degrees, percent, px];
const testValueType = (v: any) => (type: ValueType) => type.test(v);

const createPassiveValue = (
  init: any,
  parent: ValueReaction,
  transform: Transformer
) => {
  const raw = value(init, transform);
  parent.subscribe(raw);

  return { raw };
};

const createValue = (init: any) => {
  const type = valueTypeTests.find(testValueType(init));
  const raw = value(type === number ? type.parse(init) : init);
  return { raw, type };
};

const pose = poseFactory<Value, Action, ColdSubscription, PopmotionPoser>({
  bindOnChange: (values, onChange) => key => {
    if (!values.has(key)) return;

    const { raw } = values.get(key);
    raw.subscribe(onChange[key]);
  },

  readValue: ({ raw }) => raw.get(),

  createValue: (init, key, { passiveParent, passiveProps }) =>
    passiveParent
      ? createPassiveValue(init, passiveParent, passiveProps)
      : createValue(init),

  getTransitionProps: ({ raw }, to) => ({
    from: raw.get(),
    velocity: raw.getVelocity(),
    to
  }),

  resolveTarget: ({ type }, to) => (type ? type.parse(to) : to),

  selectValueToRead: ({ raw }) => raw,

  startAction: ({ raw }, action, complete) =>
    action.start({
      update: (v: any) => raw.update(v),
      complete
    }),

  stopAction: action => action.stop(),

  getInstantTransition: (_, to) => just(to),

  addActionDelay: (delay = 0, transition) =>
    chain(delayAction(delay), transition),

  defaultTransitions,

  extendAPI: api => api
});
