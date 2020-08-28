import { SpringOptions, Animator, Animatable } from "./types"

/**
 * This is based on the spring implementation of Wobble https://github.com/skevy/wobble
 */

export class SpringAnimator implements Animator<SpringOptions, number> {
    options: SpringOptions

    isComplete = false

    resolveSpring: (t: number) => number
    resolveVelocity: (t: number) => number

    static needsInterpolation = (from: Animatable, to: Animatable) => {
        return typeof from === "string" || typeof to === "string"
    }

    constructor(options: SpringOptions) {
        this.updateOptions(options)
        this.createSpring()
    }

    createSpring() {
        const { velocity, from, to, damping, stiffness, mass } = this.options

        const initialVelocity = velocity ? -(velocity / 1000) : 0.0
        const initialDelta = to - from
        const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass))
        const angularFreq = Math.sqrt(stiffness / mass) / 1000

        if (dampingRatio < 1) {
            // Underdamped spring
            this.resolveSpring = (t: number) => {
                const envelope = Math.exp(-dampingRatio * angularFreq * t)
                const expoDecay =
                    angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio)

                return (
                    to -
                    envelope *
                        (((initialVelocity +
                            dampingRatio * angularFreq * initialDelta) /
                            expoDecay) *
                            Math.sin(expoDecay * t) +
                            initialDelta * Math.cos(expoDecay * t))
                )
            }

            this.resolveVelocity = (t: number) => {
                // TODO Resolve these calculations with the above
                const envelope = Math.exp(-dampingRatio * angularFreq * t)
                const expoDecay =
                    angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio)
                return (
                    dampingRatio *
                        angularFreq *
                        envelope *
                        ((Math.sin(expoDecay * t) *
                            (initialVelocity +
                                dampingRatio * angularFreq * initialDelta)) /
                            expoDecay +
                            initialDelta * Math.cos(expoDecay * t)) -
                    envelope *
                        (Math.cos(expoDecay * t) *
                            (initialVelocity +
                                dampingRatio * angularFreq * initialDelta) -
                            expoDecay * initialDelta * Math.sin(expoDecay * t))
                )
            }
        } else if (dampingRatio === 1) {
            // Critically damped spring
            this.resolveSpring = (t: number) => {
                const envelope = Math.exp(-angularFreq * t)
                return (
                    to -
                    envelope *
                        (initialDelta +
                            (initialVelocity + angularFreq * initialDelta) * t)
                )
            }

            // We only rely on velocity to calculate when the animation has finished
            // and critically/overdamped springs can rely on distance alone
            this.resolveVelocity = () => 0
        } else {
            // Overdamped spring
            const dampedAngularFreq =
                angularFreq * Math.sqrt(dampingRatio * dampingRatio - 1)

            this.resolveSpring = (t: number) => {
                const envelope = Math.exp(-dampingRatio * angularFreq * t)

                return (
                    to -
                    (envelope *
                        // TODO: Also test this (initialDelta + (initialVelocity + angularFreq * initialDelta) * t)
                        ((initialVelocity +
                            dampingRatio * angularFreq * initialDelta) *
                            Math.sinh(dampedAngularFreq * t) +
                            dampedAngularFreq *
                                initialDelta *
                                Math.cosh(dampedAngularFreq * t))) /
                        dampedAngularFreq
                )
            }

            this.resolveVelocity = () => 0
        }
    }

    update(t: number) {
        const { restSpeed, restDelta, to } = this.options

        const latest = this.resolveSpring(t)
        const velocity = this.resolveVelocity(t) * 1000
        const isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed
        const isBelowDisplacementThreshold = Math.abs(to - latest) <= restDelta

        this.isComplete =
            isBelowVelocityThreshold && isBelowDisplacementThreshold

        return this.isComplete ? to : latest
    }

    updateOptions({
        from = 0.0,
        to = 0.0,
        velocity = 0.0,
        stiffness = 100,
        damping = 10,
        mass = 1.0,
        restSpeed = 2,
        restDelta,
    }: SpringOptions) {
        /**
         * If we're working within what looks like a 0-1 range, change the default restDelta
         * to 0.01
         */
        if (restDelta === undefined) {
            restDelta = Math.abs(to - from) <= 1 ? 0.01 : 0.4
        }

        this.options = {
            from,
            to,
            velocity,
            stiffness,
            damping,
            mass,
            restSpeed,
            restDelta,
        }
    }

    flipTarget() {
        const { from, to, velocity } = this.options
        this.options.velocity = -velocity
        this.options.from = to
        this.options.to = from
        this.createSpring()
    }

    static uniqueOptionKeys = new Set<keyof SpringOptions>([
        "velocity",
        "stiffness",
        "damping",
        "mass",
        "restSpeed",
        "restDelta",
    ])
}
