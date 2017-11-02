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

```javascript
pointer({ preventDefault: true })
  .start(({ x, y }) => console.log(x, y));
```

Reactions are provided the following pointer data:

- `x`, `y`: Alias of `clientX` / `clientY`
- `clientX`, `clientY`: Position relative to the viewport.
- `pageX`, `pageY`: Position relative to the document.

To apply the change in pointer movement to, for instance, a slider, you can use the [`deltaOffset`](/api/delta-pointer) action.

## Props

- `preventDefault: boolean = true`

## Methods

- `stop(): void`
