import { RGBA, HSLA } from 'style-value-types';
import blendColor from './blend-color';
import { isNum } from '../inc';
import valueFromProgress from './value-from-progress';

type BlendableArray = Array<number | RGBA | HSLA>;

export default (from: BlendableArray, to: BlendableArray) => {
  const output = [...from];
  const numValues = output.length;

  const blendValue = from.map((fromThis, i) => {
    const toThis = to[i];
    return isNum(fromThis)
      ? (v: number) => valueFromProgress(fromThis, toThis as number, v)
      : blendColor(fromThis, toThis as HSLA | RGBA);
  });

  return (v: number) => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }

    return output;
  };
};
