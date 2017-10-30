import { IObserver, ObserverProps } from '../observer/types';
export declare type ActionInit = (observer: IObserver) => ColdSubscription | void;
export interface ColdSubscription {
    stop: () => void;
    [key: string]: Function;
}
export declare type ActionProps = ObserverProps & {
    init: ActionInit;
};
