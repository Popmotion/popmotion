import { ColdSubscription } from 'popmotion/action/types';
import { value } from 'popmotion';
import poseFactory from '../../pose-core/src';
import createDimensions from './factories/dimensions';
import defaultTransitions from './inc/default-transitions';
import { PopmotionPoserConfig } from './types';
import { ValueReaction } from 'popmotion/reactions/value';

const passThrough = (v: any) => v;

const pose = poseFactory<ValueReaction, ColdSubscription>({
  getDefaultProps: ({ element }: PopmotionPoserConfig) => ({
    dimensions: createDimensions(element)
  }),
  defaultTransitions,
  bindOnChange: (values, onChange) => (key) => {
    if (values.has(key)) values.get(key).subscribe(onChange[key]);
  },
  readValue: value => value.get(),
  createValue: (init, { passiveParent, passiveProps = passThrough }) => {
    if (passiveParent) {
      const newValue = value(init, passiveProps);
      passiveParent.subscribe(newValue);
      return newValue;
    } else {
      return value(init);
    }
  }
});

export default (element: Element, config: PopmotionPoserConfig) => {
  return pose({
    element,
    ...config
  });
};
