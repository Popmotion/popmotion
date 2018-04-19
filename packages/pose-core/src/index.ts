import {
  PoseFactoryConfig,
  PoserConfig,
  Poser,
  ActiveActions,
  ActivePoses,
  ChildPosers,
  PoseMap
} from './types';

import createValues from './factories/values';
import generateDefaultTransitions from './factories/transitions';

const poseFactory = <V, A>({
  getDefaultProps,
  defaultTransitions,
  bindOnChange
}: PoseFactoryConfig<V, A>) => (config: PoserConfig<V, A>): Poser => {
  // If set, add parent values to ancestor chain
  const { parentValues, ancestorValues } = config;
  if (parentValues) ancestorValues.unshift({ values: parentValues });

  const activeActions: ActiveActions<A> = new Map();
  const activePoses: ActivePoses = new Map();
  const children: ChildPosers = new Set();
  const poses = generateDefaultTransitions<A>(config.poses, defaultTransitions);

  // Initialise props
  let props = config.props || {};
  if (getDefaultProps) props = { ...props, ...getDefaultProps(config) };

  const state = {
    activeActions,
    activePoses,
    children,
    props,
    poses
  };

  const values = createValues<V, A>({
    poses
  });

  // Append onChange callbacks
  const { onChange } = config;
  if (onChange) Object.keys(onChange).forEach(bindOnChange(values, onChange));

  const api = {

  };

  return api;
};

export default poseFactory;
export { PoserConfig, PoseMap };
