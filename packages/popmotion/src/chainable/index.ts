import { pipe } from '@popmotion/popcorn';
import { Middleware, Update } from '../observer/types';
import { Predicate, Props } from './types';

export default abstract class Chainable<T> {
  protected props: Props;

  constructor(props: Props = {}) {
    this.props = props;
  }

  abstract create(props: Props): T;

  applyMiddleware(middleware: Middleware): T {
    return this.create({
      ...this.props,
      middleware: this.props.middleware
        ? [middleware, ...this.props.middleware]
        : [middleware]
    });
  }

  pipe(...funcs: Update[]): T {
    const pipedUpdate = funcs.length === 1 ? funcs[0] : pipe(...funcs);

    return this.applyMiddleware(update => v => update(pipedUpdate(v)));
  }

  while(predicate: Predicate): T {
    return this.applyMiddleware((update, complete) => v =>
      predicate(v) ? update(v) : complete()
    );
  }

  filter(predicate: Predicate): T {
    return this.applyMiddleware(update => v => predicate(v) && update(v));
  }
}
