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
import touch from 'popmotion/lib/input/touch';
```

## Usage

```javascript
touch({ preventDefault: true })
  .start((touches) => touches.forEach(({ x, y }) => console.log(x, y)));
```

## Props

- `preventDefault: boolean = true`

## Methods

- `stop(): void`
