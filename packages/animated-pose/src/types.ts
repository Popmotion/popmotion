import { Poser, PoserConfig } from 'pose-core';
import { Animated } from 'react-native';

export type Interpolation = {
  inputRange: number[];
  outputRange: string[] | number[];
};

export type Value = {
  raw?: Animated.Value;
  interpolation?: Animated.AnimatedInterpolation;
  useNativeDriver?: boolean;
};

export type Action = Animated.CompositeAnimation;

export interface AnimatedPoser
  extends Poser<Value, Action, Action, AnimatedPoser> {
  addChild: (config: AnimatedPoseConfig) => AnimatedPoser;
  flip: (prev: Layout, next: Layout) => void;
}

export type TransitionProps = {
  value: Animated.Value;
  toValue: number;
  [key: string]: any;
};

export type Transition = (
  { value, toValue }: TransitionProps
) => false | Animated.CompositeAnimation;

export type CreateValueProps = {
  passiveParent?: Value;
  passiveProps?: Interpolation;
  passiveParentKey?: string;
};

export type AnimatedPoseConfig = PoserConfig<Value>;

export type AnimatedFactoryConfig = {
  convertUnitToPoints: (v: string) => number;
  unitConverters: UnitConverterMap;
};

export type AnimatedPoserFactory = (
  config: AnimatedPoseConfig
) => Poser<Value, Action, Action, AnimatedPoser>;

export type UnitConverter = (v: number) => number;

export type DimensionConverterFactory = (
  viewport: 'window' | 'screen',
  axis: 'width' | 'height'
) => UnitConverter;

export type UnitConverterMap = { [key: string]: UnitConverter };

export type Layout = {
  x: number;
  y: number;
  width: number;
  height: number;
};
