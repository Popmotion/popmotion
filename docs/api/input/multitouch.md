---
title: Multitouch
description: Tracks multitouch input.
category: input
---

# Multitouch

Tracks multitouch input and outputs a list of active touches, plus scale and rotation delta between the first two touch points.

For single-point input, generally [pointer](/api/pointer) is more appropriate as it provides a simple, cross-platform interface.

## Import

```javascript
import { multitouch } from 'popmotion';
// or stand-alone:
import multitouch from 'popmotion/input/multitouch';
```

## Usage

```typescript
multitouch({
  preventDefault?: boolean = true,
  scale?: number,
  rotate?: number
})
```

```javascript
multitouch().start(({ touches, scale, rotate }) => {
  touches.forEach(({ x, y }) => console.log(x, y))
});
```

`multitouch` provides:

- `touches: { x: number, y: number }[]`: An array of `x`/`y` coordinates representing each active finger.
- `scale: number`: The distance between the first two fingers since `start`, represented as a multiplier of the original distance. `scale` starts from `1.0`, or the initially provided `scale`.
- `rotate: number`: The angle rotation of the first two fingers as a delta of the original rotation. `rotate` starts from `0.0`, or the initially provided `rotate`.

### Commonly-used properties

If you often use, for instance, `rotate`, you can easily create a new action that returns only that value:

```javascript
const touchRotation = (initialRotate = 0) => multitouch({ rotate: initialRotate })
  .pipe(({ rotate }) => rotate);

touchRotation(45).start((rotate) => console.log(rotate));
```

## Props

- `preventDefault?: boolean = true`
- `scale?: number = 1.0`
- `rotate?: number = 0.0`

## Methods

### Action methods

`multitouch()` returns:

- `filter((v: any) => boolean)`: Returns a new action that filters out values when the provided function returns `false`.
- `pipe(...funcs: Array<(v) => v)`: Returns a new action that will run `update` values through this sequence of functions.
- `start(update | { update, complete })`: Starts the action and returns a subscription.
- `while((v: any) => boolean)`: Returns a new action that will `complete` when the provided function returns `false`.

### Subscription methods

`multitouch().start()` returns:

- `stop(): void`

## Example

<CodePen id="LOBjxQ" />
