import { SpringAnimator } from '../spring';
import { KeyframesAnimator } from '../keyframes';
import { DecayAnimator } from '../decay';
interface Options {}
export declare function detectAnimationFromOptions<T extends Options>(
  config: T
):
  | typeof SpringAnimator
  | typeof KeyframesAnimator
  | typeof DecayAnimator
  | undefined;
export {};
