---
title: Pointer
description: Outputs the screen position of a single mouse or touch point.
category: input
---

# Pointer

Outputs the screen position of a single mouse or touch point.

## Import

```javascript
import { pointer } from 'popmotion';
// or stand-alone:
import pointer from 'popmotion/input/pointer';
```

## Usage

### Absolute position

```javascript
pointer()
  .start(({ x, y }) => console.log(x, y));
```

### Relative position

Provide initial `x` and `y` properties to output pointer movement **applied to this initial point**.

```javascript
pointer({ x: 200, y: 175 })
  .start(({ x, y }) => console.log(x, y));
```


Reactions are provided the following pointer data:

- `x`, `y`: Alias of `clientX` / `clientY`, or 
- `clientX`, `clientY`: Position relative to the viewport.
- `pageX`, `pageY`: Position relative to the document.

To apply the change in pointer movement to, for instance, a slider, you can use the [`deltaOffset`](/api/delta-pointer) action.

## Props

- `preventDefault: boolean = true`
- `x?: number`: If defined, apply pointer `y` movement to this number.
- `y?: number`: If defined, apply pointer `y` movement to this number.

## Methods

### Action methods

`pointer()` returns:

- `pipe(...funcs: Array<(v) => v)`: Returns a new action that will run `update` values through this sequence of functions.
- `start(update | { update, complete })`: Starts the action and returns a subscription.
- `while((v: any) => boolean)`: Returns a new action that will `complete` when the provided function returns `false`.

### Subscription methods

`pointer().start()` returns:

- `stop(): void`
