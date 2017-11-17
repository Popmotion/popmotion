import { IObserver, Middleware, ObserverCandidate, ObserverProps, PartialObserver, Update } from './types';

// TODO clear up some of the terminology here and look at merging more generally with Reaction
export class Observer implements IObserver {
  private isActive = true;
  private observer: PartialObserver;
  private updateObserver: Update;
  private onComplete: Function;

  constructor({ middleware, onComplete }: ObserverProps, observer: PartialObserver) {
    this.observer = observer;
    this.updateObserver = (v: any) => observer.update(v);
    this.onComplete = onComplete;

    if (observer.update && middleware && middleware.length) {
      middleware.forEach((m: Middleware) => this.updateObserver = m(this.updateObserver, this.complete));
    }
  }

  update = (v: any) => {
    if (this.observer.update) this.updateObserver(v);
  }

  complete = () => {
    if (this.observer.complete && this.isActive) this.observer.complete();
    if (this.onComplete) this.onComplete();
    this.isActive = false;
  }

  error = (err: any) => {
    if (this.observer.error && this.isActive) this.observer.error(err);
    this.isActive = false;
  }
}

export default (observerCandidate: ObserverCandidate, { middleware }: ObserverProps, onComplete?: Function) => {
  if (typeof observerCandidate === 'function') {
    return new Observer({ middleware, onComplete }, { update: observerCandidate });
  } else {
    return new Observer({ middleware, onComplete }, observerCandidate);
  }
};
