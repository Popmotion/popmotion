/**
 * Append Unit
 * Creates a function that will append the unit to a given value
 * appendUnit('px')(20) -> '20px'
 * @param  {string} unit)
 * @return {number}
 */
export const appendUnit = (unit) => (v) => `${v}${unit}`;

/**
 * Compose
 * Compose other transformers to run linearily
 * compose(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */
export const compose = (...transformers) => {
  const numTransformers = transformers.length;
  let i = 0;

  return (v, value) => {
    for (i = 0; i < numTransformers; i++) {
      v = transformers[i](v, value);
    }

    return v;
  };
};

export const createLerp = (input, output) => {

} 

/**
 * Restrict value between
 * Creates a function that will restrict a given value between `min` and `max`
 * @param  {number} min
 * @param  {number} max
 * @return {number}
 */
export const restrictUnder = (max) => (v) => Math.min(v, max);
export const restrictOver = (min) => (v) => Math.max(v, min);
export const restrictBetween = (min, max) => compose(restrictOver(min), restrictUnder(max));

