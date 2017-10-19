---
title: Keyframes
description: Animate through a sequence of numbers.
category: animation
---

# Keyframes

Keyframes accepts an array of `values` and will animate between each in sequence.

Timing is defined with a combination of `duration`, `easing` and `times` properties (see [Methods](#methods))

It returns a [`tween`](/api/tween), which allows the use of `loop`, `flip` and `yoyo` props, as well as tween methods like `pause` and `resume`.

## Import

```javascript
import { keyframes } from 'popmotion';
// or stand-alone:
import keyframes from 'popmotion/lib/animations/keyframes';
```

## Usage

```javascript
keyframes({
  values: [0, 100, 200],
  duration: 1000,
  times: [0, 0.2, 1]
}).start((v) => console.log(v));
```

## Props

- `values: number[]`: An array of numbers to animate between.
- `duration?: number = 300`: The total duration of the animation in milliseconds.
- `ease?: Easing[]`: An array of easing functions for each generated tween. This array should be `values.length - 1`. Defaults to an array of `easeOut`.
- `times?: number[]`: An array of numbers between `0` and `1`, representing `0` to `duration`, that represent at which point each number should be hit. Defaults to an array of evenly-spread durations will be calculated.

### Tween props

As `keyframes` returns a [`tween`](/api/tween), the following properties can also be provided:

- `loop: number = 0`: Number of times to loop animation on `complete`.
- `flip: number = 0`: Number of times to flip animation on `complete`.
- `yoyo: number = 0`: Number of times to reverse tween on `complete`.

## Methods

- `getElapsed(): number`: Returns time elapsed in milliseconds.
- `getProgress(): number`: Returns animation progress as a value of `0`-`1`.
- `seek(progress: number): this`: Seeks animation to this position as a value of `0`-`1`.
- `pause(): this`
- `resume(): this`
- `reverse(): this`: Reverses the direction of playback. 
- `stop(): void`

## Example

TODO
