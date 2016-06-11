import { POSITION, SCALE, ROTATION } from './type-keys';

const types = [POSITION, SCALE, ROTATION];
const dimensions = ['X', 'Y', 'Z'];
const dictionary = {};

types.forEach((type) => dimensions.forEach((dimension, i) => dictionary[`${type}${dimension}`] = {
  prop: type,
  position: i,
  unit: dimension.toLowerCase()
}));

export default dictionary;