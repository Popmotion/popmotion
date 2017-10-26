export type Update = (v?: any) => any;
export type Complete = () => any;
export type Error = (err?: any) => any;
export type Predicate = (v?: any) => boolean;
export type Middleware = (update: Update, complete?: Complete) => (v: any) => any;

export type HotSubscription = {
  stop: () => void;
  [key: string]: Function;
};

export type ColdSubscription = {
  unsubscribe: () => void;
};

export type ObserverProps = {
  init?: ActionInit;
  middleware?: Middleware[];
};

export type Action = {
  pipe: (...funcs: Update[]) => Action;
  while: (predicate: Predicate) => Action;
  applyMiddleware: (middleware: Middleware) => Action;
  start: (observerCandidate: ObserverCandidate) => HotSubscription;
};

export type ActionInit = (observer: Observer) => HotSubscription | void;

export type ObserverFactory = (observerCandidate: ObserverCandidate, props: ObserverProps) => Observer;

export interface Observer {
  update: Update;
  complete: Complete;
  error: Error;
}

export type ObserverCandidate = Update | Observer | Reaction | {
  update?: Update;
  complete?: Complete;
  error?: Error;
};

export type Reaction = Observer & {
  pipe: (...funcs: Update[]) => Reaction;
  while: (predicate: Predicate) => Reaction;
  applyMiddleware: (middleware: Middleware) => Reaction;
  subscribe: (observerCandidate: ObserverCandidate) => ColdSubscription;
};
