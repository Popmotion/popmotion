import { Animator, DecayOptions } from "./types"

export class DecayAnimator implements Animator<DecayOptions, number> {
    options: DecayOptions
    amplitude: number
    target: number
    static needsInterpolation = () => false
    isComplete = false

    constructor(options: DecayOptions) {
        this.updateOptions(options)

        const { power, velocity, modifyTarget, from } = this.options
        let amplitude = power * velocity
        const idealTarget = from + amplitude
        const target =
            typeof modifyTarget === "undefined"
                ? idealTarget
                : modifyTarget(idealTarget)
        if (target !== idealTarget) amplitude = target - from

        this.target = target
        this.amplitude = amplitude

        console.log(this.target, this.amplitude)
    }

    update(t: number) {
        const { timeConstant, restDelta } = this.options
        const delta = -this.amplitude * Math.exp(-t / timeConstant)

        this.isComplete = !(delta > restDelta || delta < -restDelta)
        return this.isComplete ? this.target : this.target + delta
    }

    updateOptions({
        velocity = 0,
        from = 0,
        power = 0.8,
        timeConstant = 350,
        restDelta = 0.5,
        modifyTarget,
    }: DecayOptions = {}) {
        this.options = {
            velocity,
            from,
            power,
            timeConstant,
            restDelta,
            modifyTarget,
        }
    }

    static uniqueOptionKeys = new Set<keyof DecayOptions>([
        "power",
        "timeConstant",
        "modifyTarget",
    ])
}
