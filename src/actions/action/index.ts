import { pipe } from 'inc/transformers';
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
 * minimal API footprint. Inspiration is drawn directly from Rx, where
 * we replace the weighty namespace with just three exported methods:
 * start, bind and pipe
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
 *
 * @param init
 * @param updatePipe 
 */

const action: ObservableFactory = (init: ObservableInit, updatePipe?: Update): Observable => {
  return {
    /**
     * start
     *
     * Analog to Rx.Observable.subscribe. Renamed for clarity (subscribe
     * actually returns a new instance of a stream, rather than hooking
     * into an existing stream of events), and to make more sense in an
     * animation context.
     * 
     * @param observerCandidate
     */
    start(observerCandidate: Update | Observer): Subscription {
      const observer: Observer = (typeof observerCandidate === 'function')
        ? { update: observerCandidate }
        : observerCandidate;

      if (updatePipe) {
        const { update } = observer;
        observer.update = (v?: any) => update(updatePipe(v));
      }

      return {
        ...init(observer)
      };
    },
    bind(observerCandidate: Update | Observer): BoundObservable {
      return {
        start: () => this.start(observerCandidate)
      };
    },
    pipe(...funcs: Update[]): Observable {
      return action(init, pipe(...funcs));
    }
  };
};

export default action;
