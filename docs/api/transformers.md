---
title: Transformers
description: Simple composable functions that take a value and return a new one.
---

# Transformers

An Action's `onUpdate` prop is a callback receives `value` as an argument. We can use transformers to change and filter this value before using it:

```javascript
import { tween, transform } from 'popmotion';
const { pipe, clamp } = transform;

tween({
  from: 0,
  to: 255,
  onUpdate: pipe(
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

### `applyOffset`
Takes the offset of the provided value from `from`, and applies it to `to`.

`applyOffset(from <Number>, to <Number>)`

```javascript
applyOffset(0, 10)(20); // 30
```

### `bezier`
Returns a function that, provided a progress value from `0` to `1`, will return a resolved number from the provided bezier array.

Can resolve either 3 or 4 bezier points. For more points, the [original implementation](https://github.com/hughsk/bezier) can be used.

`bezier(points <Array>)`

```javascript
const resolveBezier = bezier([0, 1, 2, 3]);

resolveBezier(0); // 0
resolveBezier(0.5); // 1.5
resolveBezier(1); // 3
```

### `blendColor`
Given two colors, returns a function that takes a progress value (0 - 1) and returns a correctly blended color.

Watch [Computer Color is Broken](https://www.youtube.com/watch?v=LKnqECcg6Gw) for more information.

`blendColor(colorA <String | Object>, colorB <String | Object>)`

```javascript
const blendRedToBlue = blendColor('#f00', '#00f');
blendRedToBlue(0.5); // Returns blended object with rgba properties
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

### `conditional`
Returns a function that fires `check` when provided a `value`. Returns `value` as passed to `ifTrue` if `check` returns `true`, or `ifFalse` if `check` returns `false`.

`ifFalse` is optional, and will return `value` unaltered if not defined.

`conditional(check <Function>, ifTrue <Function>, ifFalse <Function>)`

```javascript
const LIMIT = 0;
const tetherToZero = conditional(
  (v) => v < LIMIT,
  spring(5, LIMIT)
);
tetherToZero(-20); // passed to spring
tetherToZero(50); // not passed to spring
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

### `pipe`
Used to compose other transformers, from left to right. The first argument passed to the returned function will be the value and any subsequent arguments will be passed to all functions unaltered.

`pipe(...funcs <Functions>)`

```javascript
const rgbType = pipe(
  clamp(0, 255),
  Math.round
);

rgbType(12.25); // 12
```

### `smooth`
Will smooth a value over time.

`smooth(strength <Number>)`

### `snap`
Given an array of two or more numbers, returns a function that will snap a given value to the nearest number in the array.

`snap(positions <Array>)`

```javascript
const snapToDegrees = snap([0, 90, 180, 270, 360]);
snapToDegrees(75); // 90
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

### `spring`
Creates a spring that, given an elasticity and an origin, will treat the provided value as a displacement.

`spring(elasticity <Number>, origin <Number>)`

### `nonlinearSpring`
Creates a spring that has a non-linear effect on the displacement - the greater the displacement, the greater effect on the provided value.

`nonlinearSpring(elasticity <Number>, origin <Number>)`

### `wrap`
Wraps a number around.

`wrap(min <Number>, max <Number>)`

```javascript
physics({
  velocity: 1000,
  onUpdate: pipe(
    wrap(100, 400),
    console.log
  )
});
```

## Calculation transformers

### `add`
Returns a function that will return the provided `value` with the given `valueToAdded` added.

`add(valueToAdd <Number>)`

```javascript
add(10)(100); // 110
```

### `subtract`
Returns a function that will return the provided `value` with the given `valueToSubtract` subtracted.

`subtract(valueToSubtract <Number>)`

```javascript
subtract(10)(100); // 90
```

## Unit transformers

### `alpha`
Returns a valid alpha value.

`alpha(<Number>)`

```javascript
alpha(2); // 1
```

### `degrees`
Appends 'degrees' unit type.

`degrees(<Number>)`

```javascript
degrees(360); // '360deg'
```

### `hsla`
Converts composite value to a valid `hsla` value.

`hsla(colors <Object>)`

```javascript
hsla({
  hue: 100,
  saturation: 50,
  lightness: 50,
  alpha: 1
}); // 'hsla(100, 50%, 50%, 1)'
```

### `rgba`
Converts composite value to a valid `rgba` value.

`rgba(colors <Object>)`

```javascript
rgba({
  red: 256,
  green: 24.5,
  blue: 0
}); // 'rgba(255, 25, 0, 1)'
```

### `rgbUnit`
Converts to a valid RGB value.

`rgbUnit(<Number>)`

```javascript
rgbUnit(256); // 255
rgbUnit(24.5); // 25
```

### `percent`
Appends '%' unit type.

`percent(<Number>)`

```javascript
percent(100); // '100%'
```

### `px`
Appends 'px' unit type.

`px(<Number>)`

```javascript
px(10); // '10px'
```
