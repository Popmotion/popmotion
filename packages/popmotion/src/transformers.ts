import {
  applyOffset,
  blendColor,
  blendArray,
  clamp,
  conditional,
  interpolate,
  smooth,
  snap,
  steps,
  wrap,
  generateSpringForce as generateStaticSpring,
  springForceLinear as linearStaticSpring,
  springForceExpo as nonlinearStaticSpring
} from '@popmotion/utils';

/**
 * Append Unit
 * A function that creates function that will append unit to a given string
 * appendUnit('px')(20) -> '20px'
 * @param  {string} unit
 * @return {function(number): string}
 */
export const appendUnit = (unit: string) => (v: number) => `${v}${unit}`;

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

export {
  applyOffset,
  blendColor,
  blendArray,
  clamp,
  conditional,
  interpolate,
  smooth,
  snap,
  steps,
  wrap,
  generateStaticSpring,
  linearStaticSpring,
  nonlinearStaticSpring
};
