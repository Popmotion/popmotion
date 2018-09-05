import { DomPopmotionPoser, DomPopmotionConfig } from 'popmotion-pose';

export type ChildRegistration = {
  element: Element;
  poseConfig: DomPopmotionConfig;
  onRegistered: (poser: DomPopmotionPoser) => void;
};

export type CurrentPose = string | string[];

export type PoseContextProps = {
  registerChild?: (props: ChildRegistration) => void;
  onUnmount?: (child: DomPopmotionPoser) => any;
  getInitialPoseFromParent?: () => CurrentPose;
  getParentPoseConfig?: () => DomPopmotionConfig;
};

export type PoseElementProps = {
  children?: any;
  pose?: CurrentPose;
  _pose?: CurrentPose;
  initialPose?: CurrentPose;
  withParent?: boolean;
  onValueChange?: { [key: string]: (v: any) => any };
  innerRef?: (el: Element) => any;
  [key: string]: any;
} & PoseContextProps;

export type PoseElementInternalProps = PoseElementProps & {
  elementType: any;
  poseConfig: DomPopmotionConfig;
};

export type PopStyle = {
  position: 'absolute';
  top: number;
  left: number;
  width: number;
  height: number;
};
