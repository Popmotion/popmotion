---
title: snap
description: Creates a function that will snap provided values to regular intervals, or to numbers provided as an array.
category: functions
---

# `snap`

`snap` creates a function that will snap numbers to the nearest in a provided array or to a regular interval. 

<TOC />

## Import

```javascript
import { snap } from '@popmotion/popcorn';
```

## Usage

### Snap to regular interval

```javascript
const snapTo = snap(45);

snapTo(1); // 0
snapTo(40); // 45
snapTo(50); // 45
snapTo(80); // 90
```

### Snap to values in an array

```javascript
const snapTo = snap([-100, -50, 100, 200]);

snapTo(-200); // -100
snapTo(-76); // -100
snapTo(-74); // -50
```

## Types

```typescript
snap(interval: number) => (v: number) => number;
snap(intervals: number[]) => (v: number) => number;
```
