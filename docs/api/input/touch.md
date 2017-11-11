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
touch({ preventDefault: true })
  .start((touches) => touches.forEach(({ x, y }) => console.log(x, y)));
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
