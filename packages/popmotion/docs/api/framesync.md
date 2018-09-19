---
title: Framesync
description: Schedule functions to run at specific steps on the render loop.
---

# Framesync

A tiny frame scheduler for performantly batching reads and renders.

Segregating actions that read and write to the DOM will avoid [layout thrashing](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing).

Popmotion batches updates on the `update` step, and Stylefire batches renders on the `render` step.

<TOC />

## Install

**Framesync is installed as part of Popmotion.**

To use as a standalone library, install with:

```bash
npm install framesync --save
```

## Usage

### Scheduling functions

Functions can be scheduled to different parts of the render loop with the `sync` function.

```javascript
import sync from 'framesync';
```

It accepts an object containing one or more named functions to run on that part of the render loop.

```javascript
sync({
  update: () => {},
  render: () => {}
});
```

### Frame data

Each function is provided data about the current frame:

```javascript
update: ({ delta, timestamp }) => {}
```

- `delta`: Time since last frame (in milliseconds)
- `timestamp`: Timestamp of the current frame.

This object is recycled across frames, so values should be destructured if intended to be used asynchronously.

### keepAlive

We can run a function (or set of functions) as an ongoing process by passing `keepAlive: true`:

```javascript
let count = 0;

sync({
  update: () => count++,
  keepAlive: true
});
```

This will keep the process running until it's actively cancelled.

### immediate

The `immediate` option can be used to sync a function on the **current frame step**.

By default, Framesync will schedule functions to run the next time that frame step is fired:

```javascript
sync({
  update: ({ timestamp }) => {
    sync({
      update: (frame) => {
        // frame.timestamp !== timestamp
      }
    })
  }
})
```

By setting `immediate` to `true`, we can add this at the end of the current step:

```javascript
sync({
  update: ({ timestamp }) => {
    sync({
      update: (frame) => {
        // frame.timestamp === timestamp
      },
      immediate: true
    })
  }
})
```

### Cancelling

Synced processes can be cancelled with the `cancelSync` function:

```javascript
import sync, { cancelSync } from 'framesync';

let count = 0;

const process = sync({
  render: () => {
    count++;
    if (count >= 10) {
      cancelSync(process);
    }
  },
  keepAlive: true
});
```
