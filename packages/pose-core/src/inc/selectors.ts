import {
  Pose,
  PoseMap,
  PoserConfig,
  ValueMap,
  SelectValueToRead
} from '../types';

export const getPoseValues = <A>({
  transition,
  flip,
  delay,
  delayChildren,
  staggerChildren,
  staggerDirection,
  afterChildren,
  beforeChildren,
  preTransition,
  applyAtStart,
  applyAtEnd,
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

export const selectAllValues = <V>(
  values: ValueMap<V>,
  selectValue: SelectValueToRead<V>
) => {
  const allValues: { [key: string]: any } = {};
  values.forEach(
    (value: V, key: string) => (allValues[key] = selectValue(value))
  );
  return allValues;
};
