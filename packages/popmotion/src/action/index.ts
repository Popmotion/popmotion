import Chainable from '../chainable';
import createObserver from '../chainable/observer';
import { ActionInit, ColdSubscription, ObserverProps, ObserverCandidate } from '../chainable/types';

export class Action extends Chainable<Action> {
  create(props: ObserverProps) {
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


// import chainable from '../chainable';
// import createObserver from '../chainable/observer';
// import { Action, ActionInit, ColdSubscription, ObserverProps } from '../chainable/types';

// const action = (props: ObserverProps): Action => ({
//   ...chainable(action, props),
//   start: (observerCandidate) => {
//     const { init, ...observerProps } = props;
//     const observer = createObserver(observerCandidate, observerProps);
//     const api = init(observer);

//     const subscription: ColdSubscription = {
//       stop: () => undefined
//     };

//     return api
//       ? { ...subscription, ...api }
//       : subscription;
//   }
// });

// export default (init: ActionInit): Action => action({ init });
