import Chainable from '../chainable';
import { IObserver, ObserverCandidate } from '../observer/types';
import { HotSubscription } from './types';
export declare abstract class BaseReaction<T> extends Chainable<T> implements IObserver {
    private subscribers;
    private isActive;
    complete(): void;
    error(err: any): void;
    update(v: any): void;
    subscribe(observerCandidate: ObserverCandidate): HotSubscription;
}
