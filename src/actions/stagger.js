import chain from './chain';
import parallel from './parallel';
import delay from './delay';
import { isFunc } from '../inc/utils';

/**
 * Creates a new parallel Action composed of chained
 * delay and actions. Interval can be either a number
 * to multiply by `i` or a function that will be provided `i`
 *
 * Straight cribbed from https://github.com/facebook/react-native/blob/24c72f513e48f0bdc40820b43262328fe2c301d4/Libraries/Animated/src/AnimatedImplementation.js#L2031
 * ^ This function sold a previously-conflicted me on the merit of moving from
 * jQuery-style multi-property animations to single-property.
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
