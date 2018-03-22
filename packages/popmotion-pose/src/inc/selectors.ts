import { PropsAndPoses, PoseMap, Pose, DragProps } from '../types';

export type PoseSelector = (props: PropsAndPoses) => PoseMap;
export type PoseValuesSelector = (props: Pose) => Pose;
export type DragPropsSelector = (props: PropsAndPoses) => DragProps;

export const getPoses: PoseSelector = ({
  draggable,
  initialPose,
  passive,
  onChange,
  dragBounds,
  onDragStart,
  onDragEnd,
  parentValues,
  values,
  ...poses
}) => poses;

export const getPoseValues: PoseValuesSelector = ({
  transition,
  delay,
  delayChildren,
  staggerChildren,
  staggerDirection,
  ...props
}) => props;

export const getDragProps: DragPropsSelector = ({
  dragBounds,
  onDragStart,
  onDragEnd
}) => ({ dragBounds, onDragEnd, onDragStart });
