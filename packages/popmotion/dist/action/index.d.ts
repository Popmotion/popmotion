import Chainable from '../chainable';
import { ObserverCandidate } from '../observer/types';
import { ActionInit, ActionProps, ColdSubscription } from './types';
export declare class Action extends Chainable<Action> {
    create(props: ActionProps): Action;
    start(observerCandidate: ObserverCandidate): ColdSubscription;
}
declare const _default: (init: ActionInit) => Action;
export default _default;
