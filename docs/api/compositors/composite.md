---
title: Crossfade
description: Control a map of actions and output to that same structure.
category: compositors
---

# Composite

Control a named map of actions, and output to the same structure.

## Import

```javascript
import { composite } from 'popmotion';
// or stand-alone:
import composite from 'popmotion/compositors/composite';
```

## Usage

```javascript
composite({
  x: tween({ from: 60, to: 400 }),
  y: physics({ from: 60, velocity: 300 })
}).start(({ x, y }) => {});
```

## Methods

### Action methods

`composite()` returns:

- `pipe(...funcs: Array<(v) => v)`: Returns a new action that will run `update` values through this sequence of functions.
- `start(update | { update, complete })`: Starts the action and returns a subscription.
- `while((v: any) => boolean)`: Returns a new action that will `complete` when the provided function returns `false`.

### Subscription methods

`composite().start()` returns:

- `stop(): void`

**Note:** If all actions return the same API, for instance all composed actions are `tween`s, the `composite` subscription will also return a version of that API that controls all child actions.
