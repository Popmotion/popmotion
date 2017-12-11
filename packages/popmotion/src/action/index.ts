import Chainable from '../chainable';
import createObserver from '../observer';
import { ObserverCandidate, PartialObserver } from '../observer/types';
import { ActionInit, ActionProps, ColdSubscription } from './types';

export class Action extends Chainable<Action> {
  create(props: ActionProps) {
    return new Action(props);
  }

  start(observerCandidate: ObserverCandidate = {}): ColdSubscription {
    let isComplete = false;
    let subscription: ColdSubscription = {
      stop: () => undefined
    };

    const { init, ...observerProps } = this.props;
    const observer = createObserver(observerCandidate, observerProps, () => {
      isComplete = true;
      subscription.stop();
    });

    const api = init(observer);

    subscription = api
      ? { ...subscription, ...api }
      : subscription;

    if ((observerCandidate as PartialObserver).registerParent) {
      (observerCandidate as PartialObserver).registerParent(subscription);
    }

    if (isComplete) subscription.stop();

    return subscription;
  }
}

export default (init: ActionInit) => new Action({ init });
