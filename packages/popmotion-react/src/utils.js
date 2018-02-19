import { action, spring, decay, transform } from '../../popmotion/lib';
const { clamp, conditional, linearSpring, pipe, transformMap } = transform;

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

export const just = (v) => action(({ update, complete }) => {
  update(v);
  complete();
});

export const getDragEndAnimation = (v, min, max) => {
  const from = v.get();
  const velocity = v.getVelocity();
  const isLessThanMin = v < min;
  const isMoreThanMax = v > max;
  const isInRange = !isLessThanMin && !isMoreThanMax;

  return isInRange
    ? decay({ from, velocity })
      .while(v => v >= min && v <= max)
      .pipe(clamp(min, max))
    : spring({
      from,
      velocity,
      to: isLessThanMin ? min : max
    });
};
