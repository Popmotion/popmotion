---
title: Tween
description: Animate between two values over a set duration of time.
category: animation
---

# Tween

Animate between two values over a set duration of time.

The behaviour and feel of the animation can be affected by providing a different [easing](/api/easing) function.

## Import

```javascript
import { tween } from 'popmotion';
// or stand-alone:
import tween from 'popmotion/animations/tween';
```

## Usage

By default, `tween` will tween from `0` to `1` over `300` milliseconds, with `easeOut` easing.

```javascript
tween()
  .start((v) => console.log(v));
```

Pass props to adjust the character of the tween:

```javascript
tween({ to: 200, duration: 500 })
  .start((v) => console.log(v));
```

`from`, `to` and `ease` can also be defined as `Vectors`, which are either a map or array of numbers:

```javascript
tween({
  from: { x: 124, y: 200 },
  to: 0, // Both x and y will tween to 0
  ease: { x: easing.easeOut, y: easing.easeIn }
})
```

```javascript
tween({
  from: [0, 5, 20],
  to: [100, 200, 300],
  ease: easing.linear
})
```

`tween` also supports colors:

```javascript
tween({ from: '#000', to: 'rgba(255, 0, 0, 0.5)' })
```

Colors can also be provided to arrays or objects:

```javascript
tween({
  from: {
    x: 0,
    background: 'hsla(125, 100, 50, 1)'
  },
  to: {
    x: 100,
    background: 'hsla(20, 100, 60, 1)'
  }
})
```

## Props

- `from: number | Vector[number] = 0`: Start value of animation.
- `to: number | Vector[number] = 1`: End value of animation.
- `duration: number = 300`: Total duration of animation, in milliseconds.
- `elapsed: number = 0`: Duration of animation already elapsed, in milliseconds.
- `ease: Easing | Vector[Easing] = easeOut`: A function, given a progress between `0` and `1`, that returns a new progress value. Used to affect the rate of playback across the duration of the animation.
- `loop: number = 0`: Number of times to loop animation on `complete`.
- `flip: number = 0`: Number of times to flip animation on `complete`.
- `yoyo: number = 0`: Number of times to reverse tween on `complete`.

## Methods

### Action methods

`tween()` returns:

- `filter((v: any) => boolean)`: Returns a new action that filters out values when the provided function returns `false`.
- `pipe(...funcs: Array<(v) => v)`: Returns a new action that will run `update` values through this sequence of functions.
- `start(update | { update, complete })`: Starts the tween and returns a subscription.
- `while((v: any) => boolean)`: Returns a new action that will `complete` when the provided function returns `false`.


### Subscription methods

`tween().start()` returns:

- `getElapsed(): number`: Returns time elapsed in milliseconds.
- `getProgress(): number`: Returns animation progress as a value of `0`-`1`.
- `seek(progress: number): this`: Seeks animation to this position as a value of `0`-`1`.
- `pause(): this`
- `resume(): this`
- `reverse(): this`: Reverses the direction of playback. 
- `stop(): void`

## Example

<CodePen id="WXOPWX" />
