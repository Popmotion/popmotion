import { Animator, DecayOptions } from './types';
export declare class DecayAnimator implements Animator<DecayOptions, number> {
  options: DecayOptions;
  amplitude: number;
  target: number;
  static needsInterpolation: boolean;
  isComplete: boolean;
  constructor(options: DecayOptions);
  update(t: number): number;
  updateOptions({
    velocity,
    from,
    power,
    timeConstant,
    restDelta,
    modifyTarget
  }?: DecayOptions): void;
  static uniqueOptionKeys: Set<
    | 'velocity'
    | 'to'
    | 'restDelta'
    | 'from'
    | 'timeConstant'
    | 'power'
    | 'modifyTarget'
  >;
}
