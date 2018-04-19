import { Pose } from '../types';

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
