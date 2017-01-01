---
title: Easing
description: Functions that speed or slow a tween over time.
---

# Easing

Easing functions make tweened motion look more natural by emulating the changes in velocity experienced by objects in the real world.

It can be any function that takes a progress value from `0` to `1`, and returns a new progress.

Popmotion comes with a number of preset easing functions, and provides methods to create new easing functions.

## Example

```javascript
import { tween, easing } from 'popmotion';

tween({
  from: 0,
  to: 1,
  ease: easing.easeOut
}).start();
```

## Presets

Popmotion comes with the following preset easing functions:

- `linear`
- `easeIn`, `easeOut`, `easeInOut`
- `circIn`, `circOut`, `circInOut`
- `backIn`, `backOut`, `backInOut`
- `anticipate`

## Easing creation

### `cubicBezier`
Providing `cubicBezier` with a cubic bezier curve definition (in exactly the same format as the CSS `cubic-bezier` function) will return an easing function based on that curve.

New curves can be generated and tested at Lea Verou's excellent [cubic-bezier.com](http://cubic-bezier.com).

```javascript
const longTail = easing.cubicBezier(0, .42, 0, 1);
```

### `createReversedEasing`
Reverses the provided easing function.

```javascript
const { anticipate, createReversedEasing } = easing;
const anticipateOut = createReversedEasing(anticipate);
```

### `createMirroredEasing`
Mirrors the provided easing function.

```javascript
const { anticipate, createMirroredEasing } = easing;
const anticipateInAndOut = createMirroredEasing(anticipate);
```

### `createExpoIn`
Creates an easing function based on the exponent function `progress ** exponent`. `easeIn` is `createExpoIn(2)`.

```javascript
const { createExpoIn } = easing;
const strongerEaseIn = createExpoIn(3);
```

### `createBackIn`
Creates an easing function with an overshoot. `backIn` is `createBackIn(1.525)`.

```javascript
const { createBackIn, createReversedEasing } = easing;
const strongerBackOut = createReversedEasing(createBackIn(3));
```

### `createAnticipateEasing`
Creates an easing function with a small anticipate and ease out. `anticipate` is `createAnticipateEasing(1.525)`.

```javascript
const { createAnticipateEasing } = easing;
const strongerAnticipate = createAnticipateEasing(3);
```
