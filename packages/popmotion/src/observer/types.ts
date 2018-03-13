export type Update = Function;
export type Complete = () => any;
export type Error = (err?: any) => any;
export type ObserverEvent = (type?: string, v?: any) => any;
export type Middleware = (update: Update, complete?: Complete) => (v: any) => any;

export interface IObserver {
  update: Update;
  complete: Complete;
  error: Error;
}

export interface PartialObserver {
  update?: Update;
  complete?: Complete;
  error?: Error;
  registerParent?: Function;
}

export type ObserverProps = PartialObserver & {
  middleware?: Middleware[];
  onComplete?: Function;
};

export type ObserverFactory = (observerCandidate: ObserverCandidate, props: ObserverProps) => IObserver;

export type ObserverCandidate = Update | IObserver | PartialObserver;
