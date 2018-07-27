import { number, degrees, percent, px, ValueType } from 'style-value-types';

const valueTypeTests = [number, degrees, percent, px];
const testValueType = (v: any) => (type: ValueType) => type.test(v);

export const getValueType = (v: any) => valueTypeTests.find(testValueType(v));
