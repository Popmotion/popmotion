import { pipe } from '../inc/transformers';
import {
  BoundObservable,
  Observable,
  ObservableFactory,
  ObservableInit,
  Observer,
  Subscription,
  Update
} from './types';

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
 *  throttleTime(1000),
 *  scan((count) => count + 1, 0)
 * ).start(count => console.log(count))
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
    const { updatePipe } = props;
    const observer: Observer = (typeof observerCandidate === 'function')
      ? { update: observerCandidate }
      : observerCandidate;

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
   * bind
   *
   * Returns a bound observer with just a `start` method.
   */
  bind(observerCandidate) {
    return {
      start: () => this.start(observerCandidate)
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
