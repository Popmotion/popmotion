---
title: Merge
description: Combine multiple actions into one output.
category: compositors
---

# Merge

Combine multiple actions into one output.

<TOC />

## Import

```javascript
import { merge } from 'popmotion';
```

## Usage

```javascript
merge(
  tween(),
  action(({ update }) => update(1)),
  physics({ velocity: 1000 })
).start((v) => console.log(v));
```

## Methods

### Action methods

`merge()` returns:

- `filter((v: any) => boolean)`: Returns a new action that filters out values when the provided function returns `false`.
- `pipe(...funcs: Array<(v) => v)`: Returns a new action that will run `update` values through this sequence of functions.
- `start(update | { update, complete })`: Starts the action and returns a subscription.
- `while((v: any) => boolean)`: Returns a new action that will `complete` when the provided function returns `false`.


### Subscription methods

`merge().start()` returns:

- `stop(): void`

