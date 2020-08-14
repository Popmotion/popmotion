import { KeyframeOptions, Animator } from "./types"
import { interpolate } from "../utils/interpolate"
import { Easing } from "../easing/types"
import { easeInOut } from "../easing"

export function defaultEasing(values: any[], easing?: Easing): Easing[] {
    return values.map(() => easing || easeInOut).splice(0, values.length - 1)
}

export function defaultOffset(values: any[]): number[] {
    const numValues = values.length
    return values.map((_value: number, i: number): number =>
        i !== 0 ? i / (numValues - 1) : 0
    )
}

export function convertOffsetToTimes(offset: number[], duration: number) {
    return offset.map(o => o * duration)
}

export class KeyframesAnimator implements Animator<KeyframeOptions, any> {
    options: KeyframeOptions

    isComplete = false
    static needsInterpolation = () => false

    interpolator: (t: number) => any

    values: any[]

    constructor(options: KeyframeOptions) {
        this.updateOptions(options)

        const { from, to } = this.options
        this.values = Array.isArray(to) ? to : [from, to]
        this.createInterpolator()
    }

    private createInterpolator() {
        let { duration, ease, offset } = this.options
        ease = Array.isArray(ease) ? ease : defaultEasing(this.values, ease)
        offset = offset || defaultOffset(this.values)
        const times = convertOffsetToTimes(offset, duration)
        this.interpolator = interpolate(times, this.values, { ease })
    }

    update(t: number) {
        const { duration } = this.options
        this.isComplete = t >= duration
        return this.interpolator(t)
    }

    updateOptions({
        from = 0,
        to = 1,
        ease,
        offset,
        duration = 300,
    }: KeyframeOptions) {
        this.options = { from, to, ease, offset, duration }
    }

    flipTarget() {
        this.values.reverse()
        this.createInterpolator()
    }

    static uniqueOptionKeys = new Set<keyof KeyframeOptions<number | string>>([
        "duration",
        "ease",
    ])
}
