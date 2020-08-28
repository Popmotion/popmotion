import { SpringOptions, Animation } from "./types"

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
        }
    }

    createSpring()

    const animation: Animation<number> = {
        current: from,
        isComplete: false,
        update: (t: number) => {
            const current = resolveSpring(t)
            const velocity = resolveVelocity(t) * 1000
            const isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed
            const isBelowDisplacementThreshold =
                Math.abs(to - current) <= restDelta
            animation.isComplete =
                isBelowVelocityThreshold && isBelowDisplacementThreshold

            animation.current = animation.isComplete ? to : current
            return animation.current
        },
        flipTarget: () => {
            velocity = -velocity
            ;[from, to] = [to, from]
            createSpring()
        },
    }

    return animation
}

spring.needsInterpolation = (from: any, to: any) =>
    typeof from === "string" || typeof to === "string"

const zero = (_t: number) => 0
