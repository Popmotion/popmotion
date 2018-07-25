---
title: Timeline
description: Sequence a multitrack animation with full playback controls.
category: animation
---

# Timeline

Timeline is used to script complex sequences of animation, split across independent tracks.

If offers all the same playback options as a [`tween`](/api/tween).

<TOC />

## Import

```javascript
import { timeline } from 'popmotion';
```

## Usage

### Create a sequence of animations

`timeline` accepts an array of playhead instructions.

A playhead instruction can be an animation, array of animations for parallel or staggered execution, or a timestamp.

#### Animation

Each animation is defined as an object. This looks a lot like a simplified `tween`, with `from`, `to`, `duration` and `ease` properties:

```javascript
timeline([
  { track: 'x', from: 0, to: 300, duration: 1000 }
])
```

There's a **required** property called `track`. No two animations should overlap that share the same `track` label, and `timeline` will output every track to the function given to `start` together as an object:

```javascript
timeline([
  { track: 'x', from: 0, to: 300, duration: 1000 }
]).start(v => console.log(v.x))
```

#### Sequencing

If we provide a second animation, it will (by default) play **after** the first:

```javascript
timeline([
  { track: 'x', from: 0, to: 300, duration: 1000 },
  { track: 'y', from: 0, to: 300 }
])
```

In this example animation, the second animation will start after `1000` milliseconds, as that's when the first ends (as defined by `duration`).

#### Timestamps

We can, however, move the playhead from that default position. If we provide a number as the next instruction, the playhead will move to that position.

In this example, the second animation will start after `500` milliseconds:

```javascript
timeline([
  { track: 'x', from: 0, to: 300, duration: 1000 },
  500,
  { track: 'y', from: 0, to: 300 }
])
```

If we instead provide a string, we can move the playhead **relative** to the current timestamp with either `'-'` or `'+'` instructions. For instance, this time the second animation will start after `800` milliseconds:

```javascript
timeline([
  { track: 'x', from: 0, to: 300, duration: 1000 },
  '-200',
  { track: 'y', from: 0, to: 300 }
])
```

#### Parallel and stagger

Animations can be played in parallel, from the same point in time, by providing them in an array.

In this example, both animations provided after the first animation will play after `1000`ms:

```javascript
timeline([
  { track: 'x', from: 0, to: 300, duration: 1000 },
  [
    { track: 'x', to: 0 },
    { track: 'y', from: 0, to: 300 }
  ]
])
```

If we provide a number as the last item in the array, `timeline` will stagger over all the other items in the array with this delay:

```javascript
timeline([
  { track: 'x', from: 0, to: 300, duration: 1000 },
  [
    { track: 'x', to: 0 },
    { track: 'y', from: 0, to: 300 },
    50
  ]
])
```

### Value types

`timeline` supports the animation of the following value types:

#### Number

```javascript
timeline([
  { track: 'x', from: 0, to: 100 }
])
```

#### Units

**Supported**: `px`, `%`, `deg`, `vh`, and `vw`

```javascript
timeline([
  { track: 'x', from: '0%', to: '100%' }
])
```

#### Colors

**Supported**: RGB(A), HSL(A) and Hex

```javascript
timeline([
  { track: 'backgroundColor', from: '#fff', to: '#f00' }
])
```

#### Complex

Complex sequences of values, like SVG path definitions, CSS shadows and background gradients.

The non-numerical portions of these values must stay in the same format in the `from` and `to` props.

```javascript
timeline([
  {
    track: 'boxShadow',
    from: '0px 0px 0px inset rgba(0, 0, 0, 0.2)',
    to: '3px 3px 10px inset rgba(0, 0, 0, 0.5)'
  }
])
```

#### Objects

Named objects composed of any of the above types may also be animated.

```javascript
timeline([
  {
    track: 'ball',
    from: {
      backgroundColor: '#f00',
      x: 0
    },
    to: {
      backgroundColor: '#fff',
      x: 100
    }
  }
])
```

#### Arrays

Arrays composed of any of the above types may also be animated.

```javascript
timeline([
  {
    track: 'ball',
    from: [0, '10vh'],
    to: [0, '0vh']
  }
])
```

## Props

The following props can be passed as the second argument to timeline:

```javascript
timeline(playlist, props)
```

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

`timeline()` returns:

#### start

Starts the animation and returns playback controls.

Can be provided **either** a function:

```javascript
timeline().start(v => {})
```

Or a named map of functions for `update` and `complete`:

```javascript
timeline().start({
  update: v => {},
  complete: () => {}
})
```

#### filter

Returns a new version of the animation, that filters out any value when the provided predicate function returns `false`:

```javascript
const filtered = timeline().filter(v => v.x > 0.5)

// This animation will only output values higher than 0.5:
filtered.start(v => {})
```

#### pipe

Returns a new animation that will pass any output value through this series of functions:

```javascript
timeline()
  .pipe(v => v)
  .start(v => {})
```

#### while

Returns a new animation that will `complete` when the provided predicate function returns `false`:

```javascript
// This animation will end when an output value is higher than 0.5:
timeline().while(v => v.x < 0.5)
```

### Playback methods

`timeline().start()` starts a new animation and returns the following playback methods:

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