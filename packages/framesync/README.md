# Framesync

A tiny frame scheduler for performantly batching reads and renders.

Segregating actions that read and write to the DOM will avoid [layout thrashing](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing).

Popmotion batches updates on the `update` step, and Stylefire batches renders on the `render` step.

## Install

```bash
npm install framesync --save
```

## Usage

### Render steps

Once per frame, the functions scheduled with Framesync are executed in the following order:

- `read`
- `update`
- `render`
- `postRender`

### Scheduling functions

Functions can be scheduled to different parts of the render loop with `sync`.

```javascript
import sync from 'framesync';
```

It contains four functions, one to schedule on each of the above steps:

```javascript
sync[stepId](callback, keepAlive, immediate)
```

```javascript
sync.update(() => console.log('update step'));
```

### Frame data

Each function is provided data about the current frame:

```javascript
sync.update(({ delta, timestamp }) => {});
```

- `delta`: Time since last frame (in milliseconds)
- `timestamp`: Timestamp of the current frame.

This object is recycled across frames to reduce garbage collection, so values should be destructured if intended to be used asynchronously.

### keepAlive

We can run a function (or set of functions) as an ongoing process by passing `keepAlive: true`:

```javascript
let count = 0;

sync(() => count++, true);
```

This will keep the process running until it's actively cancelled.

### immediate

The `immediate` option can be used to sync a function on the **current frame step**.

By default, Framesync will schedule functions to run the next time that frame step is fired:

```javascript
sync.update(({ timestamp }) => {
  sync.update((frame) => {
    // frame.timestamp !== timestamp
  ))
});
```

By setting `immediate` to `true`, we can add this at the end of the current step:

```javascript
sync.update(({ timestamp }) => {
  sync.update((frame) => {
    // frame.timestamp === timestamp
  }, false, true)
});
```

### Cancelling

Synced processes can be cancelled with `cancelSync`:

```javascript
import sync, { cancelSync } from 'framesync';

let count = 0;

const process = sync.render(() => {
  count++;
  if (count >= 10) {
    cancelSync.render(process);
  }
}, true);
```
