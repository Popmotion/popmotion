---
title: smooth
description: Creates a function that will smooth values across frames when used with Framesync or Popmotion Pure.
category: functions
---

# `smooth`

`smooth` creates a function that can smooth a value across frames when paired with a [Framesync](/api/framesync) process or [Popmotion Pure](/pure) animation.

<TOC />

## Import

```javascript
import { smooth } from '@popmotion/popcorn';
```

## Usage

### With Framesync

```javascript
import { smooth } from '@popmotion/popcorn';
import sync from 'framesync';

let counter = 0;
const smoother = smooth(100);

sync.update(() => {
  counter = counter + 10;
  counter = smoother(counter);
}, true);
```

### With Popmotion Pure

As Popmotion Pure runs on Framesync, we can use it to smooth animations.

For instance, here's an example of input smoothing:

```javascript
import { smooth } from '@popmotion/popcorn';
import { pointer } from 'popmotion';

pointer({ x: 100 })
  .pipe(
    ({ x }) => x,
    smooth(50)
  )
  .start(v => console.log(v))
```

## Types

```typescript
smoothFrame(strength: number) => (v: number) => number
```
