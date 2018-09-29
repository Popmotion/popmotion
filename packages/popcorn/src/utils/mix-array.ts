import { RGBA, HSLA } from 'style-value-types';
import mix from './mix';
import mixColor from './mix-color';
import { isNum } from '../inc';

type BlendableArray = Array<number | RGBA | HSLA | string>;

export default (from: BlendableArray, to: BlendableArray) => {
  const output = [...from];
  const numValues = output.length;

  const blendValue = from.map((fromThis, i) => {
    const toThis = to[i];
    return isNum(fromThis)
      ? (v: number) => mix(fromThis, toThis as number, v)
      : mixColor(fromThis, toThis as HSLA | RGBA | string);
  });

  return (v: number) => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }

    return output;
  };
};
