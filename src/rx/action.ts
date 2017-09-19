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
