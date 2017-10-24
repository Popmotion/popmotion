import observable from './observable/observable';
import createObserver from './observable/observer';
import { Observer, ReactionFactory } from './observable/types';

const reaction: ReactionFactory = (props = {}) => {
  const subscribers: Observer[] = [];
  let isActive = true;

  return {
    ...observable(reaction, props),
    complete: () => {
      isActive = false;
      subscribers.forEach((subscriber) => subscriber.complete());
    },
    error: (err) => {
      isActive = false;
      subscribers.forEach((subscriber) => subscriber.error(err));
    },
    subscribe: (observerCandidate) => {
      const observer = createObserver(observerCandidate, props);
      subscribers.push(observer);

      return {
        unsubscribe: () => {
          const index = subscribers.indexOf(observer);
          if (index !== -1) subscribers.splice(index, 1);
        }
      };
    },
    update: (v: any) => {
      if (!isActive) return;
      subscribers.forEach((subscriber) => subscriber.update(v));
    }
  };
};

export default reaction;
