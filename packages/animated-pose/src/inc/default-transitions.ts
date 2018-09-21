const tween = {
  duration: 300
};

const linearTween = {
  ...tween,
  easing: (v: number) => v
};

const overDampedSpring = ({ toValue }: { toValue: number }) => ({
  type: 'spring',
  stiffness: 700,
  damping: toValue === 0 ? 100 : 35
});

const underDampedSpring = {
  type: 'spring',
  stiffness: 500,
  damping: 25,
  restDelta: 0.5,
  restSpeed: 10
};

const intelligentTransition = {
  x: underDampedSpring,
  y: underDampedSpring,
  z: underDampedSpring,
  rotate: underDampedSpring,
  rotateX: underDampedSpring,
  rotateY: underDampedSpring,
  rotateZ: underDampedSpring,
  scaleX: overDampedSpring,
  scaleY: overDampedSpring,
  scaleZ: overDampedSpring,
  scale: overDampedSpring,
  opacity: linearTween,
  default: tween
};

// IE11 doesn't support `new Map(iterable)`, Map.prototype.set returns the map itself
export default new Map().set('default', intelligentTransition)
