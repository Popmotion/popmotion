import { getProgressFromValue, getValueFromProgress, pointFromAngleAndDistance } from '../inc/calc';

export const createMapper = (input, output) => {
  const mapLength = input.length;
  const finalIndex = mapLength - 1;

  return (value) => {
    // If value outside minimum input range, quickly return
    if (value <= input[0]) {
      return output[0];
    }

    // If value outside maximum input range, quickly return
    if (value >= input[finalIndex]) {
      return output[finalIndex];
    }

    // If within overall input range, find specific range
    for (let i = 1; i < mapLength; i++) {
      if (value < input[i] || i === finalIndex) {
        const progressInRange = getProgressFromValue(value, input[i - 1], input[i]);
        return getValueFromProgress(progressInRange, output[i - 1], output[i]);
      }
    }
  };
};

export const circularMotion = (v, key, { values }) => {
  const originX = (values.originX) ? values.originX.current : 0;
  const originY = (values.originY) ? values.originY.current : 0;

  return pointFromAngleAndDistance({
    x: originX,
    y: originY 
  }, values.angle.current, values.distance.current)[key];
};

/*
  Combine transformers into one function that calls every
  transformer in the array and returns the result

  @param [array]
  @return [function]
*/
export const chain = (transformers) => {
  const numTransformers = transformers.length;
  let i = 0;

  /*
    @param [number]
    @param [string]
    @param [Action]
    @return [number]
  */
  return (v, key, a) => {
    for (i = 0; i < numTransformers; i++) {
      v = transformers[i](v, key, a);
    }

    return v;
  };
};