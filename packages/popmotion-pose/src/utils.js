const transitionMap = (key) => (map) => (props) => {
  const switchKey = props[key];
  const transition = map[switchKey] || map.default;
  return transition ? transition(props) : false;
};

export const transitionProps = transitionMap('key');
export const transitionFrom = transitionMap('prevPoseKey');
