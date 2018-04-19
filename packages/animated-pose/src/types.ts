import { Poser } from '../../pose-core/src/types';
import { Animated } from 'react-native';

export type Interpolation = {
  inputRange: number[],
  outputRange: string[] | number[]
};

export type CreateValueProps = {
  passiveParent?: Animated.Value;
  passiveProps?: Interpolation;
};

export type AnimatedPoser = Poser & {
  addChild: () => void;
};
