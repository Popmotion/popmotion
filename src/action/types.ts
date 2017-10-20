export type Update = (v?: any) => void;
export type Complete = () => void;
export type Error = (err?: any) => void;
export type Transformer = (v?: any) => any;
export type Predicate = (v?: any) => boolean;

export interface Subscription {
  stop: Complete;
  [key: string]: Function;
}

export type ObservableInit = (action: Observer) => { [key: string]: Function };

type ObserverMiddleware = (update: Update, complete: Complete) => (v: any) => void;

export type ObserverFactoryProps = {
  middleware?: ObserverMiddleware[];
};

export type ObserverFactory = (observerCandidate: ObserverCandidate, props: ObserverFactoryProps) => Observer;

export type ObservableFactory = (init: ObservableInit, props?: ObserverFactoryProps) => Observable;

export interface Observer {
  update: Update;
  complete?: Complete;
  error?: Error;
}

export type ObserverCandidate = Update | Observer;

export type Middleware = (update: Update, complete?: Complete) => (v: any) => void;
export interface Observable {
  start: (observerCandidate: ObserverCandidate) => Subscription;
  applyMiddleware: (middleware: Middleware) => Observable;
  pipe: (...funcs: Update[]) => Observable;
  while: (predicate: Predicate) => Observable;
}
