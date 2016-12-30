---
title: Transformers
description: Simple composable functions that take a value and return a new one.
---

# Transformers

An Action's `onUpdate` prop is a callback receives `value` as an argument. We can use transformers to change and filter this value before using it:

```javascript
import { tween, transformers } from 'popmotion';
const { flow, clamp } = transformers;

tween({
  from: 0,
  to: 255,
  onUpdate: flow(
    clamp(0, 255),
    Math.round,
    console.log
  )
}).start();
```

## Preset transformers

### `appendUnit`
Returns a function that, when given a value, returns that value appended with the provided `unit`.

`appendUnit(unit <String>)`

```javascript
const convertToPx = appendUnit('px');
convertToPx(5); // '5px'
```

### `clampMax`
Returns a function that caps given values to below `max`.

`clampMax(max <Number>)`

```javascript
const capTo50 = clampMax(50);
capTo50(100); // 50
```

### `clampMin`
Returns a function that caps given values to above `min`.

`clampMin(min <Number>)`

```javascript
const keepAbove0 = clampMin(0);
keepAbove0(-100); // 0
```

### `clamp`
Returns a function that restricts given values to within the provided range.

`clamp(min <Number>, max <Number>)`

```javascript
const rgbRange = clamp(0, 255);
rgbRange(256); // 255
```

### `flow`
Used to compose other transformers, from left to right. The first argument passed to the returned function will be the value and any subsequent arguments will be passed to all functions unaltered.

`flow(...funcs <Functions>)`

```javascript
const rgbType = flow(
  clamp(0, 255),
  Math.round
);

rgbType(12.25); // 12
```

### `interpolate`
Returns a function that, when passed a value, interpolates from the `inputRange` to the `outputRange`.

An optional easing function can be passed as the third argument, otherwise linear interpolation will be used by default.

Provided values outside the given ranges will be clamped to the output range limits.

`interpolate(inputRange <Array>, outputRange <Array>, ease <Function>)`

```javascript
const invert = interpolate([0, 100], [100, 0]);
invert(75); // 25

const foo = interpolate(
  [0, 50, 100],
  [0, 0.5, 0]
);
foo(75); // 0.25
```

### `steps`
Given a number of steps and a range, returns a function that will fix a given value to the specific number of descrete steps within that range.

`steps(steps <Number>, min <Number>, max <Number>)`

```javascript
const threeStep = steps(3, 0.4);
threeStep(0.1); // 0
threeStep(0.4); // 0.5
threeStep(0.9); // 1
```
