import {
  applyOffset,
  clamp,
  conditional,
  interpolate,
  mix,
  mixArray,
  mixColor,
  pipe,
  progress,
  smooth,
  snap,
  springForce,
  springForceExpo,
  springForceLinear,
  wrap
} from '@popmotion/popcorn';
export {
  applyOffset,
  clamp,
  conditional,
  interpolate,
  mixArray as blendArray,
  mixColor as blendColor,
  pipe,
  smooth,
  snap,
  springForce as generateStaticSpring,
  springForceExpo as nonlinearSpring,
  springForceLinear as linearSpring,
  wrap
};
import { stepProgress } from './calc';

/**
 * Append Unit
 * A function that creates function that will append unit to a given string
 * appendUnit('px')(20) -> '20px'
 * @param  {string} unit
 * @return {function(number): string}
 */
export const appendUnit = (unit: string) => (v: number) => `${v}${unit}`;

// TODO: Revist this and add direction
export const steps = (st: number, min = 0, max = 1) => (v: number) => {
  const current = progress(min, max, v);
  return mix(min, max, stepProgress(st, current));
};

export const transformMap = (childTransformers: {
  [key: string]: Function;
}) => (v: any) => {
  const output: { [key: string]: any } = { ...v };

  for (const key in childTransformers) {
    if (childTransformers.hasOwnProperty(key)) {
      const childTransformer = childTransformers[key];
      output[key] = childTransformer(v[key]);
    }
  }

  return output;
};
