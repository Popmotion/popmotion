export declare type Update = (v?: any) => any;
export declare type Complete = () => any;
export declare type Error = (err?: any) => any;
export declare type Middleware = (update: Update, complete?: Complete) => (v: any) => any;
export interface IObserver {
    update: Update;
    complete: Complete;
    error: Error;
}
export interface PartialObserver {
    update?: Update;
    complete?: Complete;
    error?: Error;
}
export declare type ObserverProps = PartialObserver & {
    middleware?: Middleware[];
};
export declare type ObserverFactory = (observerCandidate: ObserverCandidate, props: ObserverProps) => IObserver;
export declare type ObserverCandidate = Update | IObserver | PartialObserver;
