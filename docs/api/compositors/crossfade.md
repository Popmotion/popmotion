---
title: Crossfade
description: Fade between two numerical actions.
category: compositors
---

# Crossfade

Fade between two numerical actions.

## Import

```javascript
import { crossfade } from 'popmotion';
// or stand-alone:
import crossfade from 'popmotion/compositors/crossfade';
```

## Usage

Example: blend from one tween to another:

```javascript
const blendTweens = crossfade(
  tween({ from: 0, to: 500, elapsed: 200 }),
  tween({ from: 500, to: 0 })
).start((v) => console.log(v));

tween({ duration: 100 }).start(blendTweens.setBalance);
```
