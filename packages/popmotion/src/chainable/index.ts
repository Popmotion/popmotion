import { pipe } from '../transformers';
import { Middleware, ObserverProps, Predicate, Update } from './types';

const chainable = <T>(create: (props: ObserverProps) => T, props: ObserverProps = {}) => ({
  applyMiddleware: (middleware: Middleware): T => create({
    ...props,
    middleware: props.middleware ? [middleware, ...props.middleware] : [middleware]
  }),
  pipe(...funcs: Update[]): T {
    const pipedUpdate = funcs.length === 1 ? funcs[0] : pipe(...funcs);
    const middleware: Middleware = (update) => (v) => update(pipedUpdate(v));

    return this.applyMiddleware(middleware);
  },
  while(predicate: Predicate): T {
    const middleware: Middleware = (update, complete) => (v) =>
      predicate(v) ? update(v) : complete();

    return this.applyMiddleware(middleware);
  }
});

export default chainable;
