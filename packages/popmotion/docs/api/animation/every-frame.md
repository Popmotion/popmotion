---
title: Every Frame
description: Fires with timestamp, once every frame.
category: animation
---

# Every Frame

`everyFrame` fires once per frame, and provides `update` with the duration of time since it started.

<TOC />

## Import

```javascript
import { everyFrame } from 'popmotion';
```

## Usage

```javascript
everyFrame()
  .start((timeSinceStart) => console.log(timeSinceStart));
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
