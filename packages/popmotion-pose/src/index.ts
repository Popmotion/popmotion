import poseFactory from '../../pose-core/lib';
import { Action } from 'popmotion/action';
import { ColdSubscription } from 'popmotion/action/types';
import { PopmotionPoser, Value } from './types';
import chain from 'popmotion/compositors/chain';
import delayAction from 'popmotion/compositors/delay';
import defaultTransitions, { just } from './inc/default-transitions';

const createPassiveValue = (init, key, parent, transform) => {};

const createValue = (init, key) => {};

const pose = poseFactory<Value, Action, ColdSubscription, PopmotionPoser>({
  bindOnChange: (values, onChange) => key => {
    if (!values.has(key)) return;

    const { raw } = values.get(key);
    raw.subscribe(onChange[key]);
  },

  readValue: value => value.get(),

  createValue: (init, key, { passiveParent, passiveProps }) =>
    passiveParent
      ? createPassiveValue(init, key, passiveParent, passiveProps)
      : createValue(init, key),

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

  getInstantTransition: (value, to) => just(to),

  addActionDelay: (delay = 0, transition) =>
    chain(delayAction(delay), transition),

  defaultTransitions,

  extendAPI: api => api
});
