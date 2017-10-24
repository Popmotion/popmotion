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

export type Observable = {
  applyMiddleware: (middleware: Middleware) => AnyObservable;
  pipe: (...funcs: Update[]) => AnyObservable;
  while: (predicate: Predicate) => AnyObservable;
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
};

type InternalActionFactory = (props?: ObservableProps) => Action;
type AnyFactory = ReactionFactory | InternalActionFactory;
type AnyObservable = Reaction | Action;

export type ObservableFactory = (create: AnyFactory, props?: ObservableProps) => Observable;
export type ReactionFactory = (props?: ObservableProps) => Reaction;
export type ActionFactory = (init: ObservableInit, props?: ObservableProps) => Action;
