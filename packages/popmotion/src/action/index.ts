import chainable from '../chainable';
import createObserver from '../chainable/observer';
import { Action, ActionInit, ChainableFactory, ColdSubscription } from '../chainable/types';

const action: ChainableFactory<Action> = (props) => ({
  ...chainable(action, props),
  start: (observerCandidate) => {
    const { init, ...observerProps } = props;
    const observer = createObserver(observerCandidate, observerProps);
    const api = init(observer);

    const subscription: ColdSubscription = {
      stop: () => undefined
    };

    return api
      ? { ...subscription, ...api }
      : subscription;
  }
});

export default (init: ActionInit): Action => action({ init });
