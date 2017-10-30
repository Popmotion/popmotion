import { IObserver, ObserverProps } from '../observer/types';

export type ActionInit = (observer: IObserver) => ColdSubscription | void;

export interface ColdSubscription {
  stop: () => void;
  [key: string]: Function;
}

export type ActionProps = ObserverProps & {
  init: ActionInit
};
