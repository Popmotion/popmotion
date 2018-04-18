import { PoserConfig, PoseMap } from 'types';

export const getPoses = <P, V>({
  label,
  props,
  ...poses
}: PoserConfig<P, V>): PoseMap => poses;
