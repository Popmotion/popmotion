import { IObserver, Middleware, ObserverCandidate, ObserverProps } from './types';

export class Observer implements IObserver {
  private isActive = true;
  private props: ObserverProps;

  constructor({ ...props }: ObserverProps) {
    this.props = props;

    const { middleware } = props;
    let { update } = props;

    if (update && middleware && middleware.length) {
      middleware.forEach((m: Middleware) => update = m(update, this.complete));
    }

    this.props.update = update;
  }

  update = (v: any) => {
    const { update } = this.props;
    if (update && this.isActive) update(v);
  }

  complete = () => {
    const { complete } = this.props;
    if (complete) complete();
    this.isActive = false;
  }

  error = (err: any) => {
    const { error } = this.props;
    if (error) error(err);
    this.isActive = false;
  }
}

export default (observerCandidate: ObserverCandidate, { middleware }: ObserverProps) => {
  let observerProps: ObserverProps = { middleware };

  if (typeof observerCandidate === 'function') {
    observerProps.update = observerCandidate;
  } else {
    observerProps = {
      ...observerProps,
      ...observerCandidate
    };
  }

  return new Observer(observerProps);
};
