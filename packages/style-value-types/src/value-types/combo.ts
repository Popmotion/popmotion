import { ValueType, Color } from '../types';
import { color } from './color';
import { px, percent, degrees, vh, vw } from './units';

const testOrder: ValueType[] = [px, percent, degrees, vh, vw, color];

const addIfAnimatable = (acc: Array<number | Color>, val: string) => {
  const valueType = testOrder.find(({ test }: ValueType) => test(val));
  if (valueType) acc.push(valueType.parse(val));
  return acc;
};

const splitCommas = (acc: string[], token: string) => {
  const splitToken = token.split(',');

  if (splitToken.length > 1) {
    acc.push(splitToken[0], ',');
  } else {
    acc.push(token);
  }

  return acc;
};

const parse = (v: string) =>
  v
    .split(' ')
    .reduce(splitCommas, [])
    .reduce(addIfAnimatable, []);

const getValueType = (v: string) => {
  if (v === ',') return false;
  return testOrder.find(valueType => valueType.test(v)) || false;
};

const combo: ValueType = {
  test: (v: any) => typeof v === 'string' && v.split(' ').length > 1,
  parse,
  createTransformer: (prop: string) => {
    const splitValues = prop.split(' ').reduce(splitCommas, []);
    const valueTypes = splitValues.map(getValueType);

    let token = 0;
    const template = valueTypes.map((valueType, i) => {
      const templateValue = valueType ? token : splitValues[i];
      if (valueType) token++;
      return templateValue;
    });

    const templateLength = template.length;

    return (output: any[]) => {
      let built = '';
      for (let i = 0; i < templateLength; i++) {
        const valueType = valueTypes[i];

        if (valueType) {
          built += `${valueType.transform(output[template[i] as number])} `;
        } else {
          if (template[i] === ',') {
            built = built.trim();
          }
          built += `${template[i]} `;
        }
      }

      return built.trim();
    };
  }
};

export default combo;
