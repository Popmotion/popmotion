import { Easing } from "../easing/types"

/**
 * The kinds of values that can currently be animated.
 */
export type Animatable = string | number

/**
 * Animators that can be resolved for time
 */
export interface Animator<O, V> {
    options: O
    update(t: number): V
    updateOptions(options: O): void
    isComplete: boolean
}

export interface PlaybackControls {
    play: () => void
    pause: () => void
    resume: () => void
    reverse: () => void
    seek: () => void
    stop: () => void
}

/**
 * An update function. It accepts a timestamp used to advance the animation.
 */
type Update = (timestamp: number) => void

/**
 * Drivers accept a update function and call it at an interval. This interval
 * could be a synchronous loop, a setInterval, or tied to the device's framerate.
 */
export interface DriverControls {
    start: () => void
    stop: () => void
}
export type Driver = (update: Update) => DriverControls

/**
 * Playback options common to all animations.
 */
export interface PlaybackOptions<V extends Animatable> {
    /**
     * Whether to autoplay the animation when animate is called. If
     * set to false, the animation must be started manually via the returned
     * play method.
     */
    autoplay?: boolean

    driver?: Driver
    elapsed?: number
    from?: V
    repeat?: number
    repeatType?: "loop" | "reverse"
    repeatDelay?: number
    onUpdate?: (latest: V) => void
    onPlay?: () => void
    onComplete?: () => void
    onRepeat?: () => void
}

export interface KeyframeOptions<V extends Animatable = number> {
    to: V | V[]
    from?: V
    duration?: number
    ease?: Easing | Easing[]
    offset?: number[]
}

export interface DecayOptions<T extends Animatable = number> {
    from?: T
    to?: T
    velocity?: number
    power?: number
    timeConstant?: number
    modifyTarget?: (target: number) => number
    restDelta?: number
}

export interface SpringOptions<T extends Animatable = number> {
    from?: T
    to?: T
    velocity?: number
    stiffness?: number
    damping?: number
    mass?: number
    restSpeed?: number
    restDelta?: number
}

export type AnimationOptions<V extends Animatable> = PlaybackOptions<V> &
    (DecayOptions<V> | KeyframeOptions<V> | SpringOptions<V>)

// /**
//  * TODO: Implement
//  */
// export interface SpringDurationOptions<V> extends PlaybackOptions<V> {
//   ratio?: number;
//   duration?: number;
// }
