import { color, complex, RGBA, HSLA } from 'style-value-types';
import mix from './mix';
import mixColor from './mix-color';
import { isNum } from '../inc';
import pipe from './pipe';
import { invariant } from 'hey-listen';

type BlendableArray = Array<number | RGBA | HSLA | string>;

export const mixArray = (from: BlendableArray, to: BlendableArray) => {
  const output = [...from];
  const numValues = output.length;

  const blendValue = from.map((fromThis, i) => {
    const toThis = to[i];

    if (isNum(fromThis)) {
      return (v: number) => mix(fromThis, toThis as number, v);
    } else if (color.test(fromThis)) {
      return mixColor(fromThis, toThis as HSLA | RGBA | string);
    } else {
      return mixComplex(fromThis as string, toThis as string);
    }
  });

  return (v: number) => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }

    return output;
  };
};

export const mixComplex = (from: string, to: string) => {
  const valueTemplate = complex.createTransformer(from);

  invariant(
    valueTemplate(from) === complex.createTransformer(to)(from),
    `Values '${from}' and '${to}' are of different format, or a value might have changed value type.`
  );

  return pipe(
    mixArray(complex.parse(from), complex.parse(to)),
    valueTemplate
  );
};
