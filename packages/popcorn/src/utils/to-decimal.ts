export default (num: number, precision: number = 2) => {
  precision = 10 ** precision;
  return Math.round(num * precision) / precision;
};
