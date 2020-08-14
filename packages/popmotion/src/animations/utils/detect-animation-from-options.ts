import { SpringAnimator } from "../spring"
import { KeyframesAnimator } from "../keyframes"
import { DecayAnimator } from "../decay"

const animators = [KeyframesAnimator, SpringAnimator, DecayAnimator]
const numAnimators = animators.length

interface Options {}

export function detectAnimationFromOptions<T extends Options>(config: T) {
    for (const key in config) {
        for (let i = 0; i < numAnimators; i++) {
            const animator = animators[i]
            if ((animator.uniqueOptionKeys as any).has(key)) return animator
        }
    }
}
