import {
  PoseFactoryConfig,
  PoserConfig,
  Pose,
  ExtendAPI,
  TransformPose,
  ReadValueFromSource,
  Poser,
  ActiveActions,
  ActivePoses,
  ChildPosers,
  PoseMap,
  PoserState,
  TransitionMap
} from './types';

import createPoseSetter from './factories/setter';
import createValueMap, { DEFAULT_INITIAL_POSE } from './factories/values';
import generateDefaultTransitions from './factories/transitions';
import { selectPoses, selectAllValues } from './inc/selectors';
import { sortByReversePriority } from './inc/utils';

const poseFactory = <V, A, C, P>({
  getDefaultProps,
  defaultTransitions,
  bindOnChange,
  startAction,
  stopAction,
  readValue,
  readValueFromSource,
  resolveTarget,
  setValue,
  setValueNative,
  createValue,
  convertValue,
  getInstantTransition,
  getTransitionProps,
  addActionDelay,
  selectValueToRead,
  convertTransitionDefinition,
  transformPose,
  posePriority,
  extendAPI
}: PoseFactoryConfig<V, A, C, P>) => (
  config: PoserConfig<V>
): Poser<V, A, C, P> => {
  // If set, add parent values to ancestor chain
  const { parentValues, ancestorValues = [] } = config;
  if (parentValues) ancestorValues.unshift({ values: parentValues });

  const activeActions: ActiveActions<C> = new Map();
  const activePoses: ActivePoses = new Map();
  const children: ChildPosers<V, A, C, P> = new Set();

  const poses = generateDefaultTransitions<A>(
    selectPoses(config),
    defaultTransitions
  );

  // Initialise props
  let { props = {} } = config;
  if (getDefaultProps) props = { ...getDefaultProps(config), ...props };

  // Create values map
  const {
    passive,
    values: userSetValues,
    initialPose = DEFAULT_INITIAL_POSE
  } = config;

  const values = createValueMap<V, A>({
    poses,
    passive,
    ancestorValues,
    readValue,
    setValueNative,
    createValue,
    convertValue,
    readValueFromSource,
    userSetValues,
    initialPose,
    activePoses,
    props
  });

  const state: PoserState<V, A, C, P> = {
    activeActions,
    activePoses,
    children,
    props,
    values
  };

  // Append onChange callbacks
  const { onChange } = config;
  if (onChange) Object.keys(onChange).forEach(bindOnChange(values, onChange));

  // Create pose setter
  const set = createPoseSetter({
    state,
    poses,
    getInstantTransition,
    getTransitionProps,
    convertTransitionDefinition,
    setValue,
    setValueNative,
    startAction,
    stopAction,
    resolveTarget,
    addActionDelay,
    transformPose,
    posePriority
  });

  const has = (poseName: string) => !!poses[poseName];

  const api: Poser<V, A, C, P> = {
    set,
    unset: (poseName, poseProps) => {
      const posesToSet: string[] = [];

      activePoses.forEach(valuePoses => {
        const poseIndex = valuePoses.indexOf(poseName);

        if (poseIndex === -1) return;
        const currentPose = valuePoses[0];

        // Remove pose from activePoses list
        valuePoses.splice(poseIndex, 1);
        const nextPose = valuePoses[0];

        if (nextPose === currentPose) return;
        if (posesToSet.indexOf(nextPose) === -1) {
          posesToSet.push(nextPose);
        }
      });

      const animationsToResolve = posesToSet
        .sort(sortByReversePriority(posePriority))
        .map(poseToSet => set(poseToSet, poseProps, false));

      children.forEach(child =>
        animationsToResolve.push(child.unset(poseName))
      );

      return Promise.all(animationsToResolve);
    },
    get: valueName =>
      valueName
        ? selectValueToRead(values.get(valueName))
        : selectAllValues(values, selectValueToRead),
    has,
    setProps: newProps => (state.props = { ...state.props, ...newProps }),

    // Child methods
    _addChild: (childConfig, factory) => {
      const child = factory({
        initialPose,
        ...childConfig,
        ancestorValues: [{ label: config.label, values }, ...ancestorValues]
      });

      children.add(child);

      return child;
    },
    removeChild: child => children.delete(child),
    clearChildren: () => {
      children.forEach(child => child.destroy());
      children.clear();
    },

    // Lifecycle methods
    destroy: () => {
      activeActions.forEach(stopAction);
      children.forEach(child => child.destroy());
    }
  };

  return extendAPI(api, state, config);
};

export default poseFactory;
export {
  Poser,
  PoserConfig,
  TransitionMap,
  ActiveActions,
  Pose,
  PoseMap,
  PoserState,
  ExtendAPI,
  TransformPose,
  ReadValueFromSource
};
