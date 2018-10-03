---
title: smoothFrame
description: Smooth the motion from one value to a new value over a single frame.
category: functions
---

# `smoothFrame`

`smoothFrame` can be used to smooth motion across a single frame, independent of framerate.

This can be used, for example, to implement input smoothing.

**Note:** To smooth motion using a [Framesync](/api/framesync)-based process or library like [Popmotion Pure](/pure), the [smooth](/popcorn/api/smooth) utility offers a simpler API.

<TOC />

## Import

```javascript
import { smoothFrame } from '@popmotion/popcorn';
```

## Usage

`smoothFrame` accepts `prevValue`, `nextValue`, `frameDuration` and `strength` arguments.

It will return a value that smooths the difference between `prevValue` and `nextValue` according to the `frameDuration` and `strength` properties.

```javascript
smoothFrame(0, 100, 16.7, 50); // 33.4
```

Higher `strength` values impose stronger smoothing, with values the same as or less than the `frameDuration` imposing no smoothing.

## Types

```typescript
smoothFrame(
  prev: number,
  next: number,
  frameDuration: number,
  strength: number
): number
```
