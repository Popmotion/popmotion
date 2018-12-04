import { IObserver, ObserverProps } from '../observer/types';

export type ActionInit = (
  observer: IObserver
) => Partial<ColdSubscription> | void;

export interface ColdSubscription {
  stop: () => void;
  [key: string]: Function | undefined;
}

export type ActionProps = ObserverProps & {
  init: ActionInit;
};
