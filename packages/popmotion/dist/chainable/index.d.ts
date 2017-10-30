import { Middleware, Update } from '../observer/types';
import { Predicate, Props } from './types';
export default abstract class Chainable<T> {
    protected props: Props;
    constructor(props?: Props);
    abstract create(props: Props): T;
    applyMiddleware(middleware: Middleware): T;
    pipe(...funcs: Update[]): T;
    while(predicate: Predicate): T;
}
