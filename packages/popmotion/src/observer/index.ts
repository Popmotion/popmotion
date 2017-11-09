import { IObserver, Middleware, ObserverCandidate, ObserverProps, PartialObserver, Update } from './types';

// TODO clear up some of the terminology here.
export class Observer implements IObserver {
  private isActive = true;
  private observer: PartialObserver;
  private updateObserver: Update;

  constructor({ middleware }: ObserverProps, observer: PartialObserver) {
    this.observer = observer;
    this.updateObserver = (v: any) => observer.update(v);

    if (observer.update && middleware && middleware.length) {
      middleware.forEach((m: Middleware) => this.updateObserver = m(this.updateObserver, this.complete));
    }
  }

  update = (v: any) => {
    if (this.observer.update && this.isActive) this.updateObserver(v);
  }

  complete = () => {
    if (this.observer.complete) this.observer.complete();
    this.isActive = false;
  }

  error = (err: any) => {
    if (this.observer.error) this.observer.error(err);
    this.isActive = false;
  }
}

export default (observerCandidate: ObserverCandidate, { middleware }: ObserverProps) => {
  if (typeof observerCandidate === 'function') {
    return new Observer({ middleware }, { update: observerCandidate });
  } else {
    return new Observer({ middleware }, observerCandidate);
  }
};
