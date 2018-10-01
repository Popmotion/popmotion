---
title: mixColor
description: Creates a function that can interpolate between two hex, rgba or hsla colors.
category: functions
---

# `mixColor`

`mixColor` creates a function that can interpolate between two hex, rgba or hsla colors.

Hex and RGBA colors are mixed using linear color space blending which avoids brightness dips. [Learn more](https://www.youtube.com/watch?v=LKnqECcg6Gw).

<TOC />

## Import

```javascript
import { mixColor } from 'popcorn';
```

## Usage

`mixColor` accepts two colors, either hex/RGB(A), or HSL(A).

It returns a function that can be used to interpolate between the two colors using a value between `0-1`.

```javascript
const mixer = mixColor('#f00', '#0f0');

mixer(0.5) // 'rgba(128, 128, 0, 1)'
```

**Note:** Colors, if defined as hex values, will be returned as rgba.

## Types

```typescript
mixColor(from: string, to: string): string
```
