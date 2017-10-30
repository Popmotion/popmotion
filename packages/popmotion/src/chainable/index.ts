import { Middleware, Update } from '../observer/types';
import { pipe } from '../transformers';
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
      middleware: this.props.middleware ? [middleware, ...this.props.middleware] : [middleware]
    });
  }

  pipe(...funcs: Update[]): T {
    const pipedUpdate = funcs.length === 1 ? funcs[0] : pipe(...funcs);
    const middleware: Middleware = (update) => (v) => update(pipedUpdate(v));

    return this.applyMiddleware(middleware);
  }

  while(predicate: Predicate): T {
    const middleware: Middleware = (update, complete) => (v) =>
      predicate(v) ? update(v) : complete();

    return this.applyMiddleware(middleware);
  }
}