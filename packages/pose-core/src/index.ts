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
import { eachValue, fromPose } from './inc/transition-composers';
import { selectPoses, selectAllValues } from './inc/selectors';
import { warning } from 'hey-listen';

const poseFactory = <V, A, C, P>({
  getDefaultProps,
  defaultTransitions,
  bindOnChange,
  startAction,
  stopAction,
  readValue,
  readValueFromSource,
  resolveTarget,
  createValue,
  convertValue,
  getInstantTransition,
  getTransitionProps,
  addActionDelay,
  selectValueToRead,
  transformPose,
  extendAPI
}: PoseFactoryConfig<V, A, C, P>) => (
  config: PoserConfig<V>
): Poser<V, A, C, P> => {
  warning(
    !config.hasOwnProperty('transformProps'),
    'config.transformProps is deprecated. Use config.props instead.'
  );

  // If set, add parent values to ancestor chain
  const { parentValues } = config;
  const ancestorValues = config.ancestorValues || [];
  if (parentValues) ancestorValues.unshift({ values: parentValues });

  const activeActions: ActiveActions<C> = new Map();
  const activePoses: ActivePoses = new Map();
  const children: ChildPosers<V, A, C, P> = new Set();

  const poses = generateDefaultTransitions<A>(
    selectPoses(config),
    defaultTransitions
  );

  // Initialise props
  let props = config.props || config.transformProps || {};
  if (getDefaultProps) props = { ...props, ...getDefaultProps(config) };

  // Create values map
  const { passive, values: userSetValues, initialPose } = config;
  const values = createValueMap<V, A>({
    poses,
    passive,
    ancestorValues,
    readValue,
    createValue,
    convertValue,
    readValueFromSource,
    userSetValues,
    initialPose,
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
    startAction,
    stopAction,
    resolveTarget,
    addActionDelay,
    transformPose
  });

  const api: Poser<V, A, C, P> = {
    set,
    get: valueName =>
      valueName
        ? selectValueToRead(values.get(valueName))
        : selectAllValues(values, selectValueToRead),
    has: poseName => !!poses[poseName],
    setProps: newProps => {
      props = { ...props, ...newProps };
    },
    setTransitionProps: newProps => {
      warning(false, 'setTransformProps is deprecated. Use setProps instead.');
      props = { ...props, ...newProps };
    },

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
export { Poser, PoserConfig, PoseMap, eachValue, fromPose };
