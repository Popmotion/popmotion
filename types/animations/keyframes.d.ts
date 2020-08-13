import { KeyframeOptions, Animator } from './types';
import { Easing } from '../easing/types';
export declare function defaultEasing(values: any[], easing?: Easing): Easing[];
export declare function defaultOffset(values: any[]): number[];
export declare function convertOffsetToTimes(
  offset: number[],
  duration: number
): number[];
export declare class KeyframesAnimator
  implements Animator<KeyframeOptions, any> {
  options: KeyframeOptions;
  isComplete: boolean;
  static needsInterpolation: boolean;
  interpolator: (t: number) => any;
  constructor(options: KeyframeOptions);
  update(t: number): any;
  updateOptions({ from, to, ease, offset, duration }: KeyframeOptions): void;
  static uniqueOptionKeys: Set<'to' | 'from' | 'ease' | 'duration' | 'offset'>;
}
