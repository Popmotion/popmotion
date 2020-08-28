import {
    Animatable,
    AnimationOptions,
    Driver,
    DriverControls,
    PlaybackControls,
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

export function animate<V extends Animatable>({
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
}: AnimationOptions<V>): PlaybackControls {
    let { to } = options
    let driverControls: DriverControls
    let repeatCount = 0
    let computedDuration = (options as KeyframeOptions<V>).duration
    let latest: V
    let isComplete = false
    let isForwardPlayback = true

    let interpolateFromNumber: (t: number) => V

    const animator = detectAnimationFromOptions(options)

    if (animator.needsInterpolation(from, to as Animatable)) {
        interpolateFromNumber = interpolate([0, 100], [from, to], {
            clamp: false,
        }) as (t: number) => V
        from = 0 as V
        to = 100 as V
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
        animation.isComplete = false
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
            animation.update(Math.max(0, elapsed))
            latest = animation.current as any

            if (interpolateFromNumber)
                latest = interpolateFromNumber(latest as number)

            isComplete = isForwardPlayback ? animation.isComplete : elapsed <= 0
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
