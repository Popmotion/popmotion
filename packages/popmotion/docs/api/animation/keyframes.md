---
title: Keyframes
description: Animate through a linear sequence of values.
category: animation
---

# Keyframes

Keyframes accepts an array of values and will animate between each in sequence.

Timing is defined with a combination of `duration`, `easings` and `times` properties (see [Props](#props))

## Import

```javascript
import { keyframes } from 'popmotion';
```

## Usage

You can set the values to animate between with the `values` property. You can set as many values as you wish.

```javascript
keyframes({ values: [0, 1, 3] })
  .start(v => console.log(v))
```

The overall length of the animation can be changed via `duration`.

Each individual value can be given a progress value between `0` and `1` via the `times` array. That determines at which point during the animation it should be at the corresponding value.

Finally, and `easings` property maps to the animations between each value transition (so the length of this array is one fewer than our total number of values).

```javascript
keyframes({
  values: [0, 100, 200],
  times: [0, 0.2, 1],
  duration: 1000,
  easings: [ease.linear, ease.cubicBezier(.17,.67,.83,.67)]
})
```

### Value types

`keyframes` supports the animation of the following value types:

#### Number

```javascript
keyframes({
  values: [10, 40, 100, -100]
})
```

#### Units

**Supported**: `px`, `%`, `deg`, `vh`, and `vw`

```javascript
keyframes({
  values: ['10%', '40%', '100%', '-100%']
})
```

#### Colors

**Supported**: RGB(A), HSL(A) and Hex

```javascript
keyframes({
  values: ['#fff', '#000', '#f00']
})
keyframes({
  values: [
    'rgba(0, 200, 100, 1)',
    'rgba(60, 100, 80, 0.5)',
    'rgba(60, 100, 80, 1)'
  ]
})
keyframes({
  values: [
    'hsl(0, 50%, 50%)',
    'hsl(180, 80%, 50%)',
    'hsl(45, 60%, 60%)'
  ]
})
```

#### Combinations

Space-delimited sequences of values, useful for animating CSS shadows.

May also include arbitrary strings like `'inset'`, and supports sequences of shadows separated with a comma (e.g `'0px 0px 0px inset rgba(0, 0, 0, 0.2), 2px 2px 0px rgba(0, 0, 0, 0.2)'`)

```javascript
keyframes({
  values: [
    '0px 0px 0px inset rgba(0, 0, 0, 0.2)',
    '3px 3px 10px inset rgba(0, 0, 0, 0.5)',
    '10px 10px 20px inset rgba(0, 0, 0, 0.8)'
  ]
})
```

#### Objects

Named objects composed of any of the above types may also be animated.

```javascript
keyframes({
  values: [
    { x: 0, background: 'hsla(125, 100, 50, 1)' },
    { x: 0, background: 'hsla(20, 100, 60, 1)' },
    { x: 100, background: 'hsla(20, 100, 60, 1)' }
  ]
})
```

#### Arrays

Arrays composed of any of the above types may also be animated.

```javascript
keyframes({
  values: [
    [0, '10vh', 'hsla(125, 100, 50, 1)'],
    [1, '20vh', 'hsla(20, 100, 60, 1)'],
    [0, '40vh', 'hsla(125, 100, 50, 1)']
  ]
})
```

## Props

The following properties may be passed to `keyframes`:

### values

An array of values to animate between.

**Required**

### duration

Total duration of animation, in milliseconds.

**Default:** `300`

### easings

An array of easing functions for each generated tween, or a single easing function applied to all tweens. This array should be `values.length - 1`.

**Default** `[...easeOut]`

### times

An array of numbers between `0` and `1`, representing `0` to `duration`, that represent at which point each number should be hit. Defaults to an array of evenly-spread durations.

### elapsed

Duration of animation already elapsed, in milliseconds.

**Default:** `0`

### ease

A function, given a progress between `0` and `1`, that returns a new progress value. Used to affect the rate of playback across the duration of the **overall** animation.

**Default:** `linear`

### loop

Number of times to loop animation on `complete`. Set as `Infinity` to loop forever.

**Default:** 0

### flip

Number of times to flip animation on `complete`. Set as `Infinity` to flip forever.

**Default:** 0

### yoyo

Number of times to reverse animation on `complete`. Set as `Infinity` to reverse forever.

**Default:** 0

## Methods

### Action methods

`keyframes()` returns:

`tween()` returns:

#### start

Starts the animation and returns playback controls.

Can be provided **either** a function:

```javascript
keyframes().start(v => {})
```

Or a named map of functions for `update` and `complete`:

```javascript
keyframes().start({
  update: v => {},
  complete: () => {}
})
```

#### filter

Returns a new version of the animation, that filters out any value when the provided predicate function returns `false`:

```javascript
const filtered = keyframes().filter(v => v > 0.5)

// This animation will only output values higher than 0.5:
filtered.start(v => {})
```

#### pipe

Returns a new animation that will pass any output value through this series of functions:

```javascript
// This animation will round output values and then double them:
keyframes()
  .pipe(Math.round, v => v * 2)
  .start(v => {})
```

#### while

Returns a new animation that will `complete` when the provided predicate function returns `false`:

```javascript
// This animation will end when an output value is higher than 0.5:
keyframes().while(v => v < 0.5)
```

### Playback methods

`keyframes().start()` starts a new animation and returns the following playback methods:

#### getElapsed

Returns time elapsed in milliseconds.

#### getProgress

Returns animation progress as a value of `0`-`1`.

#### seek

Seeks animation to this position as a value of `0`-`1`.

```javascript
const playback = keyframes().start(v => {})

playback.seek(0.5)
```

#### pause

Pauses playback.

#### resume

Resumes playback.

#### reverse

Reverses the direction of playback.

#### stop

Stops the animation.

## Example

<CodePen id="JOZGdp" />
