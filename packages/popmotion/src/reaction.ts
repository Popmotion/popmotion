import chainable from './chainable';
import createObserver from './chainable/observer';
import {
  Observer,
  ObserverProps,
  Reaction
} from './chainable/types';

const reaction = (props: ObserverProps = {}): Reaction => {
  const subscribers: Observer[] = [];
  let isActive = true;

  return {
    ...chainable(reaction, props),
    complete: (): void => {
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
      for (let i = 0; i < subscribers.length; i++) {
        subscribers[i].update(v);
      }
    }
  };
};

export default reaction;
