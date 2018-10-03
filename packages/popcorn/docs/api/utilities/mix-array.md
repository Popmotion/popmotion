---
title: mixArray
description: Creates a function that can interpolate between two arrays of matching value types.
category: functions
---

# `mixArray`

`mixArray` creates a function that can interpolate between two arrays of matching value types.

Values can be any number, color, or a string containing multiple numbers or colors.

<TOC />

## Import

```javascript
import { mixArray } from '@popmotion/popcorn';
```

## Usage

`mixArray` accepts two arrays, a `from` and `to` array.

The values in each can be:

- Number
- Hex color
- RGB(A) color
- HSL(A) color
- String containing one or more of the above types

It returns a function that can be used to interpolate between the two arrays using a value between `0-1`.

```javascript
const mixer = mixArray(
  [0, '60px', '#fff'],
  [100, '-60px', '#000']
)

mixer(0.5) // [50, '0px', 'rgba(128, 128, 128, 1)']
```

**Note:** Colors, if defined as hex values, will be returned as rgba.

## Types

```typescript
type Mixable = Array<Number | String>;

mixArray(from: Mixable, to: Mixable): Mixable
```
