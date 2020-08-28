import { SpringAnimator } from "../spring"
import { KeyframesAnimator } from "../keyframes"
import { DecayAnimator } from "../decay"
import { AnimationOptions } from "../types"

const animators = [KeyframesAnimator, DecayAnimator, SpringAnimator]
const types = {
    keyframes: KeyframesAnimator,
    spring: SpringAnimator,
    decay: DecayAnimator,
}
const numAnimators = animators.length

export function detectAnimationFromOptions<V extends Animatable>(
    config: AnimationOptions<V>
) {
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
