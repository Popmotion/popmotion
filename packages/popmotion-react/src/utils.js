import { transform } from '../../popmotion/lib';
const { conditional, linearSpring, pipe, transformMap } = transform;

export const noop = v => v;

const axisClamp = (axis, min, max, elasticity = 0) => pipe(
  min !== undefined
    ? conditional(
      v => v < min,
      elasticity ? linearSpring(elasticity, min) : v => Math.max(min, v)
    )
    : noop,
  max !== undefined
    ? conditional(
      v => v > max,
      elasticity ? linearSpring(elasticity, max) : v => Math.min(max, v)
    )
    : noop
);

export const rangeTransformer = ({ left, right, top, bottom }, elasticity = 0) => transformMap({
  x: axisClamp('x', left, right, elasticity),
  y: axisClamp('y', top, bottom, elasticity)
});