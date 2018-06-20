import { ValueType, Color } from '../types';
import { color } from './color';
import { px, percent, degrees, vh, vw } from './units';

const testOrder: ValueType[] = [px, percent, degrees, vh, vw, color];

const addIfAnimatable = (acc: Array<number | Color>, val: string) => {
  const valueType = testOrder.find(({ test }: ValueType) => test(val));
  if (valueType) acc.push(valueType.parse(val));
  return acc;
};

const parse = (v: string) => v.split(' ').reduce(addIfAnimatable, []);

const combo: ValueType = {
  test: (v: any) => typeof v === 'string' && v.split(' ').length > 1,
  parse,
  createTransformer: (prop: string) => {
    const values = prop.split(' ');
    const valueTypes = values.map(
      (v: string) => testOrder.find(valueType => valueType.test(v)) || false
    );
    let token = 0;
    const template = valueTypes.map((valueType, i) => {
      const templateValue = valueType ? token : values[i];
      if (valueType) token++;
      return templateValue;
    });
    const templateLength = template.length;

    return (output: any[]) => {
      let built = '';
      for (let i = 0; i < templateLength; i++) {
        const valueType = valueTypes[i];

        if (valueType) {
          built += `${valueType.transform(output[template[i]])} `;
        } else {
          built += `${template[i]} `;
        }
      }
      return built.trim();
    };
  }
};

export default combo;
