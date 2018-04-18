import {
  PoseFactoryConfig,
  PoserConfig,
  Poser,
  ActiveActions,
  ActivePoses,
  ChildPosers,
  PoseMap
} from './types';

// import createPoses from './factories/poses';
// import createValues from './factories/values';

const poseFactory = <V, A>({
  getDefaultProps,
  defaultTransitions
}: PoseFactoryConfig<V, A>) => (config: PoserConfig<V, A>): Poser => {
  // If set, add parent values to ancestor chain
  const { parentValues, ancestorValues } = config;
  if (parentValues) ancestorValues.unshift({ values: parentValues });

  const activeActions: ActiveActions<A> = new Map();
  const activePoses: ActivePoses = new Map();
  const children: ChildPosers = new Set();

  // Initialise props
  let props = config.props || {};
  if (getDefaultProps) props = { ...props, ...getDefaultProps(config) };

  const state = {
    activeActions,
    activePoses,
    children,
    props,
    poses: config.poses
  };

  //const values = createValues({ state });

  const api = {

  };

  return api;
};

export default poseFactory;
export { PoserConfig, PoseMap };
