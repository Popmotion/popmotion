import { pipe } from '../transformers';
import { Middleware, ObserverProps, Predicate, Update } from './types';

export default abstract class Chainable<T> {
  protected props: ObserverProps;

  constructor(props?: ObserverProps) {
    this.props = props;
  }

  abstract create(props: ObserverProps): T;

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

// import { pipe } from '../transformers';
// import { Chainable, Middleware, ObserverProps, Predicate, Update } from './types';

// const chainable = <T>(create: (props: ObserverProps) => T, props: ObserverProps = {}): Chainable<T> => ({
//   applyMiddleware: (middleware: Middleware): T => create({
//     ...props,
//     middleware: props.middleware ? [middleware, ...props.middleware] : [middleware]
//   }),
//   pipe(...funcs: Update[]): T {
//     const pipedUpdate = funcs.length === 1 ? funcs[0] : pipe(...funcs);
//     const middleware: Middleware = (update) => (v) => update(pipedUpdate(v));

//     return this.applyMiddleware(middleware);
//   },
//   while(predicate: Predicate): T {
//     const middleware: Middleware = (update, complete) => (v) =>
//       predicate(v) ? update(v) : complete();

//     return this.applyMiddleware(middleware);
//   }
// });

// export default chainable;
