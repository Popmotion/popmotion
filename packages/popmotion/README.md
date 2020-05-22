# <a href="https://popmotion.io"><img src="https://cloud.githubusercontent.com/assets/7850794/21642571/1910a15e-d27b-11e6-84c7-19e88e207c14.png" height="52" width="243" alt="Popmotion" /></a>

### The animators toolbox

[![npm version](https://img.shields.io/npm/v/popmotion.svg?style=flat-square)](https://www.npmjs.com/package/popmotion)
[![npm downloads](https://img.shields.io/npm/dm/popmotion.svg?style=flat-square)](https://www.npmjs.com/package/popmotion)
[![Twitter Follow](https://img.shields.io/twitter/follow/popmotionjs.svg?style=social&label=Follow)](http://twitter.com/popmotionjs)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/popmotion)

This is the **beta** branch of Popmotion 9. The focus on this release is small, flexible functions for advanced animators.

# Contents

- [Install](#Install)
- [API](#API)
  - [Animation](#Animation)
  - [Easing](#Easing)
  - [Utils](#Utils)

# Install

```bash
npm install popmotion@beta
```

# API

## Animation

### `animate`

`animate` performs a keyframes, spring, or decay animation.

```javascript
import { animate } from "popmotion"

animate({
  from: 0, 
  to: 100,
  onUpdate: latest => console.log(latest)
})
```

It can animate numbers:

```javascript
animate({ from: 0, to: 100 })
```

Strings of the same type:

```javascript
animate({ from: "0px", to: "100px" })
animate({ from: "#fff", to: "#000" })
```

Arrays of the above:

```javascript
animate({
  from: [0, "#fff"],
  to: [100, "#000"]
})
```

And objects of the above:

```javascript
animate({
  from: { x: 0, backgroundColor: "#fff" },
  to: { x: 100, backgroundColor: "#000" }
})
```

The type of animation performed will be automatically detected from the provided options.

### `AnimationOptions`

These options can be set for **all animations**:

#### `elapsed`

Sets an initial elapsed time, in milliseconds. Set to a negative value for a delay.

```javascript
animate({
  to: 100,
  elapsed: -300
})
```

#### `repeat`

The number of times to repeat the animation. Set to `Infinity` to repeat forever.

```javascript
animate({
  to: 100,
  repeat: 2
})
```

#### `repeatDelay`

The duration, in milliseconds, to wait before repeating the animation.

```javascript
animate({
  to: 100,
  repeat: 2,
  repeatDelay: 200
})
```

#### `repeatType`

Either `"loop"` or `"reverse"`. Defaults to `"loop"`.

- `"loop"`: Repeats the animation from `0`.
- `"reverse":` Reverses the animation alternatively.

```javascript
animate({
  to: 100,
  repeat: 2,
  repeatType: "reverse"
})
```

#### `driver`

By default, the animation will be driven by a `requestAnimationFrame` loop. `driver` can specify a different source.

A `Driver` is a function that accepts the animations `update` function. This is a function that can be called with a time delta from the previous frame. The `Driver` must return a function that will be called when the animation is stopped.

```javascript
const xrDriver = session => update => {
  let latestRequestId = 0
  let prevTimestamp = performance.now()
  
  const step = timestamp => {
    const delta = timestamp - prevTimestamp
    prevTimestamp = timestamp

    update(delta)

    latestRequestId = session.requestAnimationFrame(step)
  }

  let latestRequestId = session.requestAnimationFrame(step)

  return () => session.cancelRequestAnimationFrame(latestRequestId)
}

animate({
  to: 100,
  driver: xrDriver(xrSession)
})
```

### `AnimationCallbacks`

These callbacks can be set for **all animations**:

#### `onUpdate`

This is called every frame the animation fires with the latest computed value.

```javascript
animate({
  to: 100,
  onUpdate: latest => console.log(latest)
})
```

#### `onPlay`

This is called when the animation starts. Currently this automatically when `animate` is called.

```javascript
animate({
  to: 100,
  onPlay: () => {}
})
```

#### `onComplete`

This is called when the animation successfully completes.

```javascript
animate({
  to: 100,
  onComplete:() => {}
})
```

#### `onRepeat`

This is called when an animation repeats.

```javascript
animate({
  to: 100,
  repeat: 2,
  onRepeat: () => {}
})
```

### `KeyframeOptions`

A keyframes animation is the default animation and it can be defined either with a `from` and `to` option:

```javascript
animate({ from: 0, to: 100 })
```

Or as a series of keyframes provided to the `to` option:

```javascript
animate({ to: [0, 100, 200] })
```

#### `duration`

This defines the duration of the animation, in milliseconds.

```javascript
animate({
  to: 100,
  duration: 300
})
```

#### `ease`

This is an easing function, or array of functions, to use when easing between each keyframe.

```javascript
import { animate, linear, easeInOut } from "popmotion"

animate({
  to: 100,
  ease: linear
})

animate({
  to: ["#fff", "#000", "#f00"],
  ease: [linear, easeInOut]
})
```

#### `offsets`

This is an array of values between `0` and `1` that defines at which point throughout the animation each keyframe should be reached.

This array should be the same length as the number of defined keyframes.

```javascript
animate({
  to: ["#fff", "#000", "#f00"],
  offsets: [0, 0.2, 1]
})
```

### `SpringOptions`

### `InertiaOptions`

### `PlaybackControls`

`animate` returns `PlaybackControls`, which can be used to control the playback of the animation.

#### `stop()`

Stops the animation.

```javascript
const playback = animate({ from: 0, to: 100 })
playback.stop()
```

## Easing

### Functions

#### ``

### Factories

## Utils

