export type Update = (v?: any) => any;
export type Complete = () => any;
export type Error = (err?: any) => any;
export type Transformer = (v?: any) => any;
export type Predicate = (v?: any) => boolean;
export type Middleware = (update: Update, complete?: Complete) => (v: any) => any;

export type Observer = {
  update?: Update;
  complete?: Complete;
  error?: Error;
};

export type ObserverFactory = (observerCandidate: ObserverCandidate, props: ObservableProps) => Observer;

export type ObserverCandidate = Update | Observer;

type ObservableInit = (observer: Observer) => Subscription | void;

export type ObservableFactory<T> = (create: T, props: ObservableProps) => {
  pipe: (...funcs: Update[]) => T;
  while: (predicate: Predicate) => T;
  applyMiddleware: (middleware: Middleware) => T;
};

export type ObservableProps = {
  init?: ObservableInit;
  middleware?: Middleware[]
};

export type Subscription = {
  [key: string]: Function
};

export type HotSubscription = Subscription & {
  stop: () => void;
};

type ColdSubscription = Subscription & {
  unsubscribe: () => void;
};

export type Action = Observable & {
  start: (observerCandidate: ObserverCandidate) => HotSubscription;
};

type Reaction = Observable & Observer & {
  subscribe: (observerCandidate: ObserverCandidate) => ColdSubscription;
  pipe: (...funcs: Update[]) => Reaction;
};

export type ReactionFactory = (props?: ObservableProps) => Reaction;
export type ActionFactory = (init: ObservableInit, props?: ObservableProps) => Action;
