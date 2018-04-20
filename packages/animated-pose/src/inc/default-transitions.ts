import { Transition } from '../types';
import { Animated } from 'react-native';
import { eachValue } from '../../../pose-core/src';

const tween: Transition = ({ value, toValue }) =>
  Animated.timing(value, {
    toValue,
    duration: 300,
    useNativeDriver: true
  });

const linearTween: Transition = ({ value, toValue }) =>
  Animated.timing(value, {
    toValue,
    duration: 300,
    easing: v => v,
    useNativeDriver: true
  });

const overDampedSpring: Transition = ({ value, toValue }) =>
  Animated.spring(value, {
    toValue,
    stiffness: 700,
    damping: toValue === 0 ? 100 : 35,
    useNativeDriver: true
  });

const underDampedSpring: Transition = ({ value, toValue }) =>
  Animated.spring(value, {
    toValue,
    stiffness: 500,
    damping: 25,
    restDisplacementThreshold: 0.5,
    restSpeedThreshold: 10,
    useNativeDriver: true
  });

const intelligentTransition = eachValue({
  x: underDampedSpring,
  y: underDampedSpring,
  z: underDampedSpring,
  rotate: underDampedSpring,
  rotateX: underDampedSpring,
  rotateY: underDampedSpring,
  rotateZ: underDampedSpring,
  scaleX: overDampedSpring,
  scaleY: overDampedSpring,
  scaleZ: overDampedSpring,
  scale: overDampedSpring,
  opacity: linearTween,
  default: tween
});

export default new Map([['default', intelligentTransition]]);
