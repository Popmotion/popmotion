import { spring } from "../spring"
import { keyframes } from "../keyframes"
import { decay } from "../decay"

/**
 * These are the default types of animation included with animate.
 * TODO: Consider removing decay
 */
const types = { keyframes, spring, decay }

interface Options {
    to?: any
    type?: "decay" | "keyframes" | "spring"
}

export function detectAnimationFromOptions<T extends Options>(config: T) {
    if (Array.isArray(config.to)) {
        /**
         * If to is defined as a keyframes array we want to force this to be a keyframes
         * animation. In the future it might be possible to allow spring keyframes.
         */
        return keyframes
    } else if (types[config.type]) {
        /**
         * Or if the user has explicity defined their own animation type, return that.
         */
        return types[config.type]
    }

    /**
     * Attempt to detect which animation to use based on the options provided
     */
    const keys = new Set(Object.keys(config))
    if (keys.has("ease") || keys.has("duration")) {
        return keyframes
    } else if (
        keys.has("stiffness") ||
        keys.has("mass") ||
        keys.has("damping") ||
        keys.has("restSpeed") ||
        keys.has("restDelta")
    ) {
        return spring
    }

    return keyframes
}
