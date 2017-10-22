import { createDefaultObserver } from '../action/observer';
import { Observer, ObserverCandidate } from '../action/types';

type BroadcastSubscription = {
  unsubscribe: () => void;
};

type BroadcastObserver = Observer & {
  subscribe: (observerCandidate: ObserverCandidate) => BroadcastSubscription
};

const broadcast = (): BroadcastObserver => {
  const subscribers: Observer[] = [];

  return {
    complete: () => subscribers.forEach((subscriber) => subscriber.complete()),
    error: (err) => subscribers.forEach((subscriber) => subscriber.error(err)),
    subscribe: (observerCandidate: ObserverCandidate) => {
      const observer = createDefaultObserver(observerCandidate);
      subscribers.push(observer);

      return {
        unsubscribe: () => {
          const index = subscribers.indexOf(observer);
          if (index !== -1) subscribers.splice(index, 1);
        }
      };
    },
    update: (v) => subscribers.forEach((subscriber) => subscriber.update(v))
  };
};

export default broadcast;