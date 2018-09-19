# <a href="https://popmotion.io/api/framesync"><img src="https://user-images.githubusercontent.com/7850794/38307669-5e7e3f88-380c-11e8-8c26-970c36801910.png" height="61" width="250" alt="Framesync" /></a>

A tiny frame scheduler for performantly batching reads and renders.

Segregating actions that read and write to the DOM will avoid [layout thrashing](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing).

## Install

```bash
npm install framesync --save
```

## Usage

The Framesync render loop executes four sequential steps, once per frame.

- `frameStart`
- `frameUpdate`
- `frameRender`
- `frameEnd`

Developers can set any function to run at any of these steps using the `on` and `cancel` callbacks:

- `onFrameStart`, `cancelOnFrameStart`
- `onFrameUpdate`, `cancelOnFrameUpdate`
- `onFrameRender`, `cancelOnFrameRender`
- `onFrameEnd`, `cancelOnFrameEnd`

Framesync also exports some time-measurement methods:
- `currentTime`: The current time as measured by the host platform's most accurate `now` function.
- `currentFrameTime`: The time the current `requestAnimationFrame` was initiated.
- `timeSinceLastFrame`: The duration between the previous frame and the current `currentFrameTime`

### Example

```javascript
import {
  timeSinceLastFrame,
  onFrameStart,
  cancelFrameStart
} from 'framesync';

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
