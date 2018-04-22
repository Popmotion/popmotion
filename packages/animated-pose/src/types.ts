import { Poser, PoserConfig } from 'pose-core';
import { Animated } from 'react-native';

export type Interpolation = {
  inputRange: number[];
  outputRange: string[] | number[];
};

export type Value = {
  raw?: Animated.Value;
  interpolation?: Animated.AnimatedInterpolation;
};

export type Action = Animated.CompositeAnimation;

export interface AnimatedPoser extends Poser<Value, Action, AnimatedPoser> {
  addChild: (config: PoserConfig<Value>) => AnimatedPoser;
}

export type TransitionProps = {
  value: Animated.Value;
  toValue: number;
};

export type Transition = (
  { value, toValue }: TransitionProps
) => Animated.CompositeAnimation;

export type CreateValueProps = {
  passiveParent?: Value;
  passiveProps?: Interpolation;
};

export type AnimatedPoseConfig = PoserConfig<Value>;
