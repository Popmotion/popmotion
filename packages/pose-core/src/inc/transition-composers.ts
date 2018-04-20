import { TransitionFactory } from '../types';

type TransitionMap<A> = {
  [key: string]: TransitionFactory<A>
};

type TransitionFactoryMap = (key: string) => <A>(map: TransitionMap<A>) => TransitionFactory<A>;

const createTransitionMap: TransitionFactoryMap = (key) => (map) => (props) => {
  const switchKey = props[key];
  const transition = map[switchKey] || map.default;
  return transition ? transition(props) : false;
};

export const eachValue = createTransitionMap('key');
export const fromPose = createTransitionMap('prevPoseKey');
