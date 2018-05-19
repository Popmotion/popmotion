---
title: Timeline
description: Sequence a multitrack animation with full playback controls.
category: animation
---

# Timeline

Timeline is used to quickly script complex sequences of animation, split across independent tracks.

It returns a [`tween`](/api/tween), which allows the use of `loop`, `flip` and `yoyo` props, as well as tween methods like `pause` and `resume`.

## Import

```javascript
import { timeline } from 'popmotion';
```

## Usage

### Create a sequence of animations

`timeline` accepts an array of playhead instructions.

A playhead instruction can either be an:
- Animation
- Absolute or relative timestamp
- Array of animations

#### Animation

Each animation is defined as an object. This looks a lot like a simplified `tween`, with `from`, `to`, `duration` and `ease` properties:

```javascript
timeline([
  { track: 'ballX', from: 0, to: 300, duration: 1000 }
])
```

There's an extra, non-optional property called `track`. No two animations should overlap on the same `track`, and `timeline` will output every track to the reaction given to `start`:

```javascript
timeline([
  { track: 'ballX', from: 0, to: 300, duration: 1000 }
]).start((v) => console.log(v.ballX))
```

If we provide a second animation, it will (by default) play **after** the first:

```javascript
timeline([
  { track: 'ballX', from: 0, to: 300, duration: 1000 },
  { track: 'ballY', from: 0, to: 300 }
])
```

In this example animation, the second animation will start after `1000` milliseconds, as that's when the first ends (as defined by `duration`).

#### Timestamps

We can, however, move the playhead from that default position. If we provide a number as the next instruction, the playhead will move to that position.

In this example, the second animation will start after `500` milliseconds:

```javascript
timeline([
  { track: 'ballX', from: 0, to: 300, duration: 1000 },
  500,
  { track: 'ballY', from: 0, to: 300 }
])
```

If we instead provide a string, we can move the playhead **relative** to the current timestamp with either `'-'` or `'+'` instructions. For instance, this time the second animation will start after `800` milliseconds:

```javascript
timeline([
  { track: 'ballX', from: 0, to: 300, duration: 1000 },
  '-200',
  { track: 'ballY', from: 0, to: 300 }
])
```

#### Parallel and stagger

Animations can be played in parallel, from the same point in time, by providing them in an array.

In this example, both animations provided after the first animation will play after `1000`ms:

```javascript
timeline([
  { track: 'ballX', from: 0, to: 300, duration: 1000 },
  [
    { track: 'ballX', to: 0 },
    { track: 'ballY', from: 0, to: 300 }
  ]
])
```

If we provide a number as the last item in the array, `timeline` will stagger over all the other items in the array with this delay:

```javascript
timeline([
  { track: 'ballX', from: 0, to: 300, duration: 1000 },
  [
    { track: 'ballX', to: 0 },
    { track: 'ballY', from: 0, to: 300 },
    50
  ]
])
```

#### Colors and multiprops

`timeline` can animate colors:

```javascript
{ track: 'ballBackgroundColor', from: '#f00', to: '#fff' }
```

Objects:

```javascript
{ track: 'ball', from: 0, to: { x: 300, y: 300 } }
```

And n-dimensional arrays:

```javascript
{ track: 'foo', from: [300, 500], to: [0, 0] }
```

### Types

```typescript
type Value = number | string | (number | string)[] | { [key: string]: number | string };

type AnimationDefinition = {
  track?: string,
  from?: Value = 0,
  to?: Value = 1,
  ease?: EasingFunction = easeOut,
  duration?: number = 300
};

type Instruction = string | number | AnimationDefinition | AnimationDefinition[];

timeline(instructions: Instruction, props: Props): Action
```

## Props

These can be passed as the second argument to `timeline` and are used to define the behaviour of the master playhead.

- `duration?: number`: Total duration of animation, in milliseconds. By default, this is calculated by the instructions provided to `timeline`, but if manually overridden will rescale the whole animation.
- `elapsed?: number = 0`: Duration of animation already elapsed, in milliseconds.
- `ease?: Easing | Vector[Easing] = linear`: A function, given a progress between `0` and `1`, that returns a new progress value. Used to affect the rate of playback across the duration of the animation.
- `loop?: number = 0`: Number of times to loop animation on `complete`.
- `flip?: number = 0`: Number of times to flip animation on `complete`.
- `yoyo?: number = 0`: Number of times to reverse tween on `complete`.

## Methods

### Action methods

`timeline()` returns:

- `filter((v: any) => boolean)`: Returns a new action that filters out values when the provided function returns `false`.
- `pipe(...funcs: Array<(v) => v)`: Returns a new action that will run `update` values through this sequence of functions.
- `start(update | { update, complete })`: Starts the tween and returns a subscription.
- `while((v: any) => boolean)`: Returns a new action that will `complete` when the provided function returns `false`.


### Subscription methods

`timeline().start()` returns:

- `getElapsed(): number`: Returns time elapsed in milliseconds.
- `getProgress(): number`: Returns animation progress as a value of `0`-`1`.
- `seek(progress: number): this`: Seeks animation to this position as a value of `0`-`1`.
- `pause(): this`
- `resume(): this`
- `reverse(): this`: Reverses the direction of playback. 
- `stop(): void`
