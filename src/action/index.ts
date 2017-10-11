import { pipe } from '../inc/transformers';
import { ObservableFactory, Observer, ObserverCandidate } from './types';

const noop = (): void => undefined;

const createObserver = (observerCandidate: ObserverCandidate): Observer => {
  const providedObserver = (typeof observerCandidate === 'function')
    ? { update: observerCandidate }
    : observerCandidate;

  return {
    complete: noop,
    error: noop,
    update: noop,
    ...providedObserver
  };
};

/**
 * action
 *
 * An action is an implementation of a reactive Observable with the
 * minimal API footprint.
 *
 * The intention is that, rather than need to comb through acres of documentation
 * to figure out which in-built function we wish to chain in order to adjust
 * emitted values, or having to pollute a monolithic namespace in order to add
 * functionality, we opt for a pure functional approach where instead of:
 *
 * Rx.Observable.create((observer) => {}))
 *  .throttleTime(1000)
 *  .scan(count => count + 1, 0)
 *  .subscribe(count => console.log(count))
 *
 * You would write something like this:
 *
 * action((observer) => {}).pipe(
 *  scan((count) => count + 1, 0)
 * ).start(throttle(count => console.log(count), 1000))
 *
 * Also, where an Rx Observable returns a minimal API, an Action Observable
 * can return a custom API (useful for controlling tweens etc)
 */

const action: ObservableFactory = (init, props = {}) => ({
  /**
   * start
   *
   * Analog to Rx.Observable.subscribe. Renamed for clarity (subscribe
   * actually returns a new instance of a stream, rather than hooking
   * into an existing stream of events), and to make more sense in an
   * animation context.
   */
  start(observerCandidate) {
    const observer = createObserver(observerCandidate);

    const { updatePipe } = props;
    if (updatePipe) {
      const { update } = observer;
      observer.update = pipe(...updatePipe, update);
    }

    return {
      stop: () => undefined,
      ...init(observer)
    };
  },
  /**
   * pipe
   *
   * Returns a new Observable, which, when started, will pipe all update
   * output through the provided functions.
   */
  pipe(...funcs) {
    const { updatePipe } = props;
    return action(init, {
      ...props,
      updatePipe: updatePipe ? [...updatePipe, ...funcs] : funcs
    });
  }
});

export default action;
