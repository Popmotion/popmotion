import progressFromValue from './progress-from-value';
import valueFromProgress from './value-from-progress';
import stepProgress from './step-progress';

export default (st: number, min = 0, max = 1) => (v: number) => {
  const progress = progressFromValue(min, max, v);
  return valueFromProgress(min, max, stepProgress(st, progress));
};
