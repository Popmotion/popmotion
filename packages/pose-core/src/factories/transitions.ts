import { PoseMap, Pose, TransitionMapFactory, TransitionMap } from '../types';
import { invariant } from 'hey-listen';

type DefaultTransitions<A, TD> = Map<
  string,
  TransitionMap<A, TD> | TransitionMapFactory<A, TD>
>;

const applyDefaultTransition = <A, TD>(
  pose: Pose<A, TD>,
  key: string,
  defaultTransitions: DefaultTransitions<A, TD>
): Pose<A, TD> => {
  return {
    ...pose,
    transition: defaultTransitions.has(key)
      ? defaultTransitions.get(key)
      : defaultTransitions.get('default')
  };
};

const generateTransitions = <A, TD>(
  poses: PoseMap<A, TD>,
  defaultTransitions: DefaultTransitions<A, TD>
): PoseMap<A, TD> => {
  Object.keys(poses).forEach(key => {
    const pose = poses[key];

    invariant(
      typeof pose === 'object',
      `Pose '${key}' is of invalid type. All poses should be objects.`
    );

    poses[key] =
      pose.transition !== undefined
        ? pose
        : applyDefaultTransition<A, TD>(pose, key, defaultTransitions);
  });

  return poses;
};

export default generateTransitions;
