import { ObserverProps } from '../observer/types';
import { BaseReaction } from './base';
export declare class Reaction extends BaseReaction<Reaction> {
    create(props: ObserverProps): Reaction;
}
declare const _default: () => Reaction;
export default _default;
