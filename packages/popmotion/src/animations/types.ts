import { Easing } from "../easing/types"

/**
 * The kinds of values that can currently be animated.
 */
export type Animatable = string | number

export interface Animation<V extends Animatable> {
    current: V
    isComplete: boolean
    update: (t: number) => void
    flipTarget: () => void
}

export interface PlaybackControls {
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
    repeatType?: "loop" | "reverse" | "mirror"
    repeatDelay?: number
    type?: "spring" | "decay" | "keyframes"
    onUpdate?: (latest: V) => void
    onPlay?: () => void
    onComplete?: () => void
    onRepeat?: () => void
    onStop?: () => void
}

export interface KeyframeOptions<V extends Animatable = number> {
    to: V | V[]
    from?: V
    duration?: number
    ease?: Easing | Easing[]
    offset?: number[]
}

export interface DecayOptions {
    from?: number
    to?: number
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

export interface InertiaOptions extends DecayOptions {
    bounceStiffness?: number
    bounceDamping?: number
    min?: number
    max?: number
    restSpeed?: number
    restDelta?: number
    driver?: Driver
    onUpdate?: (v: number) => void
    onComplete?: () => void
}

export type AnimationOptions<V extends Animatable> = PlaybackOptions<V> &
    (DecayOptions | KeyframeOptions<V> | SpringOptions<V>)

// /**
//  * TODO: Implement
//  */
// export interface SpringDurationOptions<V> extends PlaybackOptions<V> {
//   ratio?: number;
//   duration?: number;
// }
