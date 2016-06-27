import appendUnit from '../../transformers/append-unit';

export default (type) => ({
  test: (v) => (v && v.indexOf(type) > -1),
  parse: parseFloat,
  output: appendUnit(type)
});