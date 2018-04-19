import { PoseMap, Pose, TransitionFactory } from "../types";

type DefaultTransitions<A> = Map<string, TransitionFactory<A>>;

const applyDefaultTransition = <A>(pose: Pose<A>, key: string, defaultTransitions: DefaultTransitions<A>): Pose<A> => {
  return {
    ...pose,
    transition: defaultTransitions.has(key)
      ? defaultTransitions.get(key)
      : defaultTransitions.get('default')
  };
};

const generateTransitions = <A>(poses: PoseMap<A>, defaultTransitions: DefaultTransitions<A>): PoseMap => {
  Object.keys(poses).forEach(key => {
    const pose = poses[key];
    poses[key] = pose.transition
      ? pose
      : applyDefaultTransition<A>(pose, key, defaultTransitions)
  });

  return poses;
}

export default generateTransitions;
