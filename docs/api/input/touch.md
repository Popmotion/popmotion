---
title: Touch
description: Tracks multitouch input.
category: input
---

# Touch

Tracks multitouch input.

For single-point input, generally [pointer](/api/pointer) is more appropriate as it provides a simple, cross-platform interface.

## Import

```javascript
import { touch } from 'popmotion';
// or stand-alone:
import touch from 'popmotion/input/touch';
```

## Usage

```javascript
touch().start(({ touches, scale, rotation }) => {
  touches.forEach(({ x, y }) => console.log(x, y))
});
```

`touch` provides:

- `touches: { x: number, y: number }[]`: An array of `x`/`y` coordinates representing each active finger.
- `scale: number`: The distance between the first two fingers since `start`, represented as a multiplier of the original distance.
- `rotation: number`: The angle rotation of the first two fingers as a delta of the original rotation.

If you often used, for instance, `rotation`, you can easily create a new action that returns only that value:

```javascript
const touchRotation = touch().pipe(({ rotation }) => rotation);

touchRotation.start((rotation) => console.log(rotation));
```

## Props

- `preventDefault: boolean = true`

## Methods

### Action methods

`touch()` returns:

- `pipe(...funcs: Array<(v) => v)`: Returns a new action that will run `update` values through this sequence of functions.
- `start(update | { update, complete })`: Starts the action and returns a subscription.
- `while((v: any) => boolean)`: Returns a new action that will `complete` when the provided function returns `false`.

### Subscription methods

`touch().start()` returns:

- `stop(): void`
