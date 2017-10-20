import { pipe } from '../inc/transformers';
import createObserver from './observer';
import { Middleware, Observable, ObservableFactory, Subscription } from './types';

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

const action: ObservableFactory = (init, props = {}): Observable => ({
  /**
   * start
   *
   * Analog to Rx.Observable.subscribe. Renamed for clarity (subscribe
   * actually returns a new instance of a stream, rather than hooking
   * into an existing stream of events), and to make more sense in an
   * animation context.
   */
  start(observerCandidate) {
    const observer = createObserver(observerCandidate, props);
    const observerApi: Subscription = {
      stop: () => undefined,
      ...init(observer)
    };

    return observerApi;
  },
  applyMiddleware(middleware) {
    return action(init, {
      ...props,
      middleware: props.middleware ? [middleware, ...props.middleware] : [middleware]
    });
  },
  /**
   * pipe
   *
   * Returns a new Observable, which, when started, will pipe all update
   * output through the provided functions.
   */
  pipe(...funcs) {
    const pipedUpdate = funcs.length === 1 ? funcs[0] : pipe(...funcs);
    const middleware: Middleware = (update) => (v) => {
      update(pipedUpdate(v));
    };
    return this.applyMiddleware(middleware);
  },
  /**
   * while
   *
   * Returns a new Observable, which will automatically `complete` the first
   * time the `predicate` function returns false.
   */
  while(predicate) {
    const middleware: Middleware = (update, complete) => (v) =>
      predicate(v) ? update(v) : complete();

    return this.applyMiddleware(middleware);
  }
});

export default action;
