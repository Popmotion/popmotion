import { DecayOptions, Animation } from "./types"

export function decay({
    velocity = 0,
    from = 0,
    power = 0.8,
    timeConstant = 350,
    restDelta = 0.5,
    modifyTarget,
}: DecayOptions): Animation<number> {
    let amplitude = power * velocity
    const idealTarget = from + amplitude
    const target =
        typeof modifyTarget === "undefined"
            ? idealTarget
            : modifyTarget(idealTarget)
    if (target !== idealTarget) amplitude = target - from

    const animation: Animation<number> = {
        current: from,
        isComplete: false,
        update: (t) => {
            const delta = -amplitude * Math.exp(-t / timeConstant)
            animation.isComplete = !(delta > restDelta || delta < -restDelta)
            animation.current = animation.isComplete ? target : target + delta
        },
        flipTarget: () => {},
    }

    return animation
}

decay.needsInterpolation = () => false
