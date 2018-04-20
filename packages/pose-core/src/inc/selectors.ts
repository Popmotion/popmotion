import { Pose, PoseMap, PoserConfig } from '../types';

export const getPoseValues = <A>({
  transition,
  delay,
  delayChildren,
  staggerChildren,
  staggerDirection,
  afterChildren,
  beforeChildren,
  ...props
}: Pose<A>): Pose<A> => props;

export const selectPoses = <V, A>({
  label,
  props,
  values,
  parentValues,
  ancestorValues,
  onChange,
  passive,
  initialPose,
  ...poses
}: PoserConfig<V>): PoseMap<A> => poses;
