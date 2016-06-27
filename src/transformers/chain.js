/*
  Combine transformers into one function that calls every
  transformer in the array and returns the result

  @param [array]
  @return [function]
*/
export default (...transformers) => {
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