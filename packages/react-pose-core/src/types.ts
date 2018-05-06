import { Animated } from 'react-native';
import { ReactNode } from 'react';
import { AnimatedPoser, AnimatedPoseConfig } from 'animated-pose';

export type PosedComponent = (config: AnimatedPoseConfig) => ReactNode;

export type PosedComponentFactory = (Component: any) => PosedComponent;

export type Posed = any;

export type Props = { [key: string]: any };

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

export type PosedComponentFactoryConfig = {
  componentMap: { [key: string]: React.Component };
  poseFactory: (config: AnimatedPoseConfig) => AnimatedPoser;
  createAnimatedComponent: (component: React.Component) => React.Component;
  transformConfig: (
    config: AnimatedPoseConfig,
    props: PoseComponentProps
  ) => void;
  getProps: (
    poser: AnimatedPoser,
    config: AnimatedPoseConfig,
    props: PoseComponentProps
  ) => Props;
  getStylesFromPoser: (poser: AnimatedPoser) => { [key: string]: any };
};
