---
title: distance
description: Calculate the distance between two n-dimensional points.
category: functions
---

# `distance`

`distance` calculates the distance between two n-dimensional points.

<TOC />

## Import

```javascript
import { distance } from 'popcorn';
```

## Usage

### 1D points

Provide two numbers to measure the distance between them.

```javascript
distance(-100, 100); // 200
```

### 2D and 3D points

Provide two `Point` values, with `x`, `y` and optionally `z` numbers, to measure the distance between them.

```javascript
distance(
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 0, z: 10 }
); // 10
```

## Types

```typescript
type Point = {
  x: number;
  y: number;
  z?: number;
}

distance(a: number | Point, b: number | Point): number
```
