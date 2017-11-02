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

To apply the change in pointer movement to, for instance, a slider, you can use the `applyOffset` [transformer](/api/transformers):

```javascript
let sliderPos = 0;

const beginScroll = () => {
  const sliderPos = pointer()
    .pipe(
      ({ x }) => x,
      applyOffset(sliderPos)
    )
    .start((v) => sliderPos = v);
};

document.addEventListener('touchscroll', beginScroll);
document.addEventListener('mousedown', beginScroll);
```

Reactions are provided the following pointer data:

- `x`, `y`: Alias of `clientX` / `clientY`
- `clientX`, `clientY`: Position relative to the viewport.
- `pageX`, `pageY`: Position relative to the document.

## Props

- `preventDefault: boolean = true`

## Methods

- `stop(): void`
