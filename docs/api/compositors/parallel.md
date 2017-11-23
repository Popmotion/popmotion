---
title: Parallel
description: Control multiple actions in parallel and output as an array.
category: compositors
---

# Parallel

Control an n-dimensional array of actions in parallel, and output as an array.

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

## Methods

### Action methods

`parallel()` returns:

- `filter((v: any) => boolean)`: Returns a new action that filters out values when the provided function returns `false`.
- `pipe(...funcs: Array<(v) => v)`: Returns a new action that will run `update` values through this sequence of functions.
- `start(update | { update, complete })`: Starts the action and returns a subscription.
- `while((v: any) => boolean)`: Returns a new action that will `complete` when the provided function returns `false`.

### Subscription methods

`parallel().start()` returns:

- `stop(): void`

**Note:** If all actions return the same API, for instance all composed actions are `tween`s, the `parallel` subscription will also return a version of that API that controls all child actions.
