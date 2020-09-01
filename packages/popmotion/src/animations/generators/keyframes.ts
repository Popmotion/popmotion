import {
    Animation,
    AnimationState,
    KeyframeOptions,
    Animatable,
} from "../types"
import { interpolate } from "../../utils/interpolate"
import { Easing } from "../../easing/types"
import { easeInOut } from "../../easing"

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
    return offset.map((o) => o * duration)
}

export function keyframes<V extends Animatable>({
    from = 0,
    to = 1,
    ease,
    offset,
    duration = 300,
}: KeyframeOptions): Animation<number | string> {
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state: AnimationState<typeof from> = { done: false, value: from }

    /**
     * Convert values to an array if they've been given as from/to options
     */
    const values = Array.isArray(to) ? to : [from, to]

    /**
     * Create a times array based on the provided 0-1 offsets
     */
    const times = convertOffsetToTimes(
        offset ?? defaultOffset(values),
        duration
    )

    function createInterpolator() {
        return interpolate(times, values, {
            ease: Array.isArray(ease) ? ease : defaultEasing(values, ease),
        })
    }

    let interpolator = createInterpolator()

    return {
        next: (t: number) => {
            state.value = interpolator(t) as V
            state.done = t >= duration
            return state
        },
        flipTarget: () => {
            values.reverse()
            interpolator = createInterpolator()
        },
    }
}
