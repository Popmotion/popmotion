import action, { Action } from '../action';
import { ColdSubscription } from '../action/types';
import delay from './delay';

type ActionStarter = () => ColdSubscription;
type IntervalCalc = (i: number) => number;
type Interval = number | IntervalCalc;

const stagger = (actionStarters: ActionStarter[], interval: Interval): Action => action(({ complete }) => {
  const intervalIsNumber = typeof interval === 'number';

  const subs: ColdSubscription[] = actionStarters.map((actionStarter, i) => {
    const timeToDelay: number = intervalIsNumber ? interval as number * i : (interval as IntervalCalc)(i);

    return delay(timeToDelay).start({
      complete: () => {
        subs[i] = actionStarter();
      }
    });
  });

  return {
    stop: () => subs.forEach((sub) => sub.stop && sub.stop())
  };
});

export default stagger;
