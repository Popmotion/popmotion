---
title: Transformers
description: Simple composable functions that take a value and return a new one.
---

# Transformers

Transformers are used to take a value, transform it in some way, and then return it. Because all transformers have the same signature, they can be easily composed.

## Import

```javascript
import { transform } from "popmotion";
```

## Usage

As pure functions, transformers can be used in any situation where you want to change one value into another.

However, they're particularly useful with the [action](/api/action) `pipe` method. For instance, here we can easily compose some functions that will ensure that the `tween`'s output will always be a valid RGB value:

```javascript
import { tween, transform } from "popmotion";
const { pipe, clamp } = transform;

tween({ to: 255 })
  .pipe(clamp(0, 255), Math.round)
  .start(v => console.log(v));
```

## Preset transformers

### `appendUnit`

Returns a function that, when given a value, returns that value appended with the provided `unit`.

`appendUnit(unit: string[])`

```javascript
const convertToPx = appendUnit("px");
convertToPx(5); // '5px'
```

### `applyOffset`

Takes the offset of the provided value from `from`, and applies it to `to`.

`applyOffset(from: number, to: number)`
`applyOffset(to: number)`

```javascript
// With two arguments
applyOffset(0, 10)(20); // 30

// With one argument
const offsetFromFirst = applyOffset(10);
offsetFromFirst(20); // 10
offsetFromFirst(21); // 11
```

### `bezier`

Returns a function that, provided a progress value from `0` to `1`, will return a resolved number from the provided bezier array.

Can resolve either 3 or 4 bezier points. For more points, the [original implementation](https://github.com/hughsk/bezier) can be used.

`bezier(...points: number[])`

```javascript
const resolveBezier = bezier(0, 1, 2, 3);

resolveBezier(0); // 0
resolveBezier(0.5); // 1.5
resolveBezier(1); // 3
```

### `blendColor`

Given two colors, returns a function that takes a progress value (0 - 1) and returns a correctly blended color.

Watch [Computer Color is Broken](https://www.youtube.com/watch?v=LKnqECcg6Gw) for more information.

`blendColor(colorA <String | Object>, colorB <String | Object>)`

```javascript
const blendRedToBlue = blendColor("#f00", "#00f");
blendRedToBlue(0.5); // Returns blended object with rgba properties
```

### `clamp`

Returns a function that restricts given values to within the provided range.

`clamp(min: number, max: number)`

```javascript
const rgbRange = clamp(0, 255);
rgbRange(256); // 255
```

### `conditional`

Conditionally applies a transformer if `check` returns `true`.

```javascript
const constrainWithSpring = conditional(v => v < 0, nonlinearSpring(50, 0));
```

### `interpolate`

Returns a function that, when passed a value, interpolates from the `inputRange` to the `outputRange`.

An optional array of easing functions can be passed as the third argument, otherwise linear interpolation will be used by default.

Provided values outside the given ranges will be clamped to the output range limits.

**Note:** The `inputRange` must be in linear order. ie `[100, 200, 300]` and `[100, 0]` are valid, whereas `[100, 50, 200]` is not.

`interpolate(inputRange: number[], outputRange: number[], ease: Easing[])`

```javascript
const invert = interpolate([0, 100], [100, 0]);
invert(75); // 25

const foo = interpolate([0, 50, 100], [0, 0.5, 0]);
foo(75); // 0.25
```

### `pipe`

Used to compose other transformers, from left to right. The first argument passed to the returned function will be the value and any subsequent arguments will be passed to all functions unaltered.

`pipe(...funcs:(v: any) => any[])`

```javascript
const rgbType = pipe(clamp(0, 255), Math.round);

rgbType(12.25); // 12
```

### `smooth`

Will smooth a value over time.

`smooth(strength: number)`

**Note:** As `smooth` maintains an internal state, it must be initialised individually for every numerical value you wish to smooth.

### `snap`

Given a number or an array of two or more numbers, returns a function that will snap a given value to the nearest multiple or to the nearest number in the array.

`snap(positions: number[])`

```javascript
const snapToIntervals = snap(45);
snapToIntervals(89); // 90

const snapToArbitraryDegrees = snap([0, 90, 270, 360]);
snapToArbitraryDegrees(75); // 90
```

### `steps`

Given a number of steps and a range, returns a function that will fix a given value to the specific number of discrete steps within that range.

`steps(steps: number, min: number, max: number)`

```javascript
const threeStep = steps(3, 0.4);
threeStep(0.1); // 0
threeStep(0.4); // 0.5
threeStep(0.9); // 1
```

### `linearSpring`

Creates a spring that, given an elasticity (a value less than `1`) and an origin, will treat the provided value as a displacement.

`linearSpring(elasticity: number, origin: number)`

### `nonlinearSpring`

Creates a spring that has a non-linear effect on the displacement - the greater the displacement, the greater effect on the provided value.

`nonlinearSpring(elasticity: number, origin: number)`

### `generateStaticSpring`

A function that can generate new static springs like `linearSpring` and `nonlinearSpring`.

This function is actually used to create those functions:

```javascript
const linearSpring = generateStaticSpring();
const nonlinearSpring = generateStaticSpring(Math.sqrt);
```

```
generateStaticSpring(alterDisplacement: (displacement: number) => number)
  => (elasticity: number, origin: number)
```

### `transformMap`

Accepts an object of named transformers that expects `v` of the same structure. Applies those transformers to the corresponding property in `v` and outputs.

`transformMap(map: { [key: string]: (v: any) => any })`

```javascript
const foo = transformMap({
  x: v => v + "px",
  y: v => v + "%"
});

foo({ x: 5, y: 10 }); // { x: '5px', y: '10%' }
```

### `wrap`

Wraps a number around.

`wrap(min: number, max: number)`

```javascript
physics({ velocity: 1000 })
  .pipe(wrap(100, 400))
  .start(v => console.log(v));
```

### Value type transformers

Transformers that can convert from numbers and objects into value types like px or hsla can be found in the [`style-value-types` package](/api/value-types).
