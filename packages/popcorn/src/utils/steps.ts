import progressFromValue from './progress';
import mix from './mix';
import stepProgress from './step-progress';

export default (st: number, min = 0, max = 1) => (v: number) => {
  const progress = progressFromValue(min, max, v);
  return mix(min, max, stepProgress(st, progress));
};
