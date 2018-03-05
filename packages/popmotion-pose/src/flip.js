import value from 'popmotion/reactions/value';

const positionalProps = new Set(['width', 'height', 'top', 'left', 'bottom', 'right']);
const checkPositionalProp = (key) => positionalProps.has(key);
const hasPositionalProps = (pose) => Object.keys(pose).some(checkPositionalProp);
export const isFlipPose = (pose, key) => hasPositionalProps(pose) || key === 'flip';

const flipProp = (calcOffset, eq) => ({ calcOffset, eq });
const flipScale = (prop) => flipProp((prev, next) => prev[prop] / next[prop], 1);
const flipTranslate = (prop) => flipProp((prev, next) => prev[prop] - next[prop], 0);
const flipMoveMethods = {
  x: flipTranslate('left'),
  y: flipTranslate('top')
};
const flipScaleMethods = {
  scaleX: flipScale('width'),
  scaleY: flipScale('height')
};

const measureFlipDelta = ({ dimensions, element, elementStyler, values }, methods) => {
  const next = element.getBoundingClientRect();
  
  const flipPose = Object.entries(methods).reduce((acc, [key, { calcOffset, eq }]) => {
    const offset = calcOffset(dimensions.get(), next);
    if (offset !== eq) {

      values.has(key)
        ? values.get(key).value.update(offset)
        : values.set(key, { value: value(offset, v => elementStyler.set(key, v)) });

      acc[key] = eq;
    }
    return acc;
  }, {});

  return flipPose;
};

const setValue = ({ values, elementStyler }, key, to) => {
  values.has(key)
    ? values.get(key).value.update(to)
    : values.set(key, { value: value(to, v => elementStyler.set(key, v)) });
};

const explicitlyFlipPose = (state, nextPose) => {
  const { dimensions, elementStyler } = state;
  dimensions.measure();
  const { width, height, top, left, bottom, right, ...remainingPose } = nextPose;

  elementStyler
    .set({ width, height, top, left, bottom, right })
    .render();

  return implicitlyFlipPose(state, remainingPose);
};

const implicitlyFlipPose = (state, nextPose) => {
  const { dimensions, element, elementStyler } = state;
  if (!dimensions.has()) return;

  const flipPose = {};
  const prev = dimensions.get();
  const next = element.getBoundingClientRect();

  if (prev.width !== next.width) {
    setValue(state, 'scaleX', prev.width / next.width);
    flipPose.scaleX = 1;
  }

  if (prev.height !== next.height) {
    setValue(state, 'scaleY', prev.height / next.height);
    flipPose.scaleY = 1;
  }

  const originX = (prev.top === next.top)
    ? 0
    : (prev.bottom === next.bottom)
      ? '100%'
      : '50%';

  const originY = (prev.left === next.left)
    ? 0
    : (prev.right === next.right)
      ? '100%'
      : '50%';

  elementStyler
    .set({ originX, originY })
    .render();

  return {
    ...nextPose,
    ...flipPose
  };
};

export const flipPose = (state, nextPose) => hasPositionalProps(nextPose)
  ? explicitlyFlipPose(state, nextPose)
  : implicitlyFlipPose(state, nextPose);