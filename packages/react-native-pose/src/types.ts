import { Animated } from 'react-native';
import { ReactNode } from 'react';
import { AnimatedPoser, AnimatedPoseConfig } from 'animated-pose';

export type PosedComponent = (config: AnimatedPoseConfig) => ReactNode;

export type PosedComponentFactory = (Component: any) => PosedComponent;

export type Posed = any;

// export type Posed = {
//   (Component: any): PosedComponent;
//   [key: string]: PosedComponent;
// }

export type PoseContextProps = {
  registerAsChild: (props: AnimatedPoseConfig) => AnimatedPoser;
  onUnmount: (child: AnimatedPoser) => void;
};

export type PoseComponentProps = {
  withParent?: boolean;
  pose?: CurrentPose;
  children?: React.ReactNode | ChildAsFunction;
  poseKey?: any;
  [key: string]: any;
};

export type ValueMap = {
  [key: string]: Animated.Value;
};

export type CurrentPose = string | string[];

export type ChildAsFunction = (values: ValueMap) => ReactNode;
