---
title: Timeline
description: Compose tweens into a single, scrubbable timeline.
category: action-composition
draft: true
---

# Timeline

Compose tweens into a single, scrubbable timeline.

This timeline is itself a tween, and thus can be composed into another timeline.

`timeline(sequence <Array>, props <Object>)`

## Install

Popmotion Timeline is a seperate package that will add less than 1kb to your bundle.

```
npm install popmotion-timeline --save
```

```
import timeline from 'popmotion-timeline';
```

## Usage

Timeline accepts two arguments, `sequence` (required) and `props`.

`sequence` is an array of `tween`s (or `colorTween`s) and timestamps.

By default, a list of tweens will play one after the other:

```javascript
const log = (v) => console.log(v);

timeline([
  tween(0, 400).output(log),
  tween(400, 0).output(log)
]).start();
```

### Timestamps

We can override this default behaviour by inserting timestamps.

A timestamp can either be a raw number, which will set an **absolute** time. For instance:

```javascript
timeline([
  tween(0, 400).output(log),
  1000,
  tween(400, 0).output(log)
]).start();
```

In this example, the second tween will start after 1 second **from the start of the timeline**.

A timestamp can also be a string, which will set a **relative** time. For instance:

```javascript
timeline([
  tween(0, 400).output(log),
  '+200',
  tween(400, 0).output(log)
]).start();
```

This will start the second tween `200`ms **after the first has ended**.

## Parallel and staggered tweens

We can easily play multiple tweens at the same point by providing an array. For instance:

```javascript
timeline([
  [
    tween(0, 400).output((v) => v),
    tween(0, 400).output((v) => v)
    tween(0, 400).output((v) => v)
    tween(0, 400).output((v) => v)
  ]
]).start();
```

These tweens will all run in parallel.

Staggering these tweens is as simple as providing a number as the final item in the array:

```javascript
timeline([
  [
    tween(0, 400).output((v) => v),
    tween(0, 400).output((v) => v)
    tween(0, 400).output((v) => v)
    tween(0, 400).output((v) => v),
    50
  ]
]).start();
```

These tweens will now be played with a `50`ms stagger between them.

## Props

- `duration <Number>`: This is dynamically calculated from the child tweens. However, if `duration` is manually set, the entire timeline is scaled proportionately.

[...Tween](/api/tween)

## Methods

[...Tween](/api/tween)
