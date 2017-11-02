---
title: Pointer
description: Applies pointer delta to the provided initial position.
category: input
---

# Delta Pointer

Applies pointer delta to the provided initial position.

## Import

```javascript
import { deltaPointer } from 'popmotion';
// or stand-alone:
import deltaPointer from 'popmotion/input/pointer/delta';
```

## Usage

```typescript
deltaPointer(point: { x: number, y: number }): pointer
```

Provide the factory function with an initial point, and the action will apply subsequent pointer movement to that initial position.

```javascript
deltaPointer({ x: 0, y: 0 })
  .start(({ x, y }) => console.log(x, y));
```

