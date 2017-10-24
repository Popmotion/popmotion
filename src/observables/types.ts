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

export type ObserverCandidate = Update | Observer;

type ObservableInit = (observer: Observer) => Subscription | void;

type Observable = {
  applyMiddleware: (middleware: Middleware) => AnyObservable;
  pipe: (...funcs: Update[]) => AnyObservable;
  while: (predicate: Predicate) => AnyObservable;
  start: (observerCandidate: ObserverCandidate) => HotSubscription;
  subscribe: (observerCandidate: ObserverCandidate) => ColdSubscription;
};

export type ObservableProps = {
  init?: ObservableInit;
  middleware?: Middleware[]
};

type Subscription = {
  [key: string]: Function
};

export type HotSubscription = Subscription & {
  stop: () => void;
};

type ColdSubscription = Subscription & {
  unsubscribe: () => void;
};

type Action = Observable;
type Reaction = Observable & Observer;

type AnyFactory = ReactionFactory | ActionFactory | InternalActionFactory;
type AnyObservable = Reaction | Action;

export type ObservableFactory = (create: AnyFactory, props: ObservableProps) => Observable;
export type ReactionFactory = (props?: ObservableProps) => Reaction;
type InternalActionFactory = (props?: ObservableProps) => Action;
export type ActionFactory = (init: ObservableInit, props?: ObservableProps) => Action;
