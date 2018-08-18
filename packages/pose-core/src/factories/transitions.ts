import { PoseMap, Pose, TransitionFactory, TransitionMap } from '../types';
import { invariant } from 'hey-listen';

type DefaultTransitions<A> = Map<
  string,
  TransitionFactory<A> | TransitionMap<A>
>;

const applyDefaultTransition = <A>(
  pose: Pose<A>,
  key: string,
  defaultTransitions: DefaultTransitions<A>
): Pose<A> => {
  return {
    ...pose,
    transition: defaultTransitions.has(key)
      ? defaultTransitions.get(key)
      : defaultTransitions.get('default')
  };
};

const generateTransitions = <A>(
  poses: PoseMap<A>,
  defaultTransitions: DefaultTransitions<A>
): PoseMap<A> => {
  Object.keys(poses).forEach(key => {
    const pose = poses[key];

    invariant(
      typeof pose === 'object',
      `Pose '${key}' is of invalid type. All poses should be objects.`
    );

    poses[key] =
      pose.transition !== undefined
        ? pose
        : applyDefaultTransition<A>(pose, key, defaultTransitions);
  });

  return poses;
};

export default generateTransitions;
