import { ColdSubscription } from '../action/types';
import Chainable from '../chainable';
import createObserver from '../observer';
import { IObserver, ObserverCandidate } from '../observer/types';
import { HotSubscription } from './types';

export abstract class BaseMulticast<T> extends Chainable<T>
  implements IObserver {
  private parent: ColdSubscription;
  public subscribers: IObserver[] = [];

  complete(): void {
    this.subscribers.forEach(subscriber => subscriber.complete());
  }

  error(err: any): void {
    this.subscribers.forEach(subscriber => subscriber.error(err));
  }

  update(v: any): void {
    for (let i = 0; i < this.subscribers.length; i++) {
      this.subscribers[i].update(v);
    }
  }

  subscribe(observerCandidate: ObserverCandidate): HotSubscription {
    const observer = createObserver(observerCandidate, this.props);
    this.subscribers.push(observer);

    const subscription = {
      unsubscribe: () => {
        const index = this.subscribers.indexOf(observer);
        if (index !== -1) this.subscribers.splice(index, 1);
      }
    };

    return subscription;
  }

  stop(): void {
    if (this.parent) this.parent.stop();
  }

  registerParent(subscription: ColdSubscription): void {
    this.stop();
    this.parent = subscription;
  }
}
