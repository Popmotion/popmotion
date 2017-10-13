export type Update = (v?: any) => void;
export type Complete = () => void;
export type Error = (err: string) => void;
export type Transformer = (v?: any) => any;

export interface Subscription {
  stop: () => void;
  [key: string]: Function;
}

export type ObservableInit = (action: Observer) => { [key: string]: Function };

export type ObservableFactoryProps = {
  updatePipe?: Update[];
};

export type ObservableFactory = (init: ObservableInit, props?: ObservableFactoryProps) => Observable;

export interface Observer {
  update: Update;
  complete?: Complete;
  error?: Error;
};

export interface BoundObservable {
  start: () => Subscription;
}

export interface Observable {
  start: (observerCandidate: Update | Observer) => Subscription;
  bind: (observerCandidate: Update | Observer) => BoundObservable;
  pipe: (...funcs: Update[]) => Observable;
};
