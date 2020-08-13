import { Easing } from '../easing/types';
declare type MixEasing = Easing | Easing[];
declare type InterpolateOptions<T> = {
  clamp?: boolean;
  ease?: MixEasing;
  mixer?: MixerFactory<T>;
};
declare type Mix<T> = (v: number) => T;
export declare type MixerFactory<T> = (from: T, to: T) => Mix<T>;
/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * @public
 */
export declare function interpolate<T>(
  input: number[],
  output: T[],
  { clamp: isClamp, ease, mixer }?: InterpolateOptions<T>
): (v: number) => T;
export {};
