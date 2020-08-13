import { SpringOptions, Animator } from './types';
export declare class SpringAnimator implements Animator<SpringOptions, number> {
  options: SpringOptions;
  isComplete: boolean;
  resolveSpring: (t: number) => number;
  static needsInterpolation: boolean;
  constructor(options: SpringOptions);
  update(t: number): number | undefined;
  updateOptions({
    from,
    to,
    velocity,
    stiffness,
    damping,
    mass,
    restSpeed,
    restDelta
  }: SpringOptions): void;
  static uniqueOptionKeys: Set<
    | 'velocity'
    | 'restSpeed'
    | 'to'
    | 'restDelta'
    | 'from'
    | 'damping'
    | 'stiffness'
    | 'mass'
  >;
}
