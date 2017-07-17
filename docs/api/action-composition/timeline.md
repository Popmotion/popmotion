---
title: Timeline
description: Compose tweens into a single, scrubbable timeline.
category: action-composition
---

# Timeline

Compose `tween`s into a single, scrubbable timeline.

This timeline is itself a tween, and thus can be composed into another timeline and can be controlled with all the same methods and properties.

`timeline(sequence <Array>, props <Object>)`

## Install

Popmotion Timeline is a seperate package that will add less than 1kb to your bundle.

```
npm install popmotion-timeline --save
```

```javascript
import timeline from 'popmotion-timeline';
```

## Usage

Timeline accepts two arguments, `sequence` (required) and `props`.

`sequence` is an array of `tween`s (or `colorTween`s) and timestamps.

By default, a list of tweens will play one after the other:

```javascript
const log = (v) => console.log(v);

timeline([
  tween({ to: 400 }).output(log),
  tween({ from: 400, to: 0 }).output(log)
]).start();
```

### Timestamps

We can override this default behaviour by inserting timestamps.

A timestamp can either be a raw number, which will set an **absolute** time. For instance:

```javascript
timeline([
  tween({ to: 400 }).output(log),
  1000,
  tween({ from: 400, to: 0 }).output(log)
]).start();
```

In this example, the second tween will start after 1 second **from the start of the timeline**.

A timestamp can also be a string, which will set a **relative** time. For instance:

```javascript
timeline([
  tween({ to: 400 }).output(log),
  '+200',
  tween({ from: 400, to: 0 }).output(log)
]).start();
```

This will start the second tween `200`ms **after the first has ended**.

## Parallel and staggered tweens

We can easily play multiple tweens at the same point by grouping them in an array. For instance:

```javascript
timeline([
  [
    tween({ to: 400 }).output((v) => v),
    tween({ to: 400 }).output((v) => v),
    tween({ to: 400 }).output((v) => v),
    tween({ to: 400 }).output((v) => v)
  ]
]).start();
```

These tweens will all run in parallel.

Staggering these tweens is as simple as providing a number as the final item in the array:

```javascript
timeline([
  [
    tween({ to: 400 }).output((v) => v),
    tween({ to: 400 }).output((v) => v),
    tween({ to: 400 }).output((v) => v),
    tween({ to: 400 }).output((v) => v),
    50
  ]
]).start();
```

These tweens will now be played with a `50`ms stagger between them.

## Timeline control

`timeline` supports all the same properties as `tween`. So we can loop a timeline as simply as:

```javascript
timeline(sequence, { loop: Infinity }).start();
```

Or scale the entire timeline by changing its duration:

```javascript
timeline(sequence, { duration: 10000 }).start();
```

Or even apply easing to the timeline playhead itself:

```javascript
timeline(sequence, { ease: easing.easeInOut }).start();
```

**Or** we could go as far as to provide a `transform` property, allowing us to modify the playhead before it gets applied to the timeline.

For instance, we could use the `snap` transformer to snap the playhead to the nearest `0.2`:

```javascript
timeline(sequence, { transform: snap(0.2) }).start();
```

## Props
- `duration <Number>`: This is dynamically calculated from the child tweens. However, if `duration` is manually set, the entire timeline is scaled proportionately.
- `ease <Function>`: (Default: `easing.linear`)

[...Tween](/api/tween)

## Methods

[...Tween](/api/tween)
