import { Observer, ObserverProps } from '../observer/types';

export type ActionInit = (observer: Observer) => ColdSubscription | void;

export interface ColdSubscription {
  stop: () => void;
  [key: string]: Function;
}

export type ActionProps = ObserverProps & {
  init: ActionInit
};
