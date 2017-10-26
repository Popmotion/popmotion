import { Middleware, Observer, ObserverCandidate, ObserverFactory } from './types';

const noop = (): void => undefined;

const defaultObserver = (observer: ObserverCandidate): Observer => ({
  complete: noop,
  error: noop,
  update: noop,
  ...observer
});

const createDefaultObserver = (observerCandidate: ObserverCandidate) => (typeof observerCandidate === 'function')
  ? defaultObserver({ update: observerCandidate })
  : defaultObserver(observerCandidate);

const createObserver: ObserverFactory = (observerCandidate, { middleware }) => {
  let isActive = true;

  const providedObserver = createDefaultObserver(observerCandidate);

  let update = providedObserver.update;

  const observer: Observer = {
    complete: () => {
      isActive = false;
      providedObserver.complete();
    },
    error: (err) => {
      isActive = false;
      providedObserver.error(err);
    },
    update: (v) => {
      if (!isActive) return;
      update(v);
    }
  };

  const numMiddleware = middleware ? middleware.length : 0;
  if (numMiddleware) {
    middleware.forEach((m: Middleware) => {
      update = m(update, observer.complete);
    });
  }

  return observer;
};

export default createObserver;
