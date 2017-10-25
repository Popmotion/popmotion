import { pipe } from '../transformers';
import { Middleware, ObservableFactory, ObservableProps } from './types';

const observable: ObservableFactory = (props = {}) => ({
  pipe(...funcs) {
    const pipedUpdate = funcs.length === 1 ? funcs[0] : pipe(...funcs);
    const middleware: Middleware = (update) => (v) => update(pipedUpdate(v));

    return this.applyMiddleware(middleware);
  },
  while(predicate) {
    const middleware: Middleware = (update, complete) => (v) =>
      predicate(v) ? update(v) : complete();

    return this.applyMiddleware(middleware);
  }
});

export default observable;

export const applyMiddleware = (props: ObservableProps, middleware: Middleware) => ({
  ...props,
  middleware: props.middleware ? [middleware, ...props.middleware] : [middleware]
});
