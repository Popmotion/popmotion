import { ObserverProps } from '../observer/types';
import { BaseReaction } from './base';
export declare type ValueProps = ObserverProps & {
    value: number;
};
export declare class ValueReaction extends BaseReaction<ValueReaction> {
    private prev;
    private current;
    private lastUpdated;
    private timeDelta;
    constructor(props: ValueProps);
    create(props: ValueProps): ValueReaction;
    get(): number;
    getVelocity(): number;
    update(v: number): void;
}
declare const _default: (value: number) => ValueReaction;
export default _default;
