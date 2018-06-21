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

### Value types

`tween` supports the animation of the following value types:

#### Number

```javascript
tween({ from: 0, to: 1 })
```

#### Units

**Supported**: `px`, `%`, `deg`, `vh`, and `vw`

```javascript
tween({ from: '0px', to: '100px' })
```

#### Colors

**Supported**: RGB(A), HSL(A) and Hex

```javascript
tween({ from: '#fff', to: '#000' })
tween({ from: 'rgba(0, 200, 100, 1)', to: 'rgba(60, 100, 80, 0.5)' })
tween({ from: 'hsl(0, 50%, 50%)', to: 'hsl(180, 80%, 50%)' })
```

#### Combinations

Space-delimited sequences of values, useful for animating CSS shadows.

May also include arbitrary strings like `'inset'`, and supports sequences of shadows separated with a comma (e.g `'0px 0px 0px inset rgba(0, 0, 0, 0.2), 2px 2px 0px rgba(0, 0, 0, 0.2)'`)

```javascript
tween({
  from: '0px 0px 0px inset rgba(0, 0, 0, 0.2)',
  to: '3px 3px 10px inset rgba(0, 0, 0, 0.5)'
})
```

#### Objects

Named objects composed of any of the above types may also be animated.

`ease` can also be set as an object, to apply property-specific [easing](/api/easing):

```javascript
tween({
  from: {
    x: 0,
    background: 'hsla(125, 100, 50, 1)'
  },
  to: {
    x: 100,
    background: 'hsla(20, 100, 60, 1)'
  },
  ease: {
    x: easeOut,
    background: linear
  }
})
```

#### Arrays

Arrays composed of any of the above types may also be animated.

`ease` can also be set as an array, to apply property-specific [easing](/api/easing):

```javascript
tween({
  from: [0, '10vh', 'hsla(125, 100, 50, 1)'],
  to: [1, '20vh', 'hsla(20, 100, 60, 1)'],
  ease: [easeOut, backOut, linear]
})
```

## Props

The following properties may be passed to `tween`:

### from

Start value of the animation.

**Default:** `0`

### to

End value of the animation.

**Default:** `1`

### duration

Total duration of animation, in milliseconds.

**Default:** `300`

### elapsed

Duration of animation already elapsed, in milliseconds.

**Default:** `0`

### ease

A function that, given a progress between `0` and `1`, will return a new progress value. Used to affect the speed of playback across the duration of the animation.

If `from` and `to` are set as objects or arrays, `ease` may be set with a corresponding structure to apply a unique easing for each animating value.

**Default:** `easeOut`

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

`tween()` returns:

#### start

Starts the animation and returns playback controls.

Can be provided **either** a function:

```javascript
tween().start(v => {})
```

Or a named map of functions for `update` and `complete`:

```javascript
tween().start({
  update: v => {},
  complete: () => {}
})
```

#### filter

Returns a new version of the animation, that filters out any value when the provided predicate function returns `false`:

```javascript
const filtered = tween().filter(v => v > 0.5)

// This animation will only output values higher than 0.5:
filtered.start(v => {})
```

#### pipe

Returns a new animation that will pass any output value through this series of functions:

```javascript
// This animation will round output values and then double them:
tween({ from: 0, to: 100 })
  .pipe(Math.round, v => v * 2)
  .start(v => {})
```

#### while

Returns a new animation that will `complete` when the provided predicate function returns `false`:

```javascript
// This animation will end when an output value is higher than 0.5:
tween().while(v => v < 0.5)
```

### Playback methods

`tween().start()` starts a new animation and returns the following playback methods:

#### getElapsed

Returns time elapsed in milliseconds.

#### getProgress

Returns animation progress as a value of `0`-`1`.

#### seek

Seeks animation to this position as a value of `0`-`1`.

```javascript
const playback = tween().start(v => {})

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

<CodePen id="WXOPWX" />
