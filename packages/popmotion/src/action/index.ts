import Chainable from '../chainable';
import createObserver from '../observer';
import { ObserverCandidate, PartialObserver } from '../observer/types';
import { ActionInit, ActionProps, ColdSubscription } from './types';

export class Action<
  Sub extends ColdSubscription = ColdSubscription
> extends Chainable<Action> {
  create(props: ActionProps) {
    return new Action(props);
  }

  start(observerCandidate: ObserverCandidate = {}): Sub {
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

    subscription = api ? { ...subscription, ...api } : subscription;

    if ((observerCandidate as PartialObserver).registerParent) {
      (observerCandidate as PartialObserver).registerParent(subscription);
    }

    if (isComplete) subscription.stop();

    return subscription as any;
  }
}

export default <Sub extends ColdSubscription = ColdSubscription>(
  init: ActionInit
) => new Action<Sub>({ init });
