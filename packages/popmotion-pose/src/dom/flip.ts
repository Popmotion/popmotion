import { value } from 'popmotion';
import {
  BoundingBox,
  Dimensions,
  Value,
  Pose,
  PoserState,
  DomPopmotionPoser
} from '../types';
import { Poser } from 'pose-core';
import { Action } from 'popmotion/action';
import { ColdSubscription } from 'popmotion/action/types';

const ORIGIN_START = 0;
const ORIGIN_CENTER = '50%';
const ORIGIN_END = '100%';

type FlipPose = {
  scaleX?: number;
  scaleY?: number;
  x?: number;
  y?: number;
};

type StyleMap = { [key: string]: any };

const findCenter = ({ top, right, bottom, left }: BoundingBox) => ({
  x: (left + right) / 2,
  y: (top + bottom) / 2
});

const positionalProps = ['width', 'height', 'top', 'left', 'bottom', 'right'];
const positionalPropsDict = new Set(positionalProps);
const checkPositionalProp = (key: string) => positionalPropsDict.has(key);
const hasPositionalProps = (pose: Pose) =>
  Object.keys(pose).some(checkPositionalProp);

export const isFlipPose = (pose: Pose, key: string, state: PoserState) =>
  state.props.element instanceof HTMLElement &&
  (hasPositionalProps(pose) || key === 'flip');

export const resolveProp = (target: any, props: { [key: string]: any }) =>
  typeof target === 'function' ? target(props) : target;

const setValue = ({ values, props }: PoserState, key: string, to: any) => {
  if (values.has(key)) {
    // Here, if we already have the value, we update it twice.
    // Because of stylefire's render batching, this isn't going
    // to actually render twice, but because we're making
    // the value jump a great distance, we want to reset the velocity
    // to 0, rather than something arbitrarily high
    // Maybe a more explicit API would be nicer
    const { raw } = values.get(key);
    raw.update(to);
    raw.update(to);
  } else {
    values.set(key, {
      raw: value(to, (v: any) => props.elementStyler.set(key, v))
    });
  }
};

const explicitlyFlipPose = (state: PoserState, nextPose: Pose) => {
  const { dimensions, elementStyler } = state.props;

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

  elementStyler
    .set(
      positionalProps.reduce(
        (acc, key) => {
          if (nextPose[key] !== undefined) {
            acc[key] = resolveProp(nextPose[key], state.props);
          }
          return acc;
        },
        {} as StyleMap
      )
    )
    .render();

  return implicitlyFlipPose(state, remainingPose);
};

const implicitlyFlipPose = (state: PoserState, nextPose: Pose) => {
  const { dimensions, element, elementStyler } = state.props;
  if (!dimensions.has()) return {};

  const prev = dimensions.get() as BoundingBox;

  const transform = (element as HTMLElement).style.transform;
  (element as HTMLElement).style.transform = '';
  const next = element.getBoundingClientRect();
  (element as HTMLElement).style.transform = transform;

  // Find transform origin based on x/y delta
  const originX =
    prev.left === next.left
      ? ORIGIN_START
      : prev.right === next.right ? ORIGIN_END : ORIGIN_CENTER;

  const originY =
    prev.top === next.top
      ? ORIGIN_START
      : prev.bottom === next.bottom ? ORIGIN_END : ORIGIN_CENTER;

  // Set transform origins
  elementStyler.set({ originX, originY });

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

  // Render the set values
  elementStyler.render();

  return {
    ...nextPose,
    ...flipPoseProps
  };
};

export const flipPose = (props: PoserState, nextPose: Pose) =>
  hasPositionalProps(nextPose)
    ? explicitlyFlipPose(props, nextPose)
    : implicitlyFlipPose(props, nextPose);

// Prevents the bug where TS errors between "export cannot be named"
// and import is "declared but unused".
export {
  Action,
  Dimensions,
  ColdSubscription,
  DomPopmotionPoser,
  Poser,
  Value
};
