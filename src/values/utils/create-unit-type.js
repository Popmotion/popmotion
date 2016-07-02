import appendUnit from '../../transformers/append-unit';
import contains from './contains';

export default (type) => ({
  test: contains(type),
  parse: parseFloat,
  output: appendUnit(type)
});