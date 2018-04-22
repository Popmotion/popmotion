import { Animated } from 'react-native';
import { ReactElement, ReactNode } from 'react';
import { AnimatedPoseProps } from 'animated-pose';

export type PosedComponent = (config: AnimatedPoseProps) => ReactElement<any>;

export type PosedComponentFactory = (
  Component: React.Component
) => PosedComponent;

export type Posed = {
  (): PosedComponentFactory;
  [key: string]: PosedComponent;
};

export type PoseContextProps = {};

export type ValueMap = {
  [key: string]: Animated.Value;
};

export type ChildAsFunction = (values: ValueMap) => ReactElement<any>;
