import {
    AnimationOptions,
    Driver,
    DriverControls,
    KeyframeOptions,
} from "./types"
import { detectAnimationFromOptions } from "./utils/detect-animation-from-options"
import sync, { cancelSync, FrameData } from "framesync"
import { interpolate } from "../utils/interpolate"
import {
    loopElapsed,
    reverseElapsed,
    hasRepeatDelayElapsed,
} from "./utils/elapsed"

const framesync: Driver = (update) => {
    const passTimestamp = ({ delta }: FrameData) => update(delta)

    return {
        start: () => sync.update(passTimestamp, true, true),
        stop: () => cancelSync.update(passTimestamp),
    }
}

export function animate<V = number>({
    from,
    autoplay = true,
    driver = framesync,
    elapsed = 0,
    repeat: repeatMax = 0,
    repeatType = "loop",
    repeatDelay = 0,
    onPlay,
    onStop,
    onComplete,
    onRepeat,
    onUpdate,
    ...options
}: AnimationOptions<V>) {
    let { to } = options
    let driverControls: DriverControls
    let repeatCount = 0
    let computedDuration = (options as KeyframeOptions<V>).duration
    let latest: V
    let isComplete = false
    let isForwardPlayback = true

    let interpolateFromNumber: (t: number) => V

    const animator = detectAnimationFromOptions(options)

    if ((animator as any).needsInterpolation?.(from, to)) {
        interpolateFromNumber = interpolate([0, 100], [from, to], {
            clamp: false,
        }) as (t: number) => V
        from = 0 as any
        to = 100 as any
    }

    const animation = animator({ ...options, from, to } as any)

    function repeat() {
        repeatCount++

        if (repeatType === "reverse") {
            isForwardPlayback = repeatCount % 2 === 0
            elapsed = reverseElapsed(
                elapsed,
                computedDuration,
                repeatDelay,
                isForwardPlayback
            )
        } else {
            elapsed = loopElapsed(elapsed, computedDuration, repeatDelay)
            if (repeatType === "mirror") animation.flipTarget()
        }

        isComplete = false
        onRepeat && onRepeat()
    }

    function complete() {
        driverControls.stop()
        onComplete && onComplete()
    }

    function update(delta: number) {
        if (!isForwardPlayback) delta = -delta

        elapsed += delta

        if (!isComplete) {
            const state = animation.next(Math.max(0, elapsed))
            latest = state.value as any

            if (interpolateFromNumber)
                latest = interpolateFromNumber(latest as any)

            isComplete = isForwardPlayback ? state.done : elapsed <= 0
        }

        onUpdate?.(latest)

        if (isComplete) {
            if (repeatCount === 0) computedDuration ??= elapsed

            if (repeatCount < repeatMax) {
                hasRepeatDelayElapsed(
                    elapsed,
                    computedDuration,
                    repeatDelay,
                    isForwardPlayback
                ) && repeat()
            } else {
                complete()
            }
        }
    }

    function play() {
        onPlay?.()
        driverControls = driver(update)
        driverControls.start()
    }

    autoplay && play()

    return {
        stop: () => {
            onStop?.()
            driverControls.stop()
        },
    }
}
