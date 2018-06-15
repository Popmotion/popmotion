import { Transition } from '../types';

type TransitionMap = {
  [key: string]: Transition;
};

type TransitionMapFactory = (key: string) => (map: TransitionMap) => Transition;

const createTransitionMap: TransitionMapFactory = key => map => props => {
  const switchKey = props[key];
  const transition = map[switchKey] || map.default;
  return transition ? transition(props) : false;
};

export const eachValue = createTransitionMap('key');
