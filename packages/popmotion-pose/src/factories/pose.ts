import poseFactory from '../../../pose-core/src';
import { Action } from 'popmotion/action';
import value, { ValueReaction } from 'popmotion/reactions/value';
import { ColdSubscription } from 'popmotion/action/types';
import {
  PopmotionPoser,
  Value,
  Transformer,
  PopmotionPoserFactoryConfig
} from '../types';
import chain from 'popmotion/compositors/chain';
import delayAction from 'popmotion/compositors/delay';
import defaultTransitions, { just } from '../inc/default-transitions';
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
  parent: Value,
  transform: Transformer
) => {
  const raw = value(init, transform);
  parent.raw.subscribe(raw);

  return { raw };
};

const createValue = (init: any) => {
  const type = valueTypeTests.find(testValueType(init));
  const raw = value(type === number ? type.parse(init) : init);
  return { raw, type };
};

const pose = <P>({
  transformPose,
  addListenerToValue,
  extendAPI
}: PopmotionPoserFactoryConfig) =>
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

    getTransitionProps: ({ raw, type }, to) => ({
      from: type ? type.parse(raw.get()) : raw.get(),
      velocity: raw.getVelocity(),
      to: type ? type.parse(to) : to
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

    getInstantTransition: (_, to) => just(to),

    addActionDelay: (delay = 0, transition) =>
      chain(delayAction(delay), transition),

    defaultTransitions,
    transformPose,
    extendAPI
  });

export default pose;
