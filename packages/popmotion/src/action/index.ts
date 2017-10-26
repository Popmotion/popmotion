import chainable from '../chainable';
import createObserver from '../chainable/observer';
import {
  Action,
  ActionInit,
  HotSubscription,
  ObserverCandidate,
  ObserverProps
} from '../chainable/types';

const action = (props: ObserverProps = {}): Action => ({
  ...chainable(action, props),
  start: (reactionCandidate: ObserverCandidate): HotSubscription => {
    const { init, ...observerProps } = props;
    const observer = createObserver(reactionCandidate, observerProps);
    const api = init(observer);

    const subscription: HotSubscription = {
      stop: () => undefined
    };

    return api
      ? { ...subscription, ...api }
      : subscription;
  }
});

export default (init: ActionInit) => action({ init });
