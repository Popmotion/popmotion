import { IObserver, Update, Middleware, ObserverCandidate, ObserverProps, PartialObserver } from './types';

// TODO clear up some of the terminology here.
export class Observer implements IObserver {
  private isActive = true;
  private props: ObserverProps;
  private observer: PartialObserver;
  private updateObserver: Update;

  constructor({ ...props }: ObserverProps, observer: PartialObserver) {
    this.props = props;
    this.observer = observer;
    this.updateObserver = (v: any) => observer.update(v);

    const { middleware } = props;
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
