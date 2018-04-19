import { Props, Pose, PoserState, PoseMap, ChildPosers, Poser, GetNoTransition, StartAction, StopAction, AddTransitionDelay } from '../types';
import { getPoseValues } from '../inc/selectors';

type AnimationsPromiseList = Array<Promise<any>>;

type SetterFactoryProps<V, A> = {
  state: PoserState<V, A>;
  poses: PoseMap<A>;
  getNoTransition: GetNoTransition<V, A>;
  startAction: StartAction<A>;
  stopAction: StopAction<A>;
  addTransitionDelay: AddTransitionDelay<A>;
};

export const resolveProp = (target: any, props: Props) =>
  typeof target === 'function' ? target(props) : target;

const poseDefault = <A>(
  pose: Pose<A>,
  prop: string,
  defaultValue: any,
  resolveProps: Props
) =>
  pose && pose[prop] !== undefined
    ? resolveProp(pose[prop], resolveProps)
    : defaultValue;

const startChildAnimations = <A>(
  children: ChildPosers,
  next: string,
  pose: Pose<A>,
  props: Props
) => {
  const animations: Array<Promise<any>> = [];
  const delay = poseDefault<A>(pose, 'delayChildren', 0, props);
  const stagger = poseDefault<A>(pose, 'staggerChildren', 0, props);
  const staggerDirection = poseDefault<A>(pose, 'staggerDirection', 1, props);

  const maxStaggerDuration = (children.size - 1) * stagger;
  const generateStaggerDuration =
    staggerDirection === 1
      ? (i: number) => i * stagger
      : (i: number) => maxStaggerDuration - i * stagger;

  Array.from(children).forEach((child: Poser, i: number) => {
    animations.push(
      child.set(next, {
        ...props,
        delay: delay + generateStaggerDuration(i)
      })
    );
  });

  return animations;
};

const createPoseSetter = <V, A>(setterProps: SetterFactoryProps<V, A>) => (next: string, nextProps: Props = {}) => {
  const { state, poses, startAction, stopAction, getNoTransition, addTransitionDelay } = setterProps;
  const { children, values, props, activeActions, activePoses } = state;

  const { delay = 0 } = props;
  const hasChildren = children.size;
  const nextPose = poses[next];

  const baseTransitionProps = {
    ...props,
    ...nextProps
  };

  const getChildAnimations = (): AnimationsPromiseList => hasChildren
    ? startChildAnimations<A>(children, next, nextPose, baseTransitionProps)
    : [];

  const getParentAnimations = (): AnimationsPromiseList => {
    if (!nextPose) return [];

    // Potential hook: In Popmotion Pose, this is where we test and transform
    // if it's a flipPose. We could add a generic hook here, eg `transformPoseBeforeSet`

    const { transition: getTransition } = nextPose;

    return Object.keys(getPoseValues(nextPose)).map(key => {
      return new Promise((complete) => {
        const value = values.get(key);

        // Add hook: `getTransitionProps`
        const transitionProps = {
          ...baseTransitionProps,
          key,
          value
        };

        // Resolve target from pose
        const target = resolveProp(nextPose[key], transitionProps);

        // Stop the current action
        if (activeActions.has(key)) stopAction(activeActions.get(key));

        let transition = getTransition({
          to: target,
          ...transitionProps
        });

        if (transition === false) transition = getNoTransition(value, target);

        // Add delay if defined on pose
        const poseDelay = resolveProp(nextPose.delay, transitionProps);
        if (delay || poseDelay) {
          transition = addTransitionDelay(delay || poseDelay, transition);
        }

        // Start transition
        activeActions.set(key, startAction(transition, complete));
        activePoses.set(key, next);
      });
    });
  };

  // Check before and afterChildren props to check if we need to reorder these animations
  if (nextPose && hasChildren) {
    // parent before children
    if (resolveProp(nextPose.beforeChildren, baseTransitionProps)) {
      return Promise.all(getParentAnimations()).then(() =>
        Promise.all(getChildAnimations())
      );

      // children before parent
    } else if (resolveProp(nextPose.afterChildren, baseTransitionProps)) {
      return Promise.all(getChildAnimations()).then(() =>
        Promise.all(getParentAnimations())
      );
    }
  }

  // Otherwise, run all animations in parallel
  return Promise.all([...getParentAnimations(), ...getChildAnimations()]);
};

export default createPoseSetter;
