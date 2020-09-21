import { invariant } from "hey-listen"
import { clamp } from "../../utils/clamp"
import { mix } from "../../utils/mix"
import { spring } from "../generators/spring"
import { SpringOptions } from "../types"

export const minDampingRatio = Number.MIN_VALUE
export const maxDampingRatio = 1.0
export const minDuration = 0.01
export const maxDuration = 10000.0

const initialStiffness = 1000
const timeResolution = 50
const maxIterations = 100

/**
 * TODO: Memoize this
 * - Accept to/from/velocity/mass
 */
export function findSpring({
    duration,
    bounce = 0.9,
    from,
    to,
    velocity,
}: SpringOptions) {
    invariant(
        bounce >= minDampingRatio && bounce <= maxDampingRatio,
        `bounce set as ${bounce}: Must be a value between ${minDampingRatio} and ${maxDampingRatio}`
    )

    let dampingRatio = 1 - bounce

    dampingRatio = clamp(minDampingRatio, maxDampingRatio, dampingRatio)

    const calcDamping = createDampingCalc(dampingRatio)

    let stiffness = 0
    let damping = 0
    let hasFoundSettings: boolean
    let minStiffness = 0
    let maxStiffness = initialStiffness * 2
    let i = 0

    while (hasFoundSettings === undefined) {
        stiffness = mix(minStiffness, maxStiffness, 0.5)
        damping = calcDamping(stiffness)

        const animation = spring({
            from,
            to,
            stiffness: stiffness,
            damping: damping,
        })

        const doneAtPrevFrame = animation.next(duration - timeResolution).done
        const doneAtDurationFrame = animation.next(duration).done

        i++

        if (i > maxIterations) {
            hasFoundSettings = false
        }

        if (doneAtPrevFrame === doneAtDurationFrame) {
            const rangeSize = maxStiffness - minStiffness

            if (doneAtDurationFrame) {
                // If we need to decrease stiffness
                maxStiffness = stiffness
                minStiffness = stiffness - rangeSize / 2
            } else {
                // If we need to increase stiffness
                minStiffness = stiffness
                maxStiffness = stiffness + rangeSize * 2
            }
        } else {
            hasFoundSettings = true
        }
    }

    return {
        hasFoundSettings,
        damping,
        stiffness,
    }
}

const createDampingCalc = (dampingRatio: number) => (stiffness: number) =>
    dampingRatio * (2 * Math.sqrt(stiffness))
