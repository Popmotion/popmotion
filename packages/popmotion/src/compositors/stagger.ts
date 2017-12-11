import { Action } from '../action';
import chain from './chain';
import delay from './delay';
import parallel from './parallel';

type IntervalCalc = (i: number) => number;
type Interval = number | IntervalCalc;

const stagger = (actions: Action[], interval: Interval): Action => {
  const intervalIsNumber = typeof interval === 'number';

  const actionsWithDelay = actions.map((a, i) => {
    const timeToDelay: number = intervalIsNumber ? interval as number * i : (interval as IntervalCalc)(i);

    return chain(delay(timeToDelay), a);
  });

  return parallel(...actionsWithDelay);
};

export default stagger;
