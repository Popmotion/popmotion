import { SpringOptions, Animation, AnimationState } from "../types"
import { calcAngularFreq, findSpring } from "../utils/find-spring"

/**
 * This is based on the spring implementation of Wobble https://github.com/skevy/wobble
 */
export function spring({
    from = 0.0,
    to = 1.0,
    velocity = 0.0,
    stiffness = 100,
    damping = 10,
    mass = 1.0,
    restSpeed = 2,
    restDelta,
    duration,
    bounce,
}: SpringOptions): Animation<number> {
    let isResolvedFromDuration = false

    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state: AnimationState<number> = { done: false, value: from }

    if (duration !== undefined || bounce !== undefined) {
        isResolvedFromDuration = true
        const derived = findSpring({ duration, bounce })
        stiffness = derived.stiffness
        damping = derived.damping
        velocity = 0.0
        mass = 1.0
    }

    let resolveSpring = zero
    let resolveVelocity = zero

    function createSpring() {
        const initialVelocity = velocity ? -(velocity / 1000) : 0.0
        const initialDelta = to - from
        const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass))
        const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000

        /**
         * If we're working within what looks like a 0-1 range, change the default restDelta
         * to 0.01
         */
        restDelta ??= Math.abs(to - from) <= 1 ? 0.01 : 0.4

        if (dampingRatio < 1) {
            const angularFreq = calcAngularFreq(
                undampedAngularFreq,
                dampingRatio
            )

            // Underdamped spring
            resolveSpring = (t: number) => {
                const envelope = Math.exp(
                    -dampingRatio * undampedAngularFreq * t
                )

                return (
                    to -
                    envelope *
                        (((initialVelocity +
                            dampingRatio * undampedAngularFreq * initialDelta) /
                            angularFreq) *
                            Math.sin(angularFreq * t) +
                            initialDelta * Math.cos(angularFreq * t))
                )
            }

            resolveVelocity = (t: number) => {
                // TODO Resolve these calculations with the above
                const envelope = Math.exp(
                    -dampingRatio * undampedAngularFreq * t
                )

                return (
                    dampingRatio *
                        undampedAngularFreq *
                        envelope *
                        ((Math.sin(angularFreq * t) *
                            (initialVelocity +
                                dampingRatio *
                                    undampedAngularFreq *
                                    initialDelta)) /
                            angularFreq +
                            initialDelta * Math.cos(angularFreq * t)) -
                    envelope *
                        (Math.cos(angularFreq * t) *
                            (initialVelocity +
                                dampingRatio *
                                    undampedAngularFreq *
                                    initialDelta) -
                            angularFreq *
                                initialDelta *
                                Math.sin(angularFreq * t))
                )
            }
        } else if (dampingRatio === 1) {
            // Critically damped spring
            resolveSpring = (t: number) =>
                to -
                Math.exp(-undampedAngularFreq * t) *
                    (initialDelta +
                        (initialVelocity + undampedAngularFreq * initialDelta) *
                            t)
        } else {
            // Overdamped spring
            const dampedAngularFreq =
                undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1)

            resolveSpring = (t: number) => {
                const envelope = Math.exp(
                    -dampingRatio * undampedAngularFreq * t
                )

                // When performing sinh or cosh values can hit Infinity so we cap them here
                const freqForT = Math.min(dampedAngularFreq * t, 300)

                return (
                    to -
                    (envelope *
                        ((initialVelocity +
                            dampingRatio * undampedAngularFreq * initialDelta) *
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

            if (!isResolvedFromDuration) {
                const currentVelocity = resolveVelocity(t) * 1000
                const isBelowVelocityThreshold =
                    Math.abs(currentVelocity) <= restSpeed
                const isBelowDisplacementThreshold =
                    Math.abs(to - current) <= restDelta
                state.done =
                    isBelowVelocityThreshold && isBelowDisplacementThreshold
            } else {
                state.done = t >= duration
            }

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
