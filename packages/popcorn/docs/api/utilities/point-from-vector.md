---
title: pointFromVector
description: Calculates a point, given a point and vector (angle and distance)
category: functions
---

# `pointFromVector`

`pointFromVector` takes a point, an angle (in degrees), and a distance, and returns a new point.

<TOC />

## Import

```javascript
import { pointFromVector } from '@popmotion/popcorn';
```

## Usage

```javascript
pointFromVector({ x: 0, y: 0 }, 45, 100);
// { x: 70.710..., y: 70.710... }
```

## Types

```typescript
type Point = {
  x :number;
  y: number;
};

pointFromVector(origin: Point, angle: number, distance: number): Point
```
