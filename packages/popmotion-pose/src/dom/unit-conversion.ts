import { Pose, PoserState, BoundingBox } from '../types';
import { setValue } from './flip';
import { resolveProp } from './utils';
import { getValueType } from '../inc/value-types';

type GetActualMeasurementInPixels = (
  element: HTMLElement,
  bbox: BoundingBox,
  computedStyle: {
    top: string;
    left: string;
    bottom: string;
    right: string;
    transform: string;
  }
) => number;

const getPosFromMatrix = (matrix: string, pos: number) =>
  parseFloat(matrix.split(', ')[pos]);

const getTranslateFromMatrix = (
  pos2: number,
  pos3: number
): GetActualMeasurementInPixels => (element, bbox, { transform }) => {
  if (transform === 'none') return 0;
  const matrix3d = transform.match(/^matrix3d\((.+)\)$/);
  if (matrix3d) return getPosFromMatrix(matrix3d[1], pos3);
  return getPosFromMatrix(transform.match(/^matrix\((.+)\)$/)[1], pos2);
};

const positionalValues: { [key: string]: GetActualMeasurementInPixels } = {
  // Dimensions
  width: (element, { width }) => width,
  height: (element, { height }) => height,

  top: (element, bbox, { top }) => parseFloat(top),
  left: (element, bbox, { left }) => parseFloat(left),
  bottom: (element, { height }, { top }) => parseFloat(top) + height,
  right: (element, { width }, { left }) => parseFloat(left) + width,

  // Transform
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};

const isPositionalKey = (v: string) => positionalValues[v] !== undefined;
export const isPositional = (pose: Pose) =>
  Object.keys(pose).some(isPositionalKey);

export const convertPositionalUnits = (state: PoserState, nextPose: Pose) => {
  const { values, props } = state;
  const { element, elementStyler } = props;
  const positionalPoseKeys = Object.keys(nextPose).filter(isPositionalKey);
  const changedPositionalKeys: string[] = [];
  const elementComputedStyle = getComputedStyle(element);

  let applyAtEndHasBeenCopied = false;

  positionalPoseKeys.forEach(key => {
    const value = values.get(key);
    const fromValueType = getValueType(value.raw.get());
    const to = resolveProp(nextPose[key], props);
    const toValueType = getValueType(to);

    if (fromValueType !== toValueType) {
      changedPositionalKeys.push(key);

      if (!applyAtEndHasBeenCopied) {
        applyAtEndHasBeenCopied = true;
        nextPose.applyAtEnd = nextPose.applyAtEnd
          ? { ...nextPose.applyAtEnd }
          : {};
      }
      nextPose.applyAtEnd[key] = nextPose.applyAtEnd[key] || nextPose[key];
      setValue(state, key, to);
    }
  });

  if (!changedPositionalKeys.length) return nextPose;

  const originBbox = element.getBoundingClientRect();
  const { top, left, bottom, right, transform } = elementComputedStyle;
  const originComputedStyle = { top, left, bottom, right, transform };

  elementStyler.render();

  const targetBbox = element.getBoundingClientRect();

  changedPositionalKeys.forEach(key => {
    // Restore styles to their **calculated computed style**, not their actual
    // originally set style. This allows us to animate between equivalent pixel units.
    setValue(
      state,
      key,
      positionalValues[key](element, originBbox, originComputedStyle)
    );
    nextPose[key] = positionalValues[key](
      element,
      targetBbox,
      elementComputedStyle
    );
  });

  elementStyler.render();

  return nextPose;
};
