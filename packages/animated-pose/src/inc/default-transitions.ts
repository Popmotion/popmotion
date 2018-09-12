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
  stiffness: 500,
  damping: 25,
  restDisplacementThreshold: 0.5,
  restSpeedThreshold: 10
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

export default new Map([['default', intelligentTransition]]);
