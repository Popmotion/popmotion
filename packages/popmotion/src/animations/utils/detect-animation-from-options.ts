import { SpringAnimator } from "../spring"
import { KeyframesAnimator } from "../keyframes"
import { DecayAnimator } from "../decay"

const animators = [KeyframesAnimator, DecayAnimator, SpringAnimator]
const types = {
    keyframes: KeyframesAnimator,
    spring: SpringAnimator,
    decay: DecayAnimator,
}
const numAnimators = animators.length

interface Options {
    to?: string | number | string[] | number[]
    type?: "decay" | "keyframes" | "spring"
}

export function detectAnimationFromOptions<T extends Options>(config: T) {
    if (Array.isArray(config.to)) {
        /**
         * If to is defined as a keyframes array we want to force this to be a keyframes
         * animation. In the future it might be possible to allow spring keyframes.
         */
        return KeyframesAnimator
    } else if (types[config.type]) {
        /**
         * Or if the user has explicity defined their own animation type, return that.
         */
        return types[config.type]
    }

    for (const key in config) {
        for (let i = 0; i < numAnimators; i++) {
            const animator = animators[i]
            if ((animator.uniqueOptionKeys as any).has(key)) return animator
        }
    }

    return KeyframesAnimator
}
