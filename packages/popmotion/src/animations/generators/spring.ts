import { SpringOptions, Animation, AnimationState } from "../types"

/**
 * This is based on the spring implementation of Wobble https://github.com/skevy/wobble
 */
export function spring({
    from = 0.0,
    to = 0.0,
    velocity = 0.0,
    stiffness = 100,
    damping = 10,
    mass = 1.0,
    restSpeed = 2,
    restDelta,
}: SpringOptions): Animation<number> {
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state: AnimationState<number> = { done: false, value: from }

    let resolveSpring = zero
    let resolveVelocity = zero

    function createSpring() {
        const initialVelocity = velocity ? -(velocity / 1000) : 0.0
        const initialDelta = to - from
        const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass))
        const angularFreq = Math.sqrt(stiffness / mass) / 1000

        /**
         * If we're working within what looks like a 0-1 range, change the default restDelta
         * to 0.01
         */
        restDelta ??= Math.abs(to - from) <= 1 ? 0.01 : 0.4

        if (dampingRatio < 1) {
            // Underdamped spring
            resolveSpring = (t: number) => {
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

            resolveVelocity = (t: number) => {
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
            resolveSpring = (t: number) => {
                const envelope = Math.exp(-angularFreq * t)
                return (
                    to -
                    envelope *
                        (initialDelta +
                            (initialVelocity + angularFreq * initialDelta) * t)
                )
            }
        } else {
            // Overdamped spring
            const dampedAngularFreq =
                angularFreq * Math.sqrt(dampingRatio * dampingRatio - 1)

            resolveSpring = (t: number) => {
                const envelope = Math.exp(-dampingRatio * angularFreq * t)
                const freqForT = Math.min(dampedAngularFreq * t, 300)
                return (
                    to -
                    (envelope *
                        ((initialVelocity +
                            dampingRatio * angularFreq * initialDelta) *
                            Math.sinh(freqForT) +
                            dampedAngularFreq *
                                initialDelta *
                                Math.cosh(freqForT))) /
                        dampedAngularFreq
                )
            }
        }
    }

    createSpring()

    return {
        next: (t: number) => {
            const current = resolveSpring(t)
            const velocity = resolveVelocity(t) * 1000
            const isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed
            const isBelowDisplacementThreshold =
                Math.abs(to - current) <= restDelta
            state.done =
                isBelowVelocityThreshold && isBelowDisplacementThreshold

            state.value = state.done ? to : current
            return state
        },
        flipTarget: () => {
            velocity = -velocity
            ;[from, to] = [to, from]
            createSpring()
        },
    }
}

spring.needsInterpolation = (a: any, b: any) =>
    typeof a === "string" || typeof b === "string"

const zero = (_t: number) => 0
