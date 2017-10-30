import { Update, Complete } from '../observer/types';

export type Predicate = (v?: any) => boolean;
export type Middleware = (update: Update, complete?: Complete) => (v: any) => any;

export type Props = {
  [key: string]: any
};

export interface Chainable<T> {
  pipe: (...funcs: Update[]) => T;
  while: (predicate: Predicate) => T;
  applyMiddleware: (middleware: Middleware) => T;
}

export type ChainableFactory<T> = (props: Props) => T;
