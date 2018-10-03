import progress from './progress';
import mix from './mix';
import stepProgress, { Direction } from './step-progress';

export default (
  steps: number,
  min = 0,
  max = 1,
  direction: Direction = 'end'
) => (v: number) =>
  mix(min, max, stepProgress(steps, progress(min, max, v), direction));
