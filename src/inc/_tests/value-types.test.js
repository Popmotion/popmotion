import { complex } from '../value-types';

const PATH = 'M150 0 L75 200 L225 200 Z';
const PATH_VALUES = {
  '0': 150,
  '1': 0,
  '2': 75,
  '3': 200,
  '4': 225,
  '5': 200
};
const PATH_TEMPLATE = 'M${0} ${1} L${2} ${3} L${4} ${5} Z';

describe('complex value type', () => {
  it('test returns correctly', () => {
    expect(complex.test(PATH)).toBe(true);
    expect(complex.test(3)).toBe(false);
  });

  it('parse converts string to array', () => {
    expect(complex.parse(PATH)).toEqual(PATH_VALUES);
  });

  it('createTemplate returns a tokenised string template', () => {
    expect(complex.createTemplate(PATH)).toBe(PATH_TEMPLATE);
  });

  it('createTransformer returns a transformer function that correctly inserts values', () => {
    const transform = complex.createTransformer(PATH_TEMPLATE);
    expect(transform(PATH_VALUES)).toBe(PATH);
  });
});