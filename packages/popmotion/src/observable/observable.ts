import { pipe } from '../transformers';
import { Middleware, ObservableFactory } from './types';

const observable: ObservableFactory = (create, props = {}) => ({
  pipe(...funcs) {
    const pipedUpdate = funcs.length === 1 ? funcs[0] : pipe(...funcs);
    const middleware: Middleware = (update) => (v) => update(pipedUpdate(v));

    return this.applyMiddleware(middleware);
  },
  while(predicate) {
    const middleware: Middleware = (update, complete) => (v) =>
      predicate(v) ? update(v) : complete();

    return this.applyMiddleware(middleware);
  },
  applyMiddleware(middleware) {
    return create({
      ...props,
      middleware: props.middleware ? [middleware, ...props.middleware] : [middleware]
    });
  }
});

export default observable;
