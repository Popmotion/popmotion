---
title: clamp
description: Restricts a number to within the defined range.
category: functions
---

# `clamp`

`clamp` restricts a number to within the given range.

<TOC />

## Import

```javascript
import { clamp } from '@popmotion/popcorn';
```

## Usage

Clamp accepts a `min` and `max` value.

If a third value is provided, it returns a number that is clamped within that given range:

```javascript
clamp(100, 200, 99); // 100
clamp(100, 200, 201); // 200
```

If only a range is provided, it returns a function. When that function is provided a number, it returns a new number that is clamped within the defined range:

```javascript
const restrictOpacity = clamp(0, 1);
restrictOpacity(-1); // 0
```

## Types

```typescript
clamp(min: number, max: number, v: number) => number;
clamp(min: number, max: number) => (v: number) => number;
```
