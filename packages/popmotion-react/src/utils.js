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

export const getDragEndAnimation = (v, isActive, min, max, preserveMomentum) => {
  const from = v.get();
  const velocity = v.getVelocity();
  const hasMin = min !== undefined;
  const hasMax = max !== undefined;
  const hasRange = hasMin || hasMax;
  const isLessThanMin = v < min;
  const isMoreThanMax = v > max;
  const isInRange = !isLessThanMin && !isMoreThanMax;


  return isActive
    ? hasRange
      ? isInRange
        ? decay({ from, velocity })
          .while(v => (!hasMin || v >= min) && (!hasMax || v <= max))
          .pipe(
            hasMin ? v => Math.max(v, min) : noop,
            hasMax ? v => Math.min(v, max) : noop
          )
        : spring({
          from,
          velocity,
          to: isLessThanMin ? min : max
        })
      : decay({ from, velocity })
    : just(from);
};
