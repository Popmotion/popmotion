import observable from './observables/observable';
import createObserver from './observables/observer';
import { ActionFactory, HotSubscription, ObservableProps } from './observables/types';

const action: ActionFactory = (init, props) => ({
  ...observable((inheritProps: ObservableProps) => action(init, inheritProps), props),
  start: (observerCandidate) => {
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
