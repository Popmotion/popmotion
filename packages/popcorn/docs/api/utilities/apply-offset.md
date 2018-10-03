---
title: applyOffset
description: Creates a function that measures the offset of incoming values and applies it to an initial value.
category: functions
---

# `applyOffset`

`applyOffset` creates a function that measures the offset of any given value from the initial `from`, and applies it to `to`.

<TOC />

## Import

```javascript
import { applyOffset } from '@popmotion/popcorn';
```

## Usage

`applyOffset` can be used both when you know the initial value you want to measure the offset from, and when you don't.

### With an initial value

```javascript
applyOffset(100, 0)(101) // 1
```

### Without an initial value

If we don't provide an initial `from` value, the first value we call the returned function will be considered `from` and apply `to` with a delta of `0`.

```javascript
const applyPointerMovementToX = applyOffset(x);

applyPointerMovement(100); // x
applyPointerMovement(120); // x + 20
```

## Types

```typescript
applyOffset(from: number, to: number): (v: number) => number;
applyOffset(to: number): (v: number) => number;
```
