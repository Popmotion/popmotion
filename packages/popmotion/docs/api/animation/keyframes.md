---
title: Keyframes
description: Animate through a sequence of states.
category: animation
---

# Keyframes

Keyframes accepts an array of `values` and will animate between each in sequence.

Timing is defined with a combination of `duration`, `easings` and `times` properties (see [Methods](#methods))

It returns a [`tween`](/api/tween), which allows the use of `ease`, `loop`, `flip` and `yoyo` props, as well as tween methods like `pause` and `resume`.

## Import

```javascript
import { keyframes } from 'popmotion';
```

## Usage

`keyframes` accepts numbers:

```javascript
keyframes({
  values: [0, 100, 200],
  duration: 1000,
  times: [0, 0.2, 1],
  easings: [ease.linear, ease.cubicBezier(.17,.67,.83,.67)]
}).start((v) => console.log(v));
```

Colors:

```javascript
keyframes({
  values: ['#f00', '#e533a1', 'rgba(0, 0, 0, 0)']
})
```

Objects:

```javascript
keyframes({
  values: [
    {
      x: 100,
      background: '#f00'
    },
    {
      x: 200,
      background: '#000'
    }
  ]
});
```

And arrays:

```javascript
keyframes({
  values: [
    [0, 100, 300],
    [100, 45, 0]
  ]
})
```

## Props

- `values: number[]`: An array of numbers to animate between.
- `duration?: number = 300`: Total duration of animation, in milliseconds.
- `easings?: Easing | Easing[]`: An array of easing functions for each generated tween, or a single easing function applied to all tweens. This array should be `values.length - 1`. Defaults to `easeOut`.
- `times?: number[]`: An array of numbers between `0` and `1`, representing `0` to `duration`, that represent at which point each number should be hit. Defaults to an array of evenly-spread durations will be calculated.
- `elapsed?: number = 0`: Duration of animation already elapsed, in milliseconds.
- `ease?: Easing | Vector[Easing] = easeOut`: A function, given a progress between `0` and `1`, that returns a new progress value. Used to affect the rate of playback across the duration of the animation.
- `loop?: number = 0`: Number of times to loop animation on `complete`.
- `flip?: number = 0`: Number of times to flip animation on `complete`.
- `yoyo?: number = 0`: Number of times to reverse tween on `complete`.

### Tween props

As `keyframes` returns a [`tween`](/api/tween), the following properties can also be provided:

- `loop: number = 0`: Number of times to loop animation on `complete`.
- `flip: number = 0`: Number of times to flip animation on `complete`.
- `yoyo: number = 0`: Number of times to reverse tween on `complete`.

## Methods

### Action methods

`keyframes()` returns:

- `filter((v: any) => boolean)`: Returns a new action that filters out values when the provided function returns `false`.
- `pipe(...funcs: Array<(v) => v)`: Returns a new action that will run `update` values through this sequence of functions.
- `start(update | { update, complete })`: Starts the action and returns a subscription.
- `while((v: any) => boolean)`: Returns a new action that will `complete` when the provided function returns `false`.

### Subscription methods

`keyframes().start()` returns:

- `getElapsed(): number`: Returns time elapsed in milliseconds.
- `getProgress(): number`: Returns animation progress as a value of `0`-`1`.
- `seek(progress: number): this`: Seeks animation to this position as a value of `0`-`1`.
- `pause(): this`
- `resume(): this`
- `reverse(): this`: Reverses the direction of playback. 
- `stop(): void`

## Example

<CodePen id="JOZGdp" />
