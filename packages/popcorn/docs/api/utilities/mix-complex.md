---
title: mixComplex
description: Creates a function that can mix between two strings that contain one or more numbers and/or colors.
category: functions
---

# `mixComplex`

Creates a function that can mix between two strings that contain one or more numbers and/or colors.

Hex and RGBA colors are mixed using linear color space blending which avoids brightness dips. [Learn more](https://www.youtube.com/watch?v=LKnqECcg6Gw).

<TOC />

## Import

```javascript
import { mixComplex } from 'popcorn';
```

## Usage

`mixComplex` can be used to animate any string in which numbers or colors are detected.

As simple as single unit types:

```javascript
const mixer = mixComplex('10px', '20px');

mixer(0.5); // '15px'
```

Or strings containing multiple numbers and colors:

```javascript
const mixer = mixComplex(
  '0px 0px auto rgba(0, 0, 0, 0)',
  '5px 5px auto rgba(0, 0, 0, 0.5)'
);

mixer(0.5); // '2.5px 2.5px auto rgba(0, 0, 0, 0.25)'
```

**Note:** The non-numerical portions of the string must be the same in both `from` and `to` values.

## Types

```typescript
mixColor(from: string, to: string) => (v: number) => string
```
