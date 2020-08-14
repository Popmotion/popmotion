import { SpringAnimator } from "../spring"
import { KeyframesAnimator } from "../keyframes"
import { DecayAnimator } from "../decay"

const animators = [KeyframesAnimator, SpringAnimator, DecayAnimator]
const types = {
    keyframes: KeyframesAnimator,
    spring: SpringAnimator,
    decay: DecayAnimator,
}
const numAnimators = animators.length

interface Options {
    type?: "decay" | "keyframes" | "spring"
}

export function detectAnimationFromOptions<T extends Options>(config: T) {
    if (types[config.type]) return types[config.type]
    for (const key in config) {
        for (let i = 0; i < numAnimators; i++) {
            const animator = animators[i]
            if ((animator.uniqueOptionKeys as any).has(key)) return animator
        }
    }
}
