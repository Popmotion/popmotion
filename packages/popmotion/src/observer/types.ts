export type Update = (v?: any) => any;
export type Complete = () => any;
export type Error = (err?: any) => any;

export interface Observer {
  update: Update;
  complete: Complete;
  error: Error;
}

export type ObserverProps = {
  factory?: Function;
  middleware?: Middleware[];
};

export type ObserverFactory = (observerCandidate: ObserverCandidate, props: ObserverProps) => Observer;

export type ObserverCandidate = Update | Observer | Reaction | {
  update?: Update;
  complete?: Complete;
  error?: Error;
};
