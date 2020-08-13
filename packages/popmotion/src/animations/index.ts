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

const framesync: Driver = update => {
    const passTimestamp = ({ delta }: FrameData) => update(delta)

    return {
        start: () => sync.update(passTimestamp, true, true),
        stop: () => cancelSync.update(passTimestamp),
    }
}

export function animate<V extends Animatable>({
    from,
    to,
    autoplay = true,
    driver = framesync,
    elapsed = 0,
    repeat: repeatMax = 0,
    repeatType = "loop",
    repeatDelay = 0,
    onPlay,
    onComplete,
    onRepeat,
    onUpdate,
    ...options
}: AnimationOptions<V>): PlaybackControls {
    let driverControls: DriverControls
    let repeatCount = 0
    let computedDuration = (options as KeyframeOptions<V>).duration
    let isForwardPlayback = true

    let interpolateFromNumber: (t: number) => V

    const Animator = detectAnimationFromOptions(options)

    if (Animator.needsInterpolation) {
        interpolateFromNumber = interpolate([0, 100], [from, to], {
            clamp: false,
        }) as (t: number) => V
        from = 0 as V
        to = 100 as V
    }

    const animation = new Animator({ ...options, from, to } as any)

    function repeat() {
        if (repeatCount === 0 && computedDuration === undefined) {
            computedDuration = elapsed
        }

        repeatCount++

        const remainder = elapsed - computedDuration

        if (repeatType === "loop") {
            elapsed = remainder
        } else {
            elapsed = computedDuration - remainder
            isForwardPlayback = repeatCount % 2 === 0
        }

        onRepeat && onRepeat()
    }

    function complete() {
        driverControls.stop()
        onComplete && onComplete()
    }

    function update(delta: number) {
        if (!isForwardPlayback) delta = -delta

        elapsed += delta

        let latest = animation.update(elapsed)

        if (interpolateFromNumber) {
            latest = interpolateFromNumber(latest)
        }

        onUpdate(latest)

        const isComplete = isForwardPlayback
            ? animation.isComplete
            : elapsed <= 0

        if (isComplete) {
            repeatCount < repeatMax ? repeat() : complete()
        }
    }

    function play() {
        onPlay && onPlay()
        driverControls = driver(update)
        driverControls.start()
    }

    autoplay && play()

    return {
        play,
        pause: () => {},
        resume: () => {},
        reverse: () => {},
        seek: () => {},
        stop: () => driverControls.stop(),
    }
}
