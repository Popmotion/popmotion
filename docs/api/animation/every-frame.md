---
title: Every Frame
description: Fires with timestamp, once every frame.
category: animation
---

# Every Frame

`everyFrame` fires once per frame, and provides `update` with the current frame's timestamp.

## Import

```javascript
import { everyFrame } from 'popmotion';
// or stand-alone:
import everyFrame from 'popmotion/animations/every-frame';
```

## Usage

```javascript
everyFrame().start((timestamp) => console.log(timestamp));
```

To provide `update` with the duration since animation start, you could use `pipe` with [Framesync's](/api/framesync) `currentFrameTime` function and the `applyOffset` [transformer](/api/transformers):

```javascript
import everyFrame from 'popmotion/animations/every-frame';
import { applyOffset } from 'popmotion/transformers';
import { currentFrameTime } from 'framesync';

everyFrame()
  .pipe(applyOffset(currentFrameTime(), 0))
  .start((timeSinceStart) => console.log(timeSinceStart))
```

## Methods

### Action methods

`everyFrame()` returns:

- `filter((v: any) => boolean)`: Returns a new action that filters out values when the provided function returns `false`.
- `pipe(...funcs: Array<(v) => v)`: Returns a new action that will run `update` values through this sequence of functions.
- `start(update | { update, complete })`: Starts the action and returns a subscription.
- `while((v: any) => boolean)`: Returns a new action that will `complete` when the provided function returns `false`.


### Subscription methods

`everyFrame().start()` returns:

- `stop(): void`

## Example

<CodePen id="XzYJvP" />
