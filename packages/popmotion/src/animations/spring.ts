import { SpringOptions, Animator } from './types';

export class SpringAnimator implements Animator<SpringOptions, number> {
  options: SpringOptions;

  isComplete = false;

  resolveSpring: (t: number) => number;

  static needsInterpolation = true;

  constructor(options: SpringOptions) {
    this.updateOptions(options);

    const { velocity, from, to, damping, stiffness, mass } = this.options;

    const initialVelocity = velocity ? -(velocity / 1000) : 0.0;
    const initialDelta = to - from;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const angularFreq = Math.sqrt(stiffness / mass) / 1000;

    if (dampingRatio < 1) {
      // Underdamped spring
      this.resolveSpring = (t: number) => {
        const envelope = Math.exp(-dampingRatio * angularFreq * t);
        const expoDecay =
          angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);

        return (
          to -
          envelope *
            (((initialVelocity + dampingRatio * angularFreq * initialDelta) /
              expoDecay) *
              Math.sin(expoDecay * t) +
              initialDelta * Math.cos(expoDecay * t))
        );
      };
    } else if (dampingRatio === 1) {
      // Critically damped spring
      this.resolveSpring = (t: number) => {
        const envelope = Math.exp(-angularFreq * t);
        return to - envelope * (1 + angularFreq * t);
      };
    } else {
      // Overdamped spring
      const dampedAngularFreq =
        angularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);

      this.resolveSpring = (t: number) => {
        const envelope = Math.exp(-dampingRatio * angularFreq * t);

        return (
          to -
          (envelope *
            // TODO: Also test this (initialDelta + (initialVelocity + angularFreq * initialDelta) * t)
            ((initialVelocity + dampingRatio * angularFreq * initialDelta) *
              Math.sinh(dampedAngularFreq * t) +
              dampedAngularFreq *
                initialDelta *
                Math.cosh(dampedAngularFreq * t))) /
            dampedAngularFreq
        );
      };
    }
  }

  update(t: number) {
    const latest = this.resolveSpring(t);

    const { velocity, restSpeed, restDelta, to } = this.options;
    const isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
    const isBelowDisplacementThreshold = Math.abs(to - latest) <= restDelta;
    this.isComplete = isBelowVelocityThreshold && isBelowDisplacementThreshold;

    return this.isComplete ? to : latest;
  }

  updateOptions({
    from = 0.0,
    to = 0.0,
    velocity = 0.0,
    stiffness = 100,
    damping = 10,
    mass = 1.0,
    restSpeed = 0.005,
    restDelta = 0.5
  }: SpringOptions) {
    this.options = {
      from,
      to,
      velocity,
      stiffness,
      damping,
      mass,
      restSpeed,
      restDelta
    };
  }

  static uniqueOptionKeys = new Set<keyof SpringOptions>([
    'stiffness',
    'damping',
    'mass',
    'restSpeed',
    'restDelta'
  ]);
}
