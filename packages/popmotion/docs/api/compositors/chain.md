---
title: Chain
description: Chain a sequence of actions, move to the next when the current one completes.
category: compositors
---

# Chain

Chain a sequence of actions, move to the next when the current one completes.

<TOC />

## Import

```javascript
import { chain } from 'popmotion';
```

## Usage

```javascript
chain(
  tween({ to: 300 }),
  spring({ from: 300, to: 0 })
).start({
  update: (v) => console.log(v),
  complete: () => console.log('All actions complete')
})
```

## Methods

### Action methods

`chain()` returns:

- `filter((v: any) => boolean)`: Returns a new action that filters out values when the provided function returns `false`.
- `pipe(...funcs: Array<(v) => v)`: Returns a new action that will run `update` values through this sequence of functions.
- `start(update | { update, complete })`: Starts the action and returns a subscription.
- `while((v: any) => boolean)`: Returns a new action that will `complete` when the provided function returns `false`.


### Subscription methods

`chain().start()` returns:

- `stop(): void`
