import {
  PoseFactoryConfig,
  PoserConfig,
  Poser,
  ActiveActions,
  ActivePoses,
  ChildPosers,
  PoseMap,
  PoserState
} from './types';

import createPoseSetter from './factories/setter';
import createValueMap from './factories/values';
import generateDefaultTransitions from './factories/transitions';

const poseFactory = <V, A, P>({
  getDefaultProps,
  defaultTransitions,
  bindOnChange,
  startAction,
  stopAction,
  readValue,
  createValue,
  getNoTransition,
  addTransitionDelay,
  transformAPI
}: PoseFactoryConfig<V, A, P>) => (config: PoserConfig<V, A>): P => {
  // If set, add parent values to ancestor chain
  const { parentValues, ancestorValues } = config;
  if (parentValues) ancestorValues.unshift({ values: parentValues });

  const activeActions: ActiveActions<A> = new Map();
  const activePoses: ActivePoses = new Map();
  const children: ChildPosers<V, A> = new Set();
  const poses = generateDefaultTransitions<A>(config.poses, defaultTransitions);

  // Initialise props
  let props = config.props || {};
  if (getDefaultProps) props = { ...props, ...getDefaultProps(config) };

  // Create values map
  const { passive, values: userSetValues, initialPose } = config;
  const values = createValueMap<V, A>({
    poses,
    passive,
    ancestorValues,
    readValue,
    createValue,
    userSetValues,
    initialPose,
    props
  });

  const state: PoserState<V, A> = {
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
    getNoTransition,
    startAction,
    stopAction,
    addTransitionDelay
  });

  const api: Poser<V, A> = {
    set,
    get: (valueName) => values.get(valueName),
    has: (poseName) => !!poses[poseName],

    // Child methods
    addChild: (childConfig, factory) => {
      const child = factory({
        ...childConfig,
        ancestorValues: [{ label: config.label, values }, ...ancestorValues]
      });

      children.add(child);

      return child;
    },
    removeChild: (child) => children.delete(child),
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

  return transformAPI(api, state);
};

export default poseFactory;
export { PoserConfig, PoseMap };
