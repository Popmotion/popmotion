---
title: angle
description: Returns the angle between two 2D points.
category: functions
---

# `angle`

`angle` returns the angle between two 2D points, in degrees.

<TOC />

## Import

```javascript
import { angle } from '@popmotion/popcorn';
```

## Usage

```javascript
angle(
  { x: 0, y: 0 },
  { x: 0, y: 20 }
) // 90
```

## Types

```typescript
type Point2D = {
  x: number;
  y: number;
}

angle(a: Point2D, b: Point2D): number
```
