import observable, { applyMiddleware } from './observable/observable';
import createObserver from './observable/observer';
import { ActionFactory, HotSubscription } from './observable/types';

const action: ActionFactory = (init, props = {}) => ({
  ...observable(props),
  start(observerCandidate) {
    const observer = createObserver(observerCandidate, props);
    const api = init(observer);

    const subscription: HotSubscription = {
      stop: () => undefined
    };

    return api
      ? { ...subscription, ...api }
      : subscription;
  },
  applyMiddleware(middleware) {
    return action(init, applyMiddleware(props, middleware));
  }
});

export default action;
