---
title: Parallel
description: Control multiple actions in parallel and output as an array.
category: compositors
---

# Parallel

## Import

```javascript
import { parallel } from 'popmotion';
// or stand-alone:
import parallel from 'popmotion/compositors/parallel';
```

## Usage

```javascript
parallel(
  tween({ from: 40, to: 50 }),
  spring({ to: 500 })
).start(([ tweenOutput, springOutput ]) => {});
```
