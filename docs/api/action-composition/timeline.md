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

## Usage

Timeline accepts one argument, `sequence`.

`sequence` is an array of `tween`s (or `colorTween`s) and timestamps.

By default, a list of tweens will play one after the other:

```javascript
const log = (v) => console.log(v);

timeline([
  tween(0, 400).output(log),
  tween(400, 0).output(log)
]).start();
```

Here, both tweens are playing for their default `300`ms, so the second tween will play at `300`ms and the overall timeline will play for `600`ms.

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

## Props

- `duration <Number>`: This is dynamically calculated from the child tweens. However, if `duration` is manually set, the entire timeline is scaled proportionately.

[...Tween](/api/tween)

## Methods

[...Tween](/api/tween)
