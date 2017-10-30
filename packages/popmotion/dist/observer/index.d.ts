import { IObserver, ObserverCandidate, ObserverProps } from './types';
export declare class Observer implements IObserver {
    private isActive;
    private props;
    constructor({...props}: ObserverProps);
    update: (v: any) => void;
    complete: () => void;
    error: (err: any) => void;
}
declare const _default: (observerCandidate: ObserverCandidate, {middleware}: ObserverProps) => Observer;
export default _default;
