import { Observer, ObserverFactory } from './types';

const noop = (): void => undefined;

const defaultObserver = (observer: Observer): Observer => ({
  complete: noop,
  error: noop,
  update: noop,
  ...observer
});

const createObserver: ObserverFactory = (observerCandidate, { middleware } = {}) => {
  let isActive = true;

  const providedObserver = (typeof observerCandidate === 'function')
    ? defaultObserver({ update: observerCandidate })
    : defaultObserver(observerCandidate);

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
    middleware.forEach((m) => {
      update = m(update, observer.complete);
    });
  }

  return observer;
};

export default createObserver;
