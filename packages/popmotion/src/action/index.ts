import Chainable from '../chainable';
import createObserver from '../observer';
import { ObserverCandidate } from '../observer/types';
import { ActionInit, ActionProps, ColdSubscription } from './types';

export class Action extends Chainable<Action> {
  create(props: ActionProps) {
    return new Action(props);
  }

  start(observerCandidate: ObserverCandidate): ColdSubscription {
    const { init, ...observerProps } = this.props;
    const observer = createObserver(observerCandidate, observerProps);
    const api = init(observer);

    const subscription: ColdSubscription = {
      stop: () => undefined
    };

    return api
      ? { ...subscription, ...api }
      : subscription;
  }
}

export default (init: ActionInit) => new Action({ init });
