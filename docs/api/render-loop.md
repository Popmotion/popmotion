---
title: Render Loop
description: Schedule functions to run on Popmotion's internal render loop.
---

# Render Loop

The Popmotion render loop execute four sequential steps, once per frame.

- `frameStart`
- `frameUpdate`
- `frameRender`
- `frameEnd`

Developers can set any function to run at any of these steps using the `on` and `cancel` callbacks:

- `onFrameStart`, `cancelOnFrameStart`
- `onFrameUpdate`, `cancelOnFrameUpdate`: Actions update here
- `onFrameRender`, `cancelOnFrameRender`: Renderers render here
- `onFrameEnd`, `cancelOnFrameEnd`

`timeSinceLastFrame` and `currentFrameTimestamp` callbacks are also available to understand

### Example

```javascript
import {
  timeSinceLastFrame,
  onFrameStart,
  cancelFrameStart
} from 'popmotion';

function logTimeSinceLastFrame() {
  console.log(timeSinceLastFrame());
  onFrameStart(logTimeSinceLastFrame);
}

onFrameStart(logTimeSinceLastFrame);

function stopLogging() {
  cancelOnFrameStart(logTimeSinceLastFrame);
}

setTimeout(stopLogging, 5000);
```
