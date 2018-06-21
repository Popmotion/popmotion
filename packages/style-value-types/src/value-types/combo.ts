import { ValueType, Color } from '../types';
import { color, containsColorRegex } from './color';
import { px, percent, degrees, vh, vw } from './units';

const testOrder: ValueType[] = [px, percent, degrees, vh, vw, color];

const addIfAnimatable = (acc: Array<number | Color>, val: string) => {
  const valueType = testOrder.find(({ test }: ValueType) => test(val));
  if (valueType) acc.push(valueType.parse(val));
  return acc;
};

const splitCommas = (acc: string[], token: string) => {
  token.slice(-1) === ',' ? acc.push(token.slice(0, -1), ',') : acc.push(token);

  return acc;
};

const stripSpaces = (v: string) => v.replace(/ /g, '');

const splitComboString = (comboStr: string) =>
  comboStr
    .replace(containsColorRegex, stripSpaces)
    .split(' ')
    .reduce(splitCommas, []);

const getValueType = (v: string) => {
  if (v === ',') return false;
  return testOrder.find(valueType => valueType.test(v)) || false;
};

const combo: ValueType = {
  test: (v: any) => typeof v === 'string' && v.split(' ').length > 1,
  parse: v => splitComboString(v).reduce(addIfAnimatable, []),
  createTransformer: (prop: string) => {
    const splitValues = splitComboString(prop);
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
