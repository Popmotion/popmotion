import { timeSinceLastFrame } from 'framesync';
import { ObservableInit, Observer } from '../action/types';
import { speedPerSecond } from '../inc/calc';

type SubscriptionWithVelocity = {
  getVelocity: () => number;
  [key: string]: Function;
};

export const observableWithVelocity = (init: ObservableInit, from: number) =>
  (observer: Observer): SubscriptionWithVelocity => {
    let current = from;
    let prev = from;
    let timeDelta = 0;

    const { update } = observer;

    observer.update = (v: number) => {
      prev = current;
      current = v;
      timeDelta = timeSinceLastFrame();
      update(v);
    };

    const api = init(observer);

    return {
      getVelocity: () => speedPerSecond(current - prev, timeDelta),
      ...api
    };
  };
