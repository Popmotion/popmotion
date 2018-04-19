import { Animated } from 'react-native';
import poseFactory, { PoserConfig } from '../../pose-core/src';
import defaultTransitions from './inc/default-transitions';
import { CreateValueProps, AnimatedPoser } from './types';

const pose = poseFactory<Animated.Value | Animated.AnimatedInterpolation, Animated.CompositeAnimation, AnimatedPoser>({
  bindOnChange: (values, onChange) => (key) => {
    if (values.has(key) && Animated.Value instanceof Animated.Value) {
      (values.get(key) as Animated.Value).addListener(onChange[key]);
    }
  },
  readValue: (value) => value.__getValue(),
  createValue: (init, { passiveParent, passiveProps }: CreateValueProps = {}) => {
    if (passiveParent) {
      return passiveParent.interpolate(passiveProps);
    } else {
      return new Animated.Value(init);
    }
  },
  startAction: (action, onComplete) => {
    action.start(onComplete);
    return action;
  },
  stopAction: (action) => action.stop(),
  getNoTransition: (value, toValue) => Animated.timing(value, {
    toValue,
    duration: 0
  }),
  addTransitionDelay: (delay = 0, transition) => Animated.sequence([
    Animated.delay(delay),
    transition
  ]),
  defaultTransitions,
  transformAPI: (api, state) => {
    return {
      ...api,
      addChild: (props: PoserConfig<Animated.Value | Animated.AnimatedInterpolation, Animated.CompositeAnimation>) => {
        return api.addChild(props, pose);
      }
    };
  }
});

export default pose;
