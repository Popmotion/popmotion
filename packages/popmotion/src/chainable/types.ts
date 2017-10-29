export type Update = (v?: any) => any;
export type Complete = () => any;
export type Error = (err?: any) => any;
export type Predicate = (v?: any) => boolean;
export type Middleware = (update: Update, complete?: Complete) => (v: any) => any;

export interface Observer {
  update: Update;
  complete: Complete;
  error: Error;
}

export interface Chainable<T> {
  pipe: (...funcs: Update[]) => T;
  while: (predicate: Predicate) => T;
  applyMiddleware: (middleware: Middleware) => T;
}

export interface Action extends Chainable<Action> {
  start: (observerCandidate: ObserverCandidate) => ColdSubscription;
}

export interface Reaction extends Observer {
  subscribe: (observerCandidate: ObserverCandidate) => HotSubscription;
}

export interface ColdSubscription {
  stop: () => void;
  [key: string]: Function;
}

export interface HotSubscription {
  unsubscribe: () => void;
}

export type ObserverProps = {
  init?: ActionInit;
  factory?: Function;
  middleware?: Middleware[];
};

export type ActionInit = (observer: Observer) => ColdSubscription | void;

export type ObserverFactory = (observerCandidate: ObserverCandidate, props: ObserverProps) => Observer;

export type ObserverCandidate = Update | Observer | Reaction | {
  update?: Update;
  complete?: Complete;
  error?: Error;
};

export type ChainableFactory<T> = (props: ObserverProps) => T;
