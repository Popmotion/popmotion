import value from 'popmotion/reactions/value';

const positionalProps = new Set(['width', 'height', 'top', 'left', 'bottom', 'right']);
const checkPositionalProp = (key) => positionalProps.has(key);
const hasPositionalProps = (pose) => Object.keys(pose).some(checkPositionalProp);
export const isFlipPose = (pose) => hasPositionalProps(pose) || pose.measureOnStart;

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
    const offset = calcOffset(dimensions, next);
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

const explicitlyFlipPose = (state, nextPose) => {
  const { element, elementStyler } = state;
  state.dimensions = element.getBoundingClientRect();
  const { width, height, top, left, bottom, right, ...remainingPose } = nextPose;

  elementStyler
    .set({ width, height, top, left, bottom, right })
    .render();

  return implicitlyFlipPose(state, remainingPose);
};

const implicitlyFlipPose = (state, nextPose) => {
  const { dimensions, elementStyler } = state;
  if (!dimensions) return;

  const scalePose = measureFlipDelta(state, flipScaleMethods);
  elementStyler.render();
  const movePose = measureFlipDelta(state, flipMoveMethods);

  return {
    ...nextPose,
    ...scalePose,
    ...movePose
  };
};

export const flipPose = (state, nextPose) => hasPositionalProps(nextPose)
  ? explicitlyFlipPose(state, nextPose)
  : implicitlyFlipPose(state, nextPose);