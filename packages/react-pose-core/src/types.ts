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
  initialPose?: CurrentPose;
  children?: React.ReactNode | ChildAsFunction;
  onPoseComplete?: (pose: CurrentPose) => any;
  poseKey?: any;
  popFromLayout?: boolean;
  [key: string]: any;
};

export type ValueMap = {
  [key: string]: Animated.Value;
};

export type CurrentPose = string | string[];

export type ChildAsFunction = (values: ValueMap) => ReactNode;

export type Layout = {
  x: number;
  y: number;
  height: number;
  width: number;
};

export type PosedComponentFactoryConfig = {
  componentMap: { [key: string]: React.Component };
  poseFactory: any;
  createAnimatedComponent: (component: React.Component) => React.Component;
  filterConfig: (config: AnimatedPoseConfig) => AnimatedPoseConfig;
  transformConfig: (
    config: AnimatedPoseConfig,
    props: PoseComponentProps
  ) => void;
  getProps: (
    poser: AnimatedPoser,
    config: AnimatedPoseConfig,
    props: PoseComponentProps,
    setLayout: (layout: Layout) => void
  ) => Props;
  getStylesFromPoser: (poser: AnimatedPoser) => { [key: string]: any };
};
