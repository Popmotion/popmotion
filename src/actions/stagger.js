import chain from './chain';
import parallel from './parallel';
import delay from './delay';
import { isFunc } from '../inc/utils';

/**
 * Creates a new parallel Action composed of chained
 * delay and actions. Interval can be either a number
 * to multiply by `i` or a function that will be provided `i`
 * @param  {array} actions
 * @param  {function | number} interval
 * @return {Action}
 */
export default (actions, interval, onComplete) => {
  const intervalIsFunction = isFunc(interval);

  return parallel(actions.map((action, i) => {
    const timeToDelay = (intervalIsFunction) ? interval(i) : i * interval;
    return chain([
      delay(timeToDelay),
      action
    ]);
  }), { onComplete });
};
