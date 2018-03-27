import value from 'popmotion/reactions/value';
import {
  Pose,
  ValueMap,
  PoseSetterFactoryProps,
  BoundingBox,
  Dimensions
} from '../types';
import { Action } from 'popmotion/action';
import { Styler } from 'stylefire';

// Prevents the bug where TS errors between "export cannot be named"
// and import is "declared but unused".
export { Dimensions };
export { Action };

const ORIGIN_START = 0;
const ORIGIN_CENTER = '50%';
const ORIGIN_END = '100%';

type SetValueProps = {
  values: ValueMap;
  elementStyler: Styler;
};

type FlipPose = {
  scaleX?: number;
  scaleY?: number;
  x?: number;
  y?: number;
};

const findCenter = ({ top, right, bottom, left }: BoundingBox) => ({
  x: (left + right) / 2,
  y: (top + bottom) / 2
});

const positionalProps = new Set([
  'width',
  'height',
  'top',
  'left',
  'bottom',
  'right'
]);
const checkPositionalProp = (key: string) => positionalProps.has(key);
const hasPositionalProps = (pose: Pose) =>
  Object.keys(pose).some(checkPositionalProp);
export const isFlipPose = (pose: Pose, key: string) =>
  hasPositionalProps(pose) || key === 'flip';

const setValue = (
  { values, elementStyler }: SetValueProps,
  key: string,
  to: any
) => {
  if (values.has(key)) {
    // Here, if we already have the value, we update it twice.
    // Because of stylefire's render batching, this isn't going
    // to actually render twice, but because we're making
    // the value jump a great distance, we want to reset the velocity
    // to 0, rather than something arbitrarily high
    // Maybe a more explicit API would be nicer
    const val = values.get(key);
    val.update(to);
    val.update(to);
  } else {
    values.set(key, value(to, (v: any) => elementStyler.set(key, v)));
  }
};

const explicitlyFlipPose = (state: PoseSetterFactoryProps, nextPose: Pose) => {
  const { dimensions, elementStyler } = state;
  dimensions.measure();
  const {
    width,
    height,
    top,
    left,
    bottom,
    right,
    ...remainingPose
  } = nextPose;

  (elementStyler.set({
    width,
    height,
    top,
    left,
    bottom,
    right
  }) as Styler).render();

  return implicitlyFlipPose(state, remainingPose);
};

const implicitlyFlipPose = (state: PoseSetterFactoryProps, nextPose: Pose) => {
  const { dimensions, element, elementStyler } = state;
  if (!dimensions.has()) return {};

  const prev = dimensions.get() as BoundingBox;

  const transform = (element as HTMLElement).style.transform;
  (element as HTMLElement).style.transform = '';
  const next = element.getBoundingClientRect();
  (element as HTMLElement).style.transform = transform;

  // Find transform origin based on x/y delta
  const originX =
    prev.top === next.top ? ORIGIN_START : prev.bottom === next.bottom ? ORIGIN_END : ORIGIN_CENTER;

  const originY =
    prev.left === next.left ? ORIGIN_START : prev.right === next.right ? ORIGIN_END : ORIGIN_CENTER;

  // Set transform origin
  elementStyler.set({ transformOrigin: `${originX} ${originY}` });

  // Create target values
  const flipPoseProps: FlipPose = {};

  // Set initial offsets to replicate previous position with transforms
  if (prev.width !== next.width) {
    setValue(state, 'scaleX', prev.width / next.width);
    flipPoseProps.scaleX = 1;
  }

  if (prev.height !== next.height) {
    setValue(state, 'scaleY', prev.height / next.height);
    flipPoseProps.scaleY = 1;
  }

  const prevCenter = findCenter(prev);
  const nextCenter = findCenter(next);

  if (originX === ORIGIN_CENTER) {
    setValue(state, 'x', prevCenter.x - nextCenter.x);
    flipPoseProps.x = 0;
  }

  if (originY === ORIGIN_CENTER) {
    setValue(state, 'y', prevCenter.y - nextCenter.y);
    flipPoseProps.y = 0;
  }

  return {
    ...nextPose,
    ...flipPoseProps
  };
};

export const flipPose = (state: PoseSetterFactoryProps, nextPose: Pose) =>
  hasPositionalProps(nextPose)
    ? explicitlyFlipPose(state, nextPose)
    : implicitlyFlipPose(state, nextPose);
