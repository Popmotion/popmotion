export type Update = (v?: any) => void;
export type Complete = () => void;
export type Error = (err: string) => void;
export type Transformer = (v?: any) => any;

export interface Subscription {
  stop: Complete;
  [key: string]: Function;
}

export type ObservableInit = (action: Observer) => { [key: string]: Function };

export type ObservableFactoryProps = {
  updatePipe?: Update[];
  untilActions?: Observable[];
};

export type ObservableFactory = (init: ObservableInit, props?: ObservableFactoryProps) => Observable;

export interface Observer {
  update: Update;
  complete?: Complete;
  error?: Error;
}

export type ObserverCandidate = Update | Observer;

export interface Observable {
  start: (observerCandidate: ObserverCandidate) => Subscription;
  pipe: (...funcs: Update[]) => Observable;
}
