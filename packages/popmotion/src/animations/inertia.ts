import {
    InertiaOptions,
    PlaybackControls,
    AnimationOptions,
    SpringOptions,
} from "./types"
import { animate } from "."
import { velocityPerSecond } from "../utils/velocity-per-second"
import { getFrameData } from "framesync"

export function inertia({
    from = 0,
    velocity = 0,
    min,
    max,
    power = 0.8,
    timeConstant = 750,
    bounceStiffness = 500,
    bounceDamping = 10,
    restDelta = 1,
    modifyTarget,
    driver,
    onUpdate,
    onComplete,
}: InertiaOptions) {
    let currentAnimation: PlaybackControls

    function isOutOfBounds(v: number) {
        return (min !== undefined && v < min) || (max !== undefined && v > max)
    }

    function boundaryNearest(v: number) {
        if (min === undefined) return max
        if (max === undefined) return min

        return Math.abs(min - v) < Math.abs(max - v) ? min : max
    }

    function startAnimation(options: AnimationOptions<number>) {
        currentAnimation?.stop()

        currentAnimation = animate({
            ...options,
            driver,
            onUpdate: (v: number) => {
                onUpdate?.(v)
                options.onUpdate?.(v)
            },
            onComplete,
        })
    }

    function startSpring(options: SpringOptions) {
        startAnimation({
            type: "spring",
            stiffness: bounceStiffness,
            damping: bounceDamping,
            restDelta,
            ...options,
        })
    }

    if (isOutOfBounds(from)) {
        // Start the animation with spring if outside the defined boundaries
        startSpring({ from, velocity, to: boundaryNearest(from) })
    } else {
        /**
         * Or if the value is out of bounds, simulate the inertia movement
         * with the decay animation.
         *
         * Pre-calculate the target so we can detect if it's out-of-bounds.
         * If it is, we want to check per frame when to switch to a spring
         * animation
         */
        let target = power * velocity + from
        if (typeof modifyTarget !== "undefined") target = modifyTarget(target)
        const boundary = boundaryNearest(target)
        const heading = boundary === min ? -1 : 1
        let prev: number
        let current: number

        const checkBoundary = (v: number) => {
            prev = current
            velocity = velocityPerSecond(v - prev, getFrameData().delta)
            current = v
            if (!(boundary - v * heading > 0)) {
                startSpring({ from: current, to: boundary, velocity })
            }
        }

        startAnimation({
            type: "decay",
            from,
            velocity,
            timeConstant,
            power,
            restDelta,
            modifyTarget,
            onUpdate: isOutOfBounds(target) ? checkBoundary : undefined,
        })
    }

    return {
        stop: () => currentAnimation?.stop(),
    }
}