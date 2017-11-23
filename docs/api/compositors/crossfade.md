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

## Methods

### Action methods

`crossfade()` returns:

- `filter((v: any) => boolean)`: Returns a new action that filters out values when the provided function returns `false`.
- `pipe(...funcs: Array<(v) => v)`: Returns a new action that will run `update` values through this sequence of functions.
- `start(update | { update, complete })`: Starts the action and returns a subscription.
- `while((v: any) => boolean)`: Returns a new action that will `complete` when the provided function returns `false`.


### Subscription methods

`crossfade().start()` returns:

- `setBalance(): this`: Sets the balance of blended output from the first action (`0`) to the second (`1`).
- `stop(): void`
