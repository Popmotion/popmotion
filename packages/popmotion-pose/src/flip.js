import value from 'popmotion/reactions/value';

const positionalProps = new Set(['width', 'height', 'top', 'left', 'bottom', 'right']);
const checkPositionalProp = (key) => positionalProps.has(key);
const hasPositionalProps = (pose) => Object.keys(pose).some(checkPositionalProp);
export const isFlipPose = (pose, key) => hasPositionalProps(pose) || key === 'flip';

const setValue = ({ values, elementStyler }, key, to) => {
  if (values.has(key)) {
    // Here, if we already have the value, we update it twice.
    // Because of stylefire's render batching, this isn't going
    // to actually render twice, but because we're making
    // the value jump a great distance, we want to reset the velocity
    // to 0, rather than something arbitrarily high
    const val = values.get(key).value;
    val.update(to);
    val.update(to);
  } else {
    values.set(key, { value: value(to, v => elementStyler.set(key, v)) });
  }
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


        // Here, if we already have the value, we update it twice.
        // Because of stylefire's render batching, this isn't going
        // to actually render twice, but because we're making
        // the value jump a great distance, we want to reset the velocity
        // to 0, rather than something arbitrarily high

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