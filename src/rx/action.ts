import { timeSinceLastFrame } from 'framesync';
import { pipe } from '../inc/transformers';
import { speedPerSecond } from '../inc/calc';
import { isNum, isArray } from '../inc/utils';
import {
  Update,
  Observer,
  Observable,
  ObservableInit,
  ObservableFactory,
  Subscription,
  BoundObservable
} from './types';

const calcVelocity = (current: number, prev: number, timeDelta: number): number =>
  speedPerSecond(current - prev, timeDelta);

const getVelocity = (current: any, prev: any, timeDelta: number) =>
  (isNum(current) && isNum(prev))
    ? calcVelocity(current, prev, timeDelta)
    : (isArray(current) && isArray(prev))
      ? current.map((t: number, i: number) =>
          calcVelocity(t, prev[i], timeDelta)
        )
      : Object.keys(current).map((t: string, i: number) =>
          calcVelocity(current[i], prev[i], timeDelta)
        );

const action: ObservableFactory = (init: ObservableInit, updatePipe?: Update): Observable => {
  return {
    start: function (observerCandidate: Update | Observer): Subscription {
      let prev: any;
      let current: any;
      let timeDelta = 0;

      const observer: Observer = (typeof observerCandidate === 'function')
        ? { update: observerCandidate }
        : observerCandidate;

      const { update } = observer;
      observer.update = (v?: any) => {
        timeDelta = timeSinceLastFrame();
        prev = current;
        current = (typeof updatePipe !== 'undefined') ? updatePipe(v) : v;

        update(current);
      };

      const api = init(observer);

      return {
        get: () => current,
        getVelocity: () => getVelocity(current, prev, timeDelta),
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
