---
title: On Frame
description: Fires with timestamp, once every frame.
category: animation
---

# On Frame

On Frame fires once per frame, and provides the given `update` the latest frame timestamp.

## Import

```javascript
import { onFrame } from 'popmotion';
// or stand-alone:
import onFrame from 'popmotion/animations/on-frame';
```

## Usage

```javascript
onFrame().start((timestamp) => console.log(timestamp));
```

## Methods

### Action methods

`spring()` returns:

- `pipe(...funcs: Array<(v) => v)`: Returns a new action that will run `update` values through this sequence of functions.
- `start(update | { update, complete })`: Starts the action and returns a subscription.
- `while((v: any) => boolean)`: Returns a new action that will `complete` when the provided function returns `false`.


### Subscription methods

`spring().start()` returns:

- `stop(): void`
