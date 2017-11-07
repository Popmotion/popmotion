---
title: Chain
description: Chain a sequence of actions, move to the next when the current one completes.
category: compositors
---

# Chain

Chain a sequence of actions, move to the next when the current one completes.

## Import

```javascript
import { chain } from 'popmotion';
// or stand-alone:
import chain from 'popmotion/compositors/chain';
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
