import observable from './observable/observable';
import createObserver from './observable/observer';
import { ActionFactory, HotSubscription, ObservableProps } from './observable/types';

const action: ActionFactory = (init, props = {}) => ({
  ...observable((inheritProps: ObservableProps) => action(init, inheritProps), props),
  start(observerCandidate) {
    const observer = createObserver(observerCandidate, props);
    const api = init(observer);

    const subscription: HotSubscription = {
      stop: () => undefined
    };

    return api
      ? { ...subscription, ...api }
      : subscription;
  }
});

export default action;
