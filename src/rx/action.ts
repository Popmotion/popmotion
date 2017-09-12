import { pipe } from '../inc/transformers';
import {
  Update,
  Observer,
  Observable,
  ObservableInit,
  ObservableFactory,
  Subscription,
  BoundObservable
} from './types';

const action: ObservableFactory = (init: ObservableInit, updatePipe?: Update): Observable => {
  return {
    start: function (observerCandidate: Update | Observer): Subscription {
      let current: any;

      const observer: Observer = (typeof observerCandidate === 'function')
        ? { update: observerCandidate }
        : observerCandidate;

      const { update } = observer;
      observer.update = (v?: any) => {
        current = (typeof updatePipe !== 'undefined') ? updatePipe(v) : v;
        update(current);
      };

      const api: Subscription = init(observer);

      return {
        get: () => current,
        ...api
      };
    },
    bind: function (observerCandidate: Update | Observer): BoundObservable {
      return {
        start: () => this.start(observerCandidate)
      };
    },
    pipe: function (...funcs: Update[]): Observable {
      return action(init, pipe(...funcs));
    }
  };
};

export default action;
