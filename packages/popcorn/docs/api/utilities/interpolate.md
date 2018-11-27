---
title: interpolate
description: Map from a series of numbers to a range of numbers, colors or strings.
category: functions
---

# `interpolate`

Using an `input` range of sequential numbers, and an `output` range of numbers or colors, `interpolate` will create a function that maps a number from the `input` range to the `output`.

<TOC />

## Import

```javascript
import { interpolate } from '@popmotion/popcorn';
```

## Usage

`interpolate` can map from an `input` array of sequential numbers like this:

```javascript
[0, 1, 2]
```

To an array of **either** numbers, colors, or strings containing one or more numbers or colors.

The two arrays must be the **same length**.

### Numbers

```javascript
const mapper = interpolate(
  [-100, -50, 50, 100],
  [0, 1, 1, 0]
);

mapper(-200); // 0
mapper(-75); // 0.5
mapper(50); // 1
```

### Colors

`interpolate` can map to hex, RGB(A) or HSL(A) colors.

**Note:** Hex numbers will be output as RGBA.

```javascript
const mapper = interpolate(
  [0, 50, 100],
  ['#fff', '#f00', '#000']
);

mapper(25); // rgba(255, 128, 128, 1)
mapper(50); // rgba(255, 0, 0, 1)
mapper(75); // rgba(128, 0, 0, 1)
```

### Strings

`interpolate` can maps to complex value types that include multiple numbers or colors.

Every string in the `output` range must be of the exact same format.

```javascript
const mapper = interpolate(
  [0, 1, 2],
  [
    '20px, rgba(0, 0, 0, 0)',
    '10px, rgba(255, 255, 255, 1)',
    '40px, rgba(100, 100, 100, 0.5)'
  ]
);

mapper(0.5); // '15px, rgba(128, 128, 128, 0.5)'
```

## Options

`interpolate` takes an optional third argument, options. This is an object that may contain the following configurations:

### Clamp

Clamp values to within the provided ranges.

Default: `true`.

```javascript
interpolate([0, 1], [0, 100])(2) // 100
interpolate([0, 1], [0, 100], { clamp: false })(2) // 200
```

### Ease

Default: `linear`

An easing function, or list of easing functions, to apply to every transition.

If defined as an array, it must be the `input.length - 1`, as it applies to the transitions **between** the defined values.

```javascript
interpolate(
  [0, 100, 200],
  ['#fff', '#500', '#000'],
  { ease: [linear, easeOut] }
)
```

## Types

```typescript
interpolate(
  input: number[],
  output: string[] | number[],
  options: InterpolateOptions
): string | number;

type InterpolateOptions = {
  clamp?: boolean = true,
  ease?: Easing | Easing[]
};

type Easing = v => v;
```
