import {
  Props,
  Pose,
  PoserState,
  PoseMap,
  ChildPosers,
  GetTransitionProps,
  GetInstantTransition,
  StartAction,
  StopAction,
  ResolveTarget,
  TransformPose,
  AddTransitionDelay,
  ConvertTransitionDefinition,
  TransitionDefinition,
  TransitionFactory,
  TransitionMap
} from '../types';
import { getPoseValues } from '../inc/selectors';

type AnimationsPromiseList = Array<Promise<any>>;

type SetterFactoryProps<V, A, C, P> = {
  state: PoserState<V, A, C, P>;
  poses: PoseMap<A>;
  getInstantTransition: GetInstantTransition<V, A>;
  startAction: StartAction<V, A, C>;
  stopAction: StopAction<C>;
  addActionDelay: AddTransitionDelay<A>;
  getTransitionProps: GetTransitionProps<V>;
  resolveTarget: ResolveTarget<V>;
  convertTransitionDefinition: ConvertTransitionDefinition<V, A>;
  transformPose?: TransformPose<V, A, C, P>;
  posePriority?: string[];
  isReducedMotion: () => boolean;
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

const startChildAnimations = <V, A, C, P>(
  children: ChildPosers<V, A, C, P>,
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

  Array.from(children).forEach((child, i) => {
    animations.push(
      child.set(next, {
        ...props,
        delay: delay + generateStaggerDuration(i)
      })
    );
  });

  return animations;
};

const resolveTransition = <V, A>(
  transition: TransitionMap<A> | TransitionFactory<A>,
  key: string,
  value: V,
  props: Props,
  convertTransitionDefinition: ConvertTransitionDefinition<V, A>,
  getInstantTransition: GetInstantTransition<V, A>
): A => {
  let resolvedTransition: A | false | TransitionDefinition;

  /**
   * transition: () => {}
   */
  if (typeof transition === 'function') {
    resolvedTransition = transition(props);

    // Or if it's a keyed object
  } else if (transition[key] || transition.default) {
    const keyTransition = transition[key] || transition.default;

    /**
     * transition: {
     *  x: () => {}
     * }
     */
    if (typeof keyTransition === 'function') {
      resolvedTransition = (keyTransition as TransitionFactory<A>)(props);

      /**
       * transition: {
       *  x: { type: 'tween' } || false
       * }
       */
    } else {
      resolvedTransition = keyTransition;
    }

    /**
     * transition: { type: 'tween' } || false
     */
  } else {
    resolvedTransition = transition;
  }

  return resolvedTransition === false
    ? getInstantTransition(value, props)
    : convertTransitionDefinition(value, resolvedTransition, props);
};

const findInsertionIndex = (
  poseList: string[],
  priorityList: string[],
  priorityIndex: number
) => {
  let insertionIndex = 0;

  for (let i = priorityIndex - 1; i >= 0; i--) {
    const nextHighestPriorityIndex = poseList.indexOf(priorityList[i]);
    if (nextHighestPriorityIndex !== -1) {
      insertionIndex = nextHighestPriorityIndex + 1;
      break;
    }
  }

  return insertionIndex;
};

const createPoseSetter = <V, A, C, P>(
  setterProps: SetterFactoryProps<V, A, C, P>
) => {
  const {
    state,
    poses,
    startAction,
    stopAction,
    getInstantTransition,
    addActionDelay,
    getTransitionProps,
    resolveTarget,
    transformPose,
    posePriority,
    convertTransitionDefinition,
    isReducedMotion
  } = setterProps;

  return (next: string, nextProps: Props = {}, propagate: boolean = true) => {
    const { children, values, props, activeActions, activePoses } = state;
    const { delay = 0 } = nextProps;
    const hasChildren = children.size;

    const baseTransitionProps = {
      ...props,
      ...nextProps
    };

    let nextPose = poses[next];

    const getChildAnimations = (): AnimationsPromiseList =>
      hasChildren && propagate
        ? startChildAnimations(children, next, nextPose, baseTransitionProps)
        : [];

    const getParentAnimations = (): AnimationsPromiseList => {
      if (!nextPose) return [];

      if (transformPose) nextPose = transformPose(nextPose, next, state);

      const { preTransition, transition: getTransition } = nextPose;

      // Run pre-transition prep, if set
      if (preTransition) preTransition(baseTransitionProps);

      return Object.keys(getPoseValues(nextPose)).map(key => {
        // Add pose to the pose order
        const valuePoses = activePoses.has(key)
          ? activePoses.get(key)
          : (activePoses.set(key, []), activePoses.get(key));

        // Remove pose if it already exists
        const existingIndex = valuePoses.indexOf(next);
        if (existingIndex !== -1) valuePoses.splice(existingIndex, 1);

        // Insert pose in its priority order
        const priority = posePriority ? posePriority.indexOf(next) : 0;
        const insertionIndex =
          priority <= 0
            ? 0
            : findInsertionIndex(valuePoses, posePriority, priority);
        valuePoses.splice(insertionIndex, 0, next);

        return insertionIndex === 0
          ? new Promise(complete => {
              const value = values.get(key);

              const transitionProps = {
                ...baseTransitionProps,
                key,
                value
              };

              // Resolve target from pose
              const target = resolveTarget(
                value,
                resolveProp(nextPose[key], transitionProps)
              );

              // Stop the current action
              if (activeActions.has(key)) stopAction(activeActions.get(key));

              // Get the transition
              const resolveTransitionProps = {
                to: target,
                ...transitionProps,
                ...getTransitionProps(value, target, transitionProps)
              };

              const useTransition = !isReducedMotion();

              let transition = useTransition
                ? resolveTransition<V, A>(
                    getTransition,
                    key,
                    value,
                    resolveTransitionProps,
                    convertTransitionDefinition,
                    getInstantTransition
                  )
                : getInstantTransition(value, resolveTransitionProps);

              // Add delay if defined on pose
              const poseDelay = resolveProp(nextPose.delay, transitionProps);
              if (useTransition && (delay || poseDelay)) {
                transition = addActionDelay(delay || poseDelay, transition);
              }

              // Start transition
              activeActions.set(key, startAction(value, transition, complete));
            })
          : Promise.resolve();
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
};

export default createPoseSetter;
